import Carousel from "../../features/home/Carousel";
import MovieGroup from "../../features/home/MovieGroup";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getMovies} from "../../api/home";
import {addAllMovies} from "../../features/home/HomeSlice";

function Home() {
    const movies = useSelector(state => state.home.movies);
    const dispatch = useDispatch();
    useEffect(()=>{
        getMovies().then(response => {
            dispatch(addAllMovies(response.data.data.movies.content));
        })
    },[dispatch]);
  return (
      <div>
        <Carousel />
          <MovieGroup movies = {movies}/>
      </div>
  );
}

export default Home;
