import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieById } from "../../api/movieDetail";
import MovieBox from "../../features/movieDetail/MovieBox";
import CinemaList from "../CinemaList";

function CinemaDetail() {
  const { movieId } = useParams();
  const navigator = useNavigate();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    getMovieById(movieId).then((response) => {
      setMovie(response.data.data.movie);
    });
  }, [movieId]);
  const jumpToMovieDetail = () => {
    navigator(`/movie/${movieId}`);
  };
  return (
    <div className="cinema-detail">
      <br />
      <MovieBox
        buttonMsg="查看电影详情"
        movie={movie}
        clickButton={jumpToMovieDetail}
      ></MovieBox>
      <CinemaList movieId={movieId}></CinemaList>
    </div>
  );
}

export default CinemaDetail;
