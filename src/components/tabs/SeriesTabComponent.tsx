import React, { useEffect } from "react";
import {
  getCharacterDetailState,
  getCharacterSeries,
} from "../../redux/characterDetailSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TabComponentProps } from "../../types/types";
import CardComponent from "../CardComponent";

const SeriesTabComponent: React.FC<TabComponentProps> = ({ id, limit }) => {
  const dispatch = useAppDispatch();
  const { series } = useAppSelector(getCharacterDetailState);

  useEffect(() => {
    dispatch(getCharacterSeries({ id, limit }));
  }, []);

  return (
    <section id="series-tab">
      {series &&
        series.map((serie) => (
          <CardComponent
            key={serie?.id}
            isComic={false}
            name={serie?.title}
            image={`${serie?.thumbnail.path}.${serie?.thumbnail.extension}`}
            id={serie?.id}
          />
        ))}
    </section>
  );
};

export default SeriesTabComponent;
