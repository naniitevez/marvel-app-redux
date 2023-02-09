import React, { useEffect } from "react";
import CardComponent from "../components/CardComponent";
import HeroSection from "../components/home/HeroSection";
import { SpinnerRemove, SpinnerStart } from "../components/Loading";
import {
  getAllCharactersState,
  getCharactersOrderByModified,
} from "../redux/charactersSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Home = () => {
  const dispatch = useAppDispatch();
  const { orderByModified, status } = useAppSelector(getAllCharactersState);

  useEffect(() => {
    if (status === "loading") SpinnerStart();

    if (status === "succeced") SpinnerRemove();
  });

  useEffect(() => {
    dispatch(getCharactersOrderByModified());
  }, []);

  return (
    <main id="home-page">
      <HeroSection />
      <div className="title-container">
        <h1>Últimos modificados</h1>
      </div>
      <div className="separator">
        <span></span>
      </div>
      <section>
        <div className="cards-container">
          {orderByModified?.map((character) => (
            <CardComponent
              key={character?.id}
              isComic={false}
              name={character?.name}
              image={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
              id={character?.id}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
