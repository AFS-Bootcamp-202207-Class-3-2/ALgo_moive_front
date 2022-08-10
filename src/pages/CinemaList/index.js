import React, { useEffect, useState } from "react";
import { getCinemaListByMovieId, getAllCinemaList } from "../../api/cinema";
import "./index.css";
import { Button, Empty } from "antd";
import { useNavigate } from "react-router-dom";

export default function CinemaList(props) {
  const navigator = useNavigate();
  const { movieId } = props;
  const [cinemaList, setCinemaList] = useState([]);
  useEffect(() => {
    if (movieId === "all") {
      getAllCinemaList().then((response) => {
        setCinemaList(response.data.data.cinemas);
      });
    } else {
      getCinemaListByMovieId(movieId).then((response) => {
        setCinemaList(response.data.data.cinemas);
      });
    }
  }, [movieId]);
  const toScreenings = (cinemaId) => {
    navigator("/screenings?cinemaId=" + cinemaId + "&movieId=" + movieId);
  };
  return (
    <div className="cinema_div">
      <h2>影院列表</h2>
      {cinemaList.length === 0 ? (
        <Empty className="empty_style" />
      ) : (
        cinemaList.map((cinema) => (
          <div className="cinemaList_div" key={cinema.id}>
            <div>
              <span className="cinema_style">{cinema.cinemaName}</span>
              <br />
              <span className="address_style">地址：{cinema.address}</span>
            </div>
            <Button
              type="danger"
              shape="round"
              onClick={(e) => toScreenings(cinema.id)}
            >
              选座购票
            </Button>
          </div>
        ))
      )}
    </div>
  );
}
