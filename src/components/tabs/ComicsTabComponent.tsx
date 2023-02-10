import React, { useEffect } from "react";
import {
  getCharacterComics,
  getCharacterDetailState,
} from "../../redux/characterDetailSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TabComponentProps } from "../../types/types";
import CardComponent from "../CardComponent";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const ComicsTabComponent: React.FC<TabComponentProps> = ({ characterId, limit }) => {
  const dispatch = useAppDispatch();
  const { comics } = useAppSelector(getCharacterDetailState);

  useEffect(() => {
    dispatch(getCharacterComics({ characterId, limit }));
  }, []);

  return (
    <section id="comics-tab">
      <Splide
        options={{
          width: "100%",
          type: "loop",
          drag: "free",
          snap: true,
          perPage: 4,
          breakpoints: {
            1200: {
              perPage: 3,
            },
            850: {
              perPage: 2,
            },
            590: {
              perPage: 1,
            }
          },
        }}
      >
        {comics &&
          comics.map((comic) => (
            <SplideSlide key={comic?.id}>
              <CardComponent
                isComic={true}
                name={comic?.title}
                image={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
                id={comic?.id}
                price={comic?.prices[0].price}
              />
            </SplideSlide>
          ))}
      </Splide>
    </section>
  );
};

export default ComicsTabComponent;
