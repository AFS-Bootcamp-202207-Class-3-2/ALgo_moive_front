import { Row, Col, Divider, Breadcrumb } from "antd";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCinemaByCinemaId } from "../../../api/cinema";
import "./index.css";

function CinemaDesc() {
  const { cinemaId } = useParams();
  const [cinema, setCinema] = useState({});
  useEffect(() => {
    getCinemaByCinemaId(cinemaId).then((response) => {
      setCinema(response.data.data.cinema);
    });
  }, [cinemaId]);
  return (
    <div className="cinema-des-banner">
      <div className="cinema-des-row">
        <Row>
          <Col span={8} className="image-col">
            <div className="image-box">
              <div className="image">
                <img
                  src="https://p0.meituan.net/mmdb/fd146c7848a0ebca36eb869dfef7c9331034607.png@292w_292h_1e_1c"
                  alt="影院图片"
                  className="image"
                />
              </div>
            </div>
          </Col>
          <Col span={16} className="cinema-col">
            <div className="cinema-des-box">
              <div className="cinema-des-msg">
                <div className="cinema-name">{cinema.cinemaName}</div>
                <Divider></Divider>
                <div>
                  <span>地址&nbsp;&nbsp;</span>
                  {cinema.address}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">ALGO MOVIE</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/cinemaList">影院</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{cinema.cinemaName}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default CinemaDesc;
