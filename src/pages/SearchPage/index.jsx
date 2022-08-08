import React, { useEffect, useState } from 'react'

import './index.css'
import { Col, Row } from 'antd';
import MovieCard from "../MovieCard";
import { Avatar, Card, Skeleton, Switch } from 'antd';
const { Meta } = Card;
export default function SearchPage (props) {
    let title="标题"
    return(
        <div>
            <div className="movie-list-card-col">
                <MovieCard/>
                <MovieCard/>
            </div>
            <div className="movie-list-card-col">
                <MovieCard/>
                <MovieCard/>
            </div>
            <div className="movie-list-card-col">
                <MovieCard/>
                <MovieCard/>
            </div>
            <div className="movie-list-card-col">
                <MovieCard/>
                <MovieCard/>
            </div>
            <div className="movie-list-card-col">
                <MovieCard/>
                <MovieCard/>
            </div>



        </div>
    );
};