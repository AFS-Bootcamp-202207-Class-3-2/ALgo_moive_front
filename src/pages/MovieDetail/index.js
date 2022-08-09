import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../api/movieDetail";
import { getMovieDetail } from "../../features/movieDetail/movieDetailSlice";
import MovieBox from "../../features/movieDetail/MovieBox";
import MovieDetailTabs from "../../features/movieDetail/MovieDetailTabs";
import "./index.css";

function MovieDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const getMovie = () => {
    getMovieById(id).then((response) => {
      dispatch(getMovieDetail(response.data.data.movie));
    });
  };
  useEffect(() => {
    getMovie();
  }, []);
  const movie = useSelector((state) => state.movieDetail.movie);
  return (
    <div className="movie-detail-page">
      <MovieBox movie={movie} buttonMsg="购票"></MovieBox>
      <MovieDetailTabs movie={movie}></MovieDetailTabs>
    </div>
  );
}

export default MovieDetail;
