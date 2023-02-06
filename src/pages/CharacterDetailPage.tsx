import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getHeroDetail, getHeroes } from "../redux/heroesSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const CharacterDetailPage = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(getHeroes)
  const character = state.heroes[0]
  
  let { id } = useParams();
  const heroId = Number(id);

  useEffect(() => {
    dispatch(getHeroDetail(heroId))
  }, []);

  return <div>ID : {heroId}</div>;
};

export default CharacterDetailPage;
