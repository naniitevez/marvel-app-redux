import { Loading } from "notiflix/build/notiflix-loading-aio";

export const SpinnerStart = () => {
  Loading.standard("Cargando...", { svgColor: "#e23636" });
};
export const SpinnerRemove = () => {
  Loading.remove();
};
