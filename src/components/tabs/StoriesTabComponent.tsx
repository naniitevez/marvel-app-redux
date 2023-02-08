import React, { useEffect } from "react";
import {
  getCharacterDetailState,
  getCharacterStories,
} from "../../redux/characterDetailSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TabComponentProps } from "../../types/types";

const StoriesTabComponent: React.FC<TabComponentProps> = ({ id, limit }) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(getCharacterDetailState);

  useEffect(() => {
    dispatch(getCharacterStories({ id, limit }));
  }, []);

  return <section>stories tab</section>;
};

export default StoriesTabComponent;
