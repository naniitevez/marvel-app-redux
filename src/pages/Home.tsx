import React, { useEffect } from "react";
import "../styles/Home.scss";
import HeroSection from "../components/HeroSection";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchHeroes, getHeroes } from "../redux/heroesSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const heroes = useAppSelector(getHeroes);

  useEffect(() => {
    dispatch(fetchHeroes());
  }, []);

  return (
    <main>
      <HeroSection /> Home
    </main>
  );
};

export default Home;
