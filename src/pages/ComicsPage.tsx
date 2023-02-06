import React, { useEffect } from "react";
import CardComponent from "../components/CardComponent";
import ImageBanner from "../components/ImageBanner";
import PaginationComponent from "../components/PaginationComponent";
import { fetchHeroComics, getHeroComics } from "../redux/comicsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const ComicsPage = () => {
  const state = useAppSelector(getHeroComics);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHeroComics(0));
  }, []);

  const itemsCount = state.limit;
  const totalPages = Math.ceil(state.total / itemsCount);

  const handlePageClick = (data: { selected: number }) => {
    const offset = itemsCount * data.selected;

    dispatch(fetchHeroComics(offset));
  };

  return (
    <main>
      <ImageBanner
        image="/assets/banner/characters.jpg"
        alt="Banner de personajes de Marvel"
      />
      <div>
        <h1>Cómics</h1>
      </div>
      <section className="cards-container">
        {state.comics?.map((comic) => (
          <CardComponent
            key={comic.id}
            image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            name={comic.title}
            id={comic.id}
            price={comic.prices}
          />
        ))}
      </section>

      <PaginationComponent
        pageCount={totalPages}
        handleClick={handlePageClick}
      />
    </main>
  );
};

export default ComicsPage;
