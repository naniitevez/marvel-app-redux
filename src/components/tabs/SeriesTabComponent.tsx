import React, { useEffect } from "react";
import {
  getCharacterDetailState,
  getCharacterSeries,
} from "../../redux/characterDetailSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TabComponentProps } from "../../types/types";

const SeriesTabComponent: React.FC<TabComponentProps> = ({ id, limit }) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(getCharacterDetailState);

  useEffect(() => {
    dispatch(getCharacterSeries({ id, limit }));
  }, []);

  return <section>series tab</section>;
};

export default SeriesTabComponent;
