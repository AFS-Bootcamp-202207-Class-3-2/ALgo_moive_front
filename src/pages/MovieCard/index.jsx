import React, { useEffect, useState } from 'react'

import '../SearchPage/index.css'

export default function MovieCard (props) {
    return(
        <div className="movie-list-card">
            <div className="movie-card-image-box">
                <div className="mobile-movie-title-box">
                    title
                </div>
                <div className="mobile-movie-score-box">
                    score
                </div>
                <img className="movie-card-image"
                     src='https://czy-blog-system.oss-cn-shenzhen.aliyuncs.com/2020/11/01/374.gif'/>
            </div>
            <div className="movie-msg-box">
                <div className="movie-msg-data-layout">
                    <div className="movie-msg-title">
                        title
                    </div>
                    <div className="movie-score">
                        6.7
                    </div>
                    <div className="movie-desc-movie-desc">
                        这里是电影的描述
                    </div>
                    <div className="movie-desc-movie-release-date">
                        2022-08-08 12:30:55
                    </div>
                </div>
            </div>
        </div>
    );
};