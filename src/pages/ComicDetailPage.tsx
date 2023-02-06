import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComicDetail, getHeroComics } from "../redux/comicsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const ComicDetailPage = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(getHeroComics);
  const comic = state.comics[0];

  let { id } = useParams();
  const comicId = Number(id);
  // console.log(comic);

  useEffect(() => {
    dispatch(getComicDetail(comicId));
  }, []);
  return (
    <main>
      <section>
        <div>
          <h1>{comic.title}</h1>
          <img
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt=""
          />
        </div>
        <div className="text-container">
          <p>{comic.description}</p>
        </div>
      </section>
      <div className="price-container"></div>
    </main>
  );
};

export default ComicDetailPage;
