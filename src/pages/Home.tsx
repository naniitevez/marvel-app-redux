import React, { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchHeroes, getHeroes } from "../redux/heroesSlice";
import { fetchHeroComics, getHeroComics } from "../redux/comicsSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const heroes = useAppSelector(getHeroes);
  const comics = useAppSelector(getHeroComics);

  useEffect(() => {
    
    // dispatch(fetchHeroComics(0));
  }, []);

  return (
    <main>
      <HeroSection /> Home
    </main>
  );
};

export default Home;
