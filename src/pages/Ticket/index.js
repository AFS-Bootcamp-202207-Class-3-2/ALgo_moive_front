import uuid from "node-uuid";
import QRCode from "qrcode.react";
import { PageHeader, Tag, Descriptions, Row, Col, Divider, Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.css";
import { getOrderById } from "../../api/order";
import { getDurationTime } from "../../util/getDurationTime";

function Ticket() {
  const navigator = useNavigate();
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  const backToHome = () => {
    navigator("/");
  };
  useEffect(() => {
    getOrderById(orderId).then((response) => {
      let durationTime = getDurationTime(response.data.data.data);
      setOrder(Object.assign(response.data.data.data, { durationTime }));
    });
  }, [orderId]);

  return (
    <div className="ticket-page">
      <PageHeader
        className="site-page-header"
        onBack={backToHome}
        title="订单号"
        subTitle={order.orderId}
        extra={[
          <Tag color="green" key={uuid.v4()}>
            已完成
          </Tag>,
        ]}
      />
      <div className="ticket-des">
        <Row>
          <Col span={14}>
            <Descriptions title={order.movieName} layout="vertical" column={2}>
              <Descriptions.Item span={2}>
                {order.durationTime}
              </Descriptions.Item>
              <Descriptions.Item>{order.roomName}</Descriptions.Item>
              <Descriptions.Item>{order.seatInfo}</Descriptions.Item>
              <Descriptions.Item>
                <span className="des-price">总价：{order.price}元</span>
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={10} className="img-col">
            <img src={order.movieCover} alt={order.movieName + "海报"} />
          </Col>
        </Row>
        <Divider />
        <div className="cinema-des">
          <p>{order.cinemaName}</p>
          <p>地址：{order.cinemaAddress}</p>
        </div>
        <div className="user-desc">
          <p>用户名：{order.userNickname}</p>
          <p>手机号：{order.userPhone}</p>
        </div>
        {order.seatInfo &&
          order.seatInfo.split(" ").map((item, index) => {
            return (
              <div className="qr-code" key={"qrcode-" + index}>
                <QRCode
                  //之后如果后端可以返回url再加value
                  value={""}
                  size={200}
                  fgColor="#000000"
                />
                <p>{item}</p>
              </div>
            );
          })}
        <Button type="primary" onClick={() => navigator("/")}>
          返回
        </Button>
      </div>
    </div>
  );
}

export default Ticket;
