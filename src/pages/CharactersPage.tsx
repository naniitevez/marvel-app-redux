import React from "react";
import ImageBanner from "../components/ImageBanner";
import CardComponent from "../components/CardComponent";

const CharactersPage = () => {
  return (
    <main id="characters-page">
      <ImageBanner
        image="/assets/banner/characters.jpg"
        alt="Banner de personajes de Marvel"
      />
      <section>
        <div id="cards-container">
          <CardComponent image="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg" name="Alguien" />
        </div>
      </section>
    </main>
  );
};

export default CharactersPage;
