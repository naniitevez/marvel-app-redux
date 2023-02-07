import React, { useEffect } from "react";
import ImageBanner from "../components/ImageBanner";
import CardComponent from "../components/CardComponent";
import PaginationComponent from "../components/PaginationComponent";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchHeroes, getHeroes } from "../redux/heroesSlice";
import { LoadRemove, LoadStart } from "../components/Loading";

const CharactersPage = () => {
  const state = useAppSelector(getHeroes);
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
    dispatch(fetchHeroes(0));
  }, []);

  const itemsCount = state.limit;
  const totalPages = Math.ceil(state.total / itemsCount);

  const handlePageClick = (data: { selected: number }) => {
    const offset = itemsCount * data.selected;

    dispatch(fetchHeroes(offset));
  };

  return (
    <main id="characters-page">
      <ImageBanner
        image="/assets/banner/characters.jpg"
        alt="Banner de personajes de Marvel"
      />
      <div className="title-container">
        <h1>Personajes</h1>
      </div>
      <div className="separator">
        <span></span>
      </div>
      <section>
        <div className="cards-container">
          {state.heroes?.map((hero) => (
            <CardComponent
              isComic={false}
              key={hero.id}
              image={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              name={hero.name}
              id={hero.id}
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

export default CharactersPage;
