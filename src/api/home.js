import api from './api';

export const getCarousels = () => {
    return api.get("/movies/carousel");
};

