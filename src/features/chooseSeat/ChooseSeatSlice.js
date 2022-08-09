import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    seatsInfo: [],
    filmInfo: {
        name: "",
        type: "",
        duration: 0,
        cinema: "",
        filmRoom: "",
        price: 0,
        poster: ""
    }

};
const ChooseSeatSlice = createSlice({
    name: "chooseSeat",
    initialState,
    reducers: {
        setSeatsInfo: (state, action) => {
            state.seatsInfo = action.payload.seats;
        },
        setFilmInfo: (state, action) => {
            state.filmInfo.name = action.payload.movieName;
            state.filmInfo.type = action.payload.movieType;
            state.filmInfo.duration = action.payload.duration;
            state.filmInfo.cinema = action.payload.cinemaName;
            state.filmInfo.filmRoom = action.payload.roomName;
            state.filmInfo.price = action.payload.price;
            state.filmInfo.poster = action.payload.poster;
            state.filmInfo.arrange = action.payload.startTime;
        },
        updateSeatInfo: (state, action) => {
            state.seatsInfo = action.payload;
        }
    },
});

export const {setSeatsInfo, setFilmInfo, updateSeatInfo} = ChooseSeatSlice.actions;
export default ChooseSeatSlice.reducer;