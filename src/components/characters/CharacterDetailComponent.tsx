import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { CharacterDetailComponentProps } from "../../types/types";
import ComicsTabComponent from "../tabs/ComicsTabComponent";
import SeriesTabComponent from "../tabs/SeriesTabComponent";
import StoriesTabComponent from "../tabs/StoriesTabComponent";

const CharacterDetailComponent: React.FC<CharacterDetailComponentProps> = ({
  id,
  totalComics,
  name,
  image,
  description,
}) => {
  return (
    <div>
      <section className="detail-component">
        <div className="image-container">
          <img src={image} alt={name} />
        </div>
        <div className="text-container">
          <div className="title-container">
            <h1>{name}</h1>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      </section>
      <section className="tabs-section">
        {id && (
          <Tabs defaultActiveKey="comics" className="mb-3">
            <Tab eventKey="comics" title="Cómics">
              <ComicsTabComponent id={id} limit={totalComics} />
            </Tab>
            <Tab eventKey="series" title="Series">
              <SeriesTabComponent id={id} limit={totalComics} />
            </Tab>
            <Tab eventKey="stories" title="Historias">
              <StoriesTabComponent id={id} limit={totalComics} />
            </Tab>
          </Tabs>
        )}
      </section>
    </div>
  );
};

export default CharacterDetailComponent;