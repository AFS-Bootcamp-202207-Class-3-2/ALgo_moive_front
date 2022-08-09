import api from './api';

export const getCinemaListByMovieId = (id) =>{
    return api.get("/cinemas?movieId=" + id);
}