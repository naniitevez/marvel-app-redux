import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterDetailComponent from "../components/characters/CharacterDetailComponent";
import { LoadRemove, LoadStart } from "../components/Loading";
import {
  getCharacterDetail,
  getCharacterDetailState,
} from "../redux/characterDetailSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { CharacterDetailApiResponse } from "../types/characters";

const CharacterDetailPage = () => {
  const dispatch = useAppDispatch();
  const { detail, status } = useAppSelector(getCharacterDetailState);
  const character: CharacterDetailApiResponse = detail[0];
  const characterImage = `${character?.thumbnail.path}.${character?.thumbnail.extension}`;

  let { id } = useParams();
  const characterId = Number(id);

  useEffect(() => {
    if (status === "loading") {
      LoadStart();
    }
    if (status === "succeced") {
      LoadRemove();
    }
  }, [status]);

  useEffect(() => {
    dispatch(getCharacterDetail(characterId));
  }, []);

  return (
    <main id="character-detail">
      <CharacterDetailComponent
        id={character?.id}
        totalComics={character?.comics.available}
        name={character?.name}
        image={`${characterImage}`}
        description={character?.description}
      />
    </main>
  );
};

export default CharacterDetailPage;
