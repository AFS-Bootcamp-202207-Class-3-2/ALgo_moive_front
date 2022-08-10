import api from "./api";

export const getCinemaListByMovieId = (id) => {
  return api.get("/cinemas?movieId=" + id);
};

export const getAllCinemaList = () => {
  return api.get("/cinemas");
};

export const getCinemaByCinemaId = (cinemaId) => {
  return api.get("/cinemas/" + cinemaId);
};

export const getSeatAndMovieInfo = (id) => {
  return api.get("/sessions/" + id);
};

export const getOrderInfoByObject = (param) => {
  return api.post("/order/generateOrder", param);
};
