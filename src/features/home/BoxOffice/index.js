import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import { getBoxOffice } from "../../../api/home";
import { useEffect, useState } from "react";
import { CrownOutlined } from "@ant-design/icons";
import { message } from "antd";

function BoxOffice() {
  const [boxOffice, setBoxOffice] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    getBoxOffice()
      .then((res) => {
        setBoxOffice(res.data.data.movies.content);
      })
      .catch(function (msg) {
        message.error(msg);
      });
  }, []);

  const jumpToMovieDetail = (movie) => {
    navigator(`/movie/${movie.id}`);
  };
  return (
    <div className="box-office">
      <div className="box-office-header">
        <span className="box-office-title">今日票房</span>
        <NavLink className="box-office-rank-title" to="/top">
          {"查看完整榜单 >"}
        </NavLink>
      </div>
      <div className="box-office-rank-box">
        <div
          className="box-office-rank-one"
          onClick={() => jumpToMovieDetail(boxOffice[0])}
        >
          <CrownOutlined className="icon-crown" rotate={315} />
          <img
            src={boxOffice[0] ? boxOffice[0].cover : ""}
            alt="热度第一电影海报"
          />
          <div className="box-office-rank-one-box">
            <span className="item-first-movieName">
              {boxOffice[0] ? boxOffice[0].movieName : ""}
            </span>
            <span className="item-first-boxOffice">
              {boxOffice[0] ? boxOffice[0].boxOffice : ""}万
            </span>
          </div>
        </div>
        <div className="box-office-rank-behind">
          {boxOffice.slice(1, boxOffice.length).map((item, index) => {
            return (
              <div
                key={index}
                className="box-office-item"
                onClick={() => jumpToMovieDetail(item)}
              >
                <div className="box-office-item-left">
                  <span className={index < 2 ? "item-index" : ""}>
                    {index + 2}
                  </span>
                  <span className="item-movieName">{item.movieName}</span>
                </div>
                <div className="box-office-item-right">{item.boxOffice}万</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BoxOffice;
