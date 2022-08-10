import { Card, Col, Row } from "antd";
import { useNavigate, NavLink } from "react-router-dom";
import MovieItem from "./MovieItem";
import "./index.css";
import React from "react";

export default function RecentMovies(props) {
  const { movies } = props;
  const navigate = useNavigate();
  const jumpToMovieDetail = (id) => {
    navigate(`movie/${id}`);
  };
  return (
    <div>
      <div className="home-recent">
        <span className="recent-title">
          即将上映
        </span>
        <NavLink to="/movies" className="recent-link">
          {"全部 >"}
        </NavLink>
      </div>
      <div className="site-card-wrapper">
        <Row gutter={[24, 24]}>
          {movies.map((movie) => (
            <Col span={6} key={movie.id}>
              <Card
                hoverable
                cover={
                  <div className="image_style">
                    <img
                      alt="example"
                      src={movie.cover}
                      style={{ width: 180 }}
                    />
                    <div className="movie_desc">
                      <div className="movie_score">
                        <b>{movie.score}</b>
                      </div>
                    </div>
                  </div>
                }
                style={{ width: 180 }}
                onClick={() => jumpToMovieDetail(movie.id)}
              >
                <MovieItem key={movie.id} movie={{ movie }} />
              </Card>
                <div className="release-date">8月28日上映</div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
