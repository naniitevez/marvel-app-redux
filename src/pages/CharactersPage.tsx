import React, { useEffect } from "react";
import ImageBanner from "../components/ImageBanner";
import CardComponent from "../components/CardComponent";
import PaginationComponent from "../components/PaginationComponent";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getCharacters, getAllCharactersState } from "../redux/charactersSlice";
import { SpinnerRemove, SpinnerStart } from "../components/Loading";

const CharactersPage = () => {
  const { status, limit, total, characters } = useAppSelector(
    getAllCharactersState
  );
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
    dispatch(getCharacters(0));
  }, []);

  const itemsCount = limit;
  const totalPages = Math.ceil(total / itemsCount);

  const handlePageClick = (data: { selected: number }) => {
    const offset = itemsCount * data.selected;

    dispatch(getCharacters(offset));
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
          {characters?.map((character) => (
            <CardComponent
              isComic={false}
              key={character.id}
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              name={character.name}
              id={character.id}
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
