import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById } from "../../api/movieDetail";
import { getMovieDetail } from "../../features/movieDetail/movieDetailSlice";
import MovieBox from "../../features/movieDetail/MovieBox";
import MovieDetailTabs from "../../features/movieDetail/MovieDetailTabs";
import "./index.css";

function MovieDetail() {
  const dispatch = useDispatch();
  const nevigator = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getMovieById(id).then((response) => {
      dispatch(getMovieDetail(response.data.data.movie));
    });
  }, [id, dispatch]);
  const movie = useSelector((state) => state.movieDetail.movie);
  const jumpToCinema = () => {
    nevigator(`/cinemas/${id}`);
  };
  return (
    <div className="movie-detail-page">
      <MovieBox
        movie={movie}
        buttonMsg="购票"
        clickButton={jumpToCinema}
      ></MovieBox>
      <MovieDetailTabs movie={movie}></MovieDetailTabs>
    </div>
  );
}

export default MovieDetail;
