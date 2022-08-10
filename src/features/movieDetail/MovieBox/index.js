import { Row, Col, Button, Statistic } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import "./index.css";

function MovieBox(props) {
  const { movie, buttonMsg, clickButton } = props;
  return (
    <Row className="movie-box">
      <Col span={8} className="avatar-col">
        <div className="avatar-box">
          <div className="avatar">
            <img
              src={movie.cover}
              alt={movie.movieName + "海报封面"}
              className="avatar"
            />
          </div>
        </div>
      </Col>
      <Col span={8} className="movie-col">
        <div className="movie-detail-box">
          <div className="movie-detail-msg">
            <div className="movie-name">{movie.movieName}</div>
            <div>
              <span>电影类型&nbsp;&nbsp;</span>
              {movie.movieType}
            </div>
            <div>
              <span>电影时长&nbsp;&nbsp;</span>
              {movie.duration + (movie.durationUnit === "min" ? "分钟" : "")}
            </div>
            <div>
              <span>上映时间&nbsp;&nbsp;</span>
              {movie.releaseDate}
            </div>
          </div>
          <Button
            type="danger"
            className="movie-buy-button"
            onClick={clickButton}
          >
            {buttonMsg}
          </Button>
        </div>
      </Col>
      <Col span={8} className="statistic-col">
        <Statistic
          className="movie-thumbsup"
          title="评分"
          value={movie.score}
          prefix={<LikeOutlined />}
        />
        <Statistic
          className="movie-hotSpot"
          title="热度"
          value={movie.hotSpot}
          prefix={<i className="iconfont">&#xe617;</i>}
        />
      </Col>
    </Row>
  );
}

export default MovieBox;
