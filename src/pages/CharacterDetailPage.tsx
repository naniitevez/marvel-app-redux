import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailComponent from "../components/DetailComponent";
import { getHeroDetail, getHeroes } from "../redux/heroesSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const CharacterDetailPage = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(getHeroes);
  const character = state?.heroDetail[0];
  const characterComics = character?.comics;

  let { id } = useParams();
  const heroId = Number(id);

  useEffect(() => {
    dispatch(getHeroDetail(heroId));
  }, []);

  return (
    <main id="character-detail">
      <DetailComponent
        isComic={false}
        name={character?.name}
        image={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
        description={character?.description}
        comics={characterComics}
      />
    </main>
  );
};

export default CharacterDetailPage;
