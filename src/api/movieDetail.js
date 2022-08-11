import api from "./api";

export const getMovieById = (id) => {
  return api.get("/movies/" + id);
};

export const getOrderByMovieId = (id, num) => {
  return api.post(`/movies/${id}/onestop/${num}`);
};
