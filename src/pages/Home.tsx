import React, { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchHeroes, getHeroes } from "../redux/heroesSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const heroes = useAppSelector(getHeroes);

  useEffect(() => {
    dispatch(fetchHeroes(0));
  }, []);

  return (
    <main>
      <HeroSection /> Home
    </main>
  );
};

export default Home;
