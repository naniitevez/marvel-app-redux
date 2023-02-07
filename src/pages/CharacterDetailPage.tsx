import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { LoadRemove, LoadStart } from "../components/Loading";
import { getCharacterDetail, getCharacterDetailState } from "../redux/characterDetailSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const CharacterDetailPage = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(getCharacterDetailState);
  console.log(state)

  let { id } = useParams();
  const characterId = Number(id);

  useEffect(() => {
    if (state.status === "loading") {
      LoadStart();
    }
    if (state.status === "succeced") {
      LoadRemove();
    }
  }, [state.status]);

  useEffect(() => {
    dispatch(getCharacterDetail(characterId));
  }, []);

  return (
    <main id="character-detail">
      {/* <DetailComponent
        isComic={false}
        name={character?.name}
        image={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
        description={character?.description}
        comics={characterComics}
      /> */}
    </main>
  );
};

export default CharacterDetailPage;
