import api from "./api";
const ScreeningApi =  {
    getCinemas(cinemaId,moiveId) {
        return api.get("/sessions/"+cinemaId+"/"+moiveId );
    }
}
export default ScreeningApi