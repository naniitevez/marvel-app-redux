import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ComicDetailComponent from "../components/comics/ComicDetailComponent";
import { LoadRemove, LoadStart } from "../components/Loading";
import { getComicDetail, getAllComicsState } from "../redux/comicsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const ComicDetailPage = () => {
  const dispatch = useAppDispatch();
  const { comicDetail, status } = useAppSelector(getAllComicsState);
  const comic = comicDetail[0];

  let { id } = useParams();
  const comicId = Number(id);

  useEffect(() => {
    if (status === "loading") {
      LoadStart();
    }
    if (status === "succeced") {
      LoadRemove();
    }
  }, [status]);

  useEffect(() => {
    dispatch(getComicDetail(comicId));
  }, []);

  return (
    <main id="comic-detail">
      <ComicDetailComponent />
    </main>
  );
};

export default ComicDetailPage;
