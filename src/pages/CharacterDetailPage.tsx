import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getHeroDetail, getHeroes } from "../redux/heroesSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const CharacterDetailPage = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(getHeroes)
  const character = state.heroes[0]
  const characterComics = character.comics;


  let { id } = useParams();
  const heroId = Number(id);

  useEffect(() => {
    dispatch(getHeroDetail(heroId))
  }, []);

  return (
    <main id="character-detail">
      <section className="character-info">
        <div className="image-container">
          <h1>{character.name}</h1>
          <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" />
        </div>
        <div className="text-container">
          <p>{character.description}</p>
        </div>
      </section>
      <div className="comics-container"></div>
    </main>
  );
};

export default CharacterDetailPage;
