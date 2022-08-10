import api from './api';

export const getCarousels = () => {
    return api.get("/movies/carousel");
};

export const getMovies = () =>{
    return api.get("/movies?pageSize=8&sortType=hotSpot")
};

export const getBoxOffice = () =>{
    return api.get("/movies?pageSize=5&sortType=boxOffice")
};