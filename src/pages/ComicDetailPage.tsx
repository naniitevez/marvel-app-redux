import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SpinnerRemove, SpinnerStart } from "../components/Loading";
import { getComicDetail, getAllComicsState } from "../redux/comicsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const ComicDetailPage = () => {
  const dispatch = useAppDispatch();
  const { comicDetail, status } = useAppSelector(getAllComicsState);
  const comic = comicDetail[0];
  const comicImage = `${comic?.thumbnail.path}.${comic?.thumbnail.extension}`;
  const creators = comic?.creators.items;

  let { id } = useParams();
  const comicId = Number(id);

  useEffect(() => {
    if (status === "loading") {
      SpinnerStart();
    }
    if (status === "succeced") {
      SpinnerRemove();
    }
  }, [status]);

  useEffect(() => {
    dispatch(getComicDetail(comicId));
  }, []);

  return (
    <main id="comic-detail">
      <header
        className="detail-header"
        style={{ backgroundImage: `url(${comicImage})` }}
      >
        <div className="gradient"></div>
        <section className="detail-info">
          <div className="image-container">
          <div className="price-content">${comic?.prices[0].price}</div>
            <img src={comicImage} alt={comic?.title} />
          </div>
          <div className="text-container">
            <div className="title-container">
              <h1>{comic?.title}</h1>
            </div>
            {creators && (
              <ul className="creators-list">
                {creators.map((creator) => {
                  const role =
                    creator.role.charAt(0).toUpperCase() +
                    creator.role.slice(1);

                  return (
                    <li key={creator.name}>
                      <div>
                        <strong>{role}:</strong>
                      </div>
                      <div>{creator.name}</div>
                    </li>
                  );
                })}
              </ul>
            )}
            <div className="description">
              <p>{comic?.description}</p>
            </div>
          </div>
        </section>
      </header>
    </main>
  );
};

export default ComicDetailPage;
