import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailComponent from "../components/DetailComponent";
import { LoadRemove, LoadStart } from "../components/Loading";
import { getComicDetail, getAllComics } from "../redux/comicsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const ComicDetailPage = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(getAllComics);
  const comic = state?.comicDetail[0];

  let { id } = useParams();
  const comicId = Number(id);

  useEffect(() => {
    if (state.status === "loading") {
      LoadStart();
    }
    if (state.status === "succeced") {
      LoadRemove();
    }
  }, [state.status]);

  useEffect(() => {
    dispatch(getComicDetail(comicId));
  }, []);

  return (
    <main id="comic-detail">
      <DetailComponent
        isComic={true}
        name={comic?.title}
        image={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
        description={comic?.description}
        price={comic?.prices[0].price}
      />
    </main>
  );
};

export default ComicDetailPage;
