import { Loading } from "notiflix/build/notiflix-loading-aio";

export const LoadStart = () => {
  Loading.standard("Cargando...", { svgColor: "#e23636" });
};
export const LoadRemove = () => {
  Loading.remove();
};
