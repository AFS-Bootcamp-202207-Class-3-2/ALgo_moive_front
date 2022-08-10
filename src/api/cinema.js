import api from './api';

export const getCinemaListByMovieId = (id) =>{
    return api.get("/cinemas?movieId=" + id);
}

export const getSeatAndMovieInfo = (id) =>{
    return api.get("/sessions/"+id);
}
export const getOrderInfoByObject = (param) =>{
    return api.post("/order/generateOrder", param);
}

