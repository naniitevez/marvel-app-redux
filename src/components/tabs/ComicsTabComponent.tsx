import React, { useEffect } from "react";
import {
  getCharacterComics,
  getCharacterDetailState,
} from "../../redux/characterDetailSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TabComponentProps } from "../../types/types";
import CardComponent from "../CardComponent";

const ComicsTabComponent: React.FC<TabComponentProps> = ({ id, limit }) => {
  const dispatch = useAppDispatch();
  const { comics } = useAppSelector(getCharacterDetailState);

  useEffect(() => {
    dispatch(getCharacterComics({ id, limit }));
  }, []);

  return (
    <section id="comics-tab">
      {comics &&
        comics.map((comic) => (
          <CardComponent
            key={comic?.id}
            isComic={true}
            name={comic?.title}
            image={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
            id={comic?.id}
            price={comic?.prices[0].price}
          />
        ))}
    </section>
  );
};

export default ComicsTabComponent;
