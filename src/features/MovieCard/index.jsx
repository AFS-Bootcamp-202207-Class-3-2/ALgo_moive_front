import React from 'react'

import '../../pages/SearchPage/index.css'

export default function MovieCard (props) {
    //{id,movieName,actors,movieDesc,releaseDate}
    const {movie} = props
    return(
        <div className="movie-list-card">
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
                     src='https://czy-blog-system.oss-cn-shenzhen.aliyuncs.com/2020/11/01/374.gif'/>
            </div>
            <div className="movie-msg-box">
                <div className="movie-msg-data-layout">
                    <div className="movie-msg-title">
                        {movie.movieName}
                    </div>
                    <div className="movie-hot-spot">
                        已播放：<span className="movie-card-hot-spot-show">{movie.hotSpot}</span>
                    </div>
                    <div className="movie-score">
                        <span className="movie-card-inner-desc">电影评分：</span>{movie.score}
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