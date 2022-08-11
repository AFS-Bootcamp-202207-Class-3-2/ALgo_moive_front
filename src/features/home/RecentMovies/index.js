import { Card, Col, Row } from "antd";
import { useNavigate, NavLink } from "react-router-dom";
import RecentMovieItem from "./RecentMovieItem";
import "./index.css";
import React, { useEffect, useState } from "react";
import { getFutureMovie } from "../../../api/home";
import moment from "moment";

export default function RecentMovies() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const jumpToMovieDetail = (id) => {
    navigate(`movie/${id}`);
  };
  useEffect(() => {
    getFutureMovie().then((response) => {
      setMovies(response.data.data.movies.slice(0, 8));
      console.log(response.data.data.movies);
    });
  }, []);

  return (
    <div>
      <div className="home-recent">
        <span className="recent-title">即将上映</span>
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
                        <b>{movie.score !== 0 ? movie.score : '暂无评分'}</b>
                      </div>
                    </div>
                  </div>
                }
                style={{ width: 180 }}
                onClick={() => jumpToMovieDetail(movie.id)}
              >
                <RecentMovieItem key={movie.id} movie={{ movie }} />
              </Card>
              <div className="release-date">
                {moment(movie.releaseDate).format("MM月DD日")}上映
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
