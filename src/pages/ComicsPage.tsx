import React, { useEffect } from "react";
import CardComponent from "../components/CardComponent";
import ImageBanner from "../components/ImageBanner";
import { SpinnerRemove, SpinnerStart } from "../components/Loading";
import PaginationComponent from "../components/PaginationComponent";
import { getComics, getAllComicsState } from "../redux/comicsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const ComicsPage = () => {
  const { status, limit, total, comics } = useAppSelector(getAllComicsState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "loading") {
      SpinnerStart();
    }
    if (status === "succeced") {
      SpinnerRemove();
    }
  }, [status]);

  useEffect(() => {
    dispatch(getComics(0));
  }, []);

  const itemsCount = limit;
  const totalPages = Math.ceil(total / itemsCount);

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
          {comics?.map((comic) => (
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
