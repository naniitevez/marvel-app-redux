import React, { useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { SpinnerRemove, SpinnerStart } from "../components/Loading";
import ComicsTabComponent from "../components/tabs/ComicsTabComponent";
import SeriesTabComponent from "../components/tabs/SeriesTabComponent";
import {
  getCharacterDetail,
  getCharacterDetailState,
} from "../redux/characterDetailSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import "../styles/DetailPage.scss";

const CharacterDetailPage = () => {
  const dispatch = useAppDispatch();
  const { detail, status } = useAppSelector(getCharacterDetailState);
  const character = detail[0];
  const characterImage = `${character?.thumbnail.path}.${character?.thumbnail.extension}`;
  const totalComics = character?.comics.available;

  let { id } = useParams();
  const characterId = Number(id);

  useEffect(() => {
    if (status === "loading") SpinnerStart();
    if (status === "succeced") SpinnerRemove();
  }, [status]);

  useEffect(() => {
    dispatch(getCharacterDetail(characterId));
    // eslint-disable-next-line
  }, [characterId]);

  return (
    <main id="character-detail">
      <header
        className="detail-header"
        style={{ backgroundImage: `url(${characterImage})` }}
      >
        <div className="gradient"></div>
        <section className="detail-info">
          <div className="image-container">
            <img src={characterImage} alt={character?.name} />
          </div>
          <div className="text-container">
            <div className="title-container">
              <h1>{character?.name}</h1>
            </div>
            <div className="description">
              <p>{character?.description}</p>
            </div>
          </div>
        </section>
      </header>
      <section className="tabs-section">
        {character?.id && (
          <Tabs defaultActiveKey="comics" className="mb-3">
            <Tab eventKey="comics" title="Cómics">
              <ComicsTabComponent
                characterId={character?.id}
                limit={totalComics}
              />
            </Tab>
            <Tab eventKey="series" title="Series">
              <SeriesTabComponent
                characterId={character?.id}
                limit={totalComics}
              />
            </Tab>
          </Tabs>
        )}
      </section>
    </main>
  );
};

export default CharacterDetailPage;
