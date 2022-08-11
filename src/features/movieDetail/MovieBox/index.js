import {
  Button,
  Col,
  InputNumber,
  message,
  Modal,
  Row,
  Slider,
  Statistic,
  Tag,
} from "antd";
import { LikeOutlined } from "@ant-design/icons";
import "./index.css";
import dragonImg from "../../../static/images/dragon.png";
import { useState } from "react";
import { getOrderByMovieId } from "../../../api/movieDetail";
import { loadUserInfo } from "../../../layout/Navigation/NavigationSlice";
import { setSkipToDragon } from "../../login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function MovieBox(props) {
  const { movie, buttonMsg, clickButton } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const token = useSelector((state) => state.navigation.token);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handleOk = () => {
    setIsModalVisible(false);
    getOrderByMovieId(movie.id, inputValue)
      .then((res) => {
        navigator(`/pay/${res.data.data.order.id}/alpayway`, {
          replace: false,
          state: {
            price: res.data.data.order.price,
          },
        });
      })
      .catch((err) => message.error(err.response.data.msg));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  const onClickDragon = () => {
    dispatch(loadUserInfo());
    if (token === "" || token === undefined || token === null) {
      dispatch(setSkipToDragon(movie.id));
      navigator("/login", {
        replace: true,
      });
    } else {
      setIsModalVisible(true);
    }
  };
  return (
    <>
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
            <div>
              <img
                src={dragonImg}
                className="dragon"
                alt=""
                onClick={onClickDragon}
              />
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
      <Modal
        title="升龙服务"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Tag color="#298589">已选座位数</Tag>
        <Row>
          <Col span={12}>
            <Slider
              min={1}
              max={5}
              onChange={onChange}
              value={typeof inputValue === "number" ? inputValue : 0}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={1}
              max={5}
              style={{ margin: "0 16px" }}
              value={inputValue}
              onChange={onChange}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
}

export default MovieBox;
