import api from './api';

export const getCarousels = () => {
    return api.get("/movies/carousel");
};

export const getMovies = () =>{
    return api.get("/movies?pageSize=8")
};
