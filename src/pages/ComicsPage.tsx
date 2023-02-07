import React, { useEffect } from "react";
import CardComponent from "../components/CardComponent";
import ImageBanner from "../components/ImageBanner";
import { LoadRemove, LoadStart } from "../components/Loading";
import PaginationComponent from "../components/PaginationComponent";
import { getComics, getAllComics } from "../redux/comicsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const ComicsPage = () => {
  const state = useAppSelector(getAllComics);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (state.status === "loading") {
      LoadStart();
    }
    if (state.status === "succeced") {
      LoadRemove();
    }
  }, [state.status]);

  useEffect(() => {
    dispatch(getComics(0));
  }, []);

  const itemsCount = state.limit;
  const totalPages = Math.ceil(state.total / itemsCount);

  const handlePageClick = (data: { selected: number }) => {
    const offset = itemsCount * data.selected;

    dispatch(getComics(offset));
  };

  return (
    <main id="comics-page">
      <ImageBanner
        image="/assets/banner/characters.jpg"
        alt="Banner de personajes de Marvel"
      />
      <div className="title-container">
        <h1>Cómics</h1>
      </div>
      <div className="separator">
        <span></span>
      </div>
      <section>
        <div className="cards-container">
          {state.comics?.map((comic) => (
            <CardComponent
              isComic={true}
              key={comic.id}
              image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              name={comic.title}
              id={comic.id}
              price={comic.prices[0].price}
            />
          ))}
        </div>
      </section>

      <PaginationComponent
        pageCount={totalPages}
        handleClick={handlePageClick}
      />
    </main>
  );
};

export default ComicsPage;
