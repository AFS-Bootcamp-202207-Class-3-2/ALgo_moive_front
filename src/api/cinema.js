import api from './api';

export const getCinemaListByMovieId = (id) =>{
    return api.get("/cinemas?movieId=" + id);
}

export const getSeatAndMovieInfo = (id) =>{
    return api.get("/sessions/ALGOSESSION1");
}
