import React from 'react'

import '../../pages/SearchPage/index.css'
import { useNavigate} from "react-router-dom";

export default function MovieCard (props) {
    const navigator = useNavigate();
    //{id,movieName,actors,movieDesc,releaseDate}
    const {movie} = props
    const toMovieDetail = () => {
        navigator("/movie/"+movie.id);
    }
    return(
        <div className="movie-list-card" onClick={toMovieDetail}>
            <div className="movie-card-image-box">
                <div className="mobile-movie-title-box">
                    {movie.movieName}
                </div>
                <div className="mobile-movie-score-box">
                    score
                </div>
                <img
                    className="movie-card-image"
                      alt="movie-pic"
                     src={movie.cover}/>
            </div>
            <div className="movie-msg-box">
                <div className="movie-msg-data-layout">
                    <div className="movie-msg-title">
                        {movie.movieName}
                    </div>
                    <div className="movie-hot-spot">
                        观影人数：<span>{movie.hotSpot}</span>
                    </div>
                    <div className="movie-hot-spot">
                        电影类型：<span>{movie.movieType}</span>
                    </div>
                    <div className="movie-score">
                        <span className="movie-card-inner-desc">电影评分：</span>{movie.score !== 0 ? movie.score : '暂无评分'}
                    </div>
                    <div className="movie-desc-movie-desc">
                        {movie.movieDesc}
                    </div>
                    <div className="movie-desc-movie-release-date">
                        {movie.releaseDate}
                    </div>
                </div>
            </div>
        </div>
    );
};
