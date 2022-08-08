import { Card, Col, Row } from 'antd';
import React from "react";
import MovieItem from "./MovieItem";
import './index.css'

export default function MovieGroup(props) {
    const {movies} = props;
    return (
        <div className="card_div">
            <div className="site-card-wrapper">
                <Row gutter={[24, 24]}>
                    {
                        movies.map((movie) =>
                            <Col span={6} key={movie.id}>
                                <Card
                                    hoverable
                                    style={{width: 240}}
                                    cover={<img alt="example" src={movie.cover}/>}
                                >
                                    <div className="movie_desc">
                                        <div>
                                            {movie.movieName}
                                        </div>
                                        <div className="movie_score">
                                            {movie.score}
                                        </div>
                                    </div>
                                        <MovieItem key={movie.id} movie={{movie}}/>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </div>
        </div>
    );
}