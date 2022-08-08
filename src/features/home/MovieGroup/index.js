import { Card, Col, Row } from "antd";
import { useNavigate, NavLink } from "react-router-dom";
import MovieItem from "./MovieItem";
import "./index.css";

export default function MovieGroup(props) {
  const { movies } = props;
  const navigate = useNavigate();
  const jumpToMovieDetail = (id) => {
    navigate(`movie/${id}`);
  };
  return (
    <div>
      <div className="home-hot">
        <span className="hot-title">
          正在热映<i className="iconfont fire-icon">&#xe617;</i>
        </span>
        <NavLink to="/movie" className="hot-link">
          {"全部 >"}
        </NavLink>
      </div>
      <div className="site-card-wrapper">
        <Row gutter={[24, 24]}>
          {movies.map((movie) => (
            <Col span={6} key={movie.id}>
              <Card
                hoverable
                style={{ width: 200 }}
                cover={<img alt="example" src={movie.cover} />}
                onClick={() => jumpToMovieDetail(movie.id)}
              >
                <div className="movie_desc">
                  <div>{movie.movieName}</div>
                  <div className="movie_score">{movie.score}</div>
                </div>
                <MovieItem key={movie.id} movie={{ movie }} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
