import api from "./api";
const ScreeningApi =  {
    getCinemas(cinemaId,moiveId) {
        return api.get("/sessions/"+cinemaId+"/"+moiveId );
    },

    getCinemasBySessionRequest(sessionRequest) {
        return api.post("/sessions",{
            cinemaId:sessionRequest.cinemaId,
            movieId:sessionRequest.movieId,
            filterDate:sessionRequest.filterDate
        });
    }
}
export default ScreeningApi