import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect } from "react";
import {
  getCharacterDetailState,
  getCharacterSeries,
} from "../../redux/characterDetailSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import CardComponent from "../CardComponent";

interface TabComponentProps {
  characterId: number;
  limit: number;
}

const SeriesTabComponent: React.FC<TabComponentProps> = ({
  characterId,
  limit,
}) => {
  const dispatch = useAppDispatch();
  const { series } = useAppSelector(getCharacterDetailState);

  useEffect(() => {
    dispatch(getCharacterSeries({ characterId, limit }));
    // eslint-disable-next-line
  }, [characterId, limit]);

  return (
    <section id="series-tab">
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
            },
          },
        }}
      >
        {series &&
          series.map((serie) => (
            <SplideSlide key={serie?.id}>
              <CardComponent
                isComic={false}
                name={serie?.title}
                image={`${serie?.thumbnail.path}.${serie?.thumbnail.extension}`}
                id={serie?.id}
              />
            </SplideSlide>
          ))}
      </Splide>
    </section>
  );
};

export default SeriesTabComponent;
