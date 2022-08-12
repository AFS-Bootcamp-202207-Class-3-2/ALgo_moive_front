import {v4 as uuidv4} from 'uuid';
import {Button, Col, Descriptions, Divider, PageHeader, Row, Tag} from "antd";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import "./index.css";
import {getOrderById} from "../../api/order";
import {getDurationTime} from "../../util/getDurationTime";
import request from '../../api/api';
import OrderApi from "../../api/OrderApi";

function Ticket() {
    const navigator = useNavigate();
    const {orderId} = useParams();
    const [order, setOrder] = useState({});
    const [jump, setJump] = useState(false);
    const [count,setCount]=useState(0)
    const backToHome = () => {
        navigator("/");
    };
    OrderApi.cycleQueryOrderState(orderId)
        .then((res => {
            let order = res.data.data.order;
            if (order.status === "2") {
                setJump(true)
                navigator('/watchmovie')
            }
        }))
    if (jump){
        return ;
    }
    useEffect(() => {
        getOrderById(orderId).then((response) => {
            let durationTime = getDurationTime(response.data.data.data);
            setOrder(Object.assign(response.data.data.data, {durationTime}));
        });
        console.log('count',count)

        if (jump){
            return ;
        }
        let cycQuery = setInterval(() => {
            setCount(count+1)
            if (jump){
                clearInterval(cycQuery)
            }
        }, 1000);
        // return clearInterval(cycQuery)
    }, [orderId,navigator,count,jump]);
    let qrImagUrl = request.getUri() + '/order/qr-code/finish/' + orderId
    return (
        <div className="ticket-page">
            <PageHeader
                className="site-page-header"
                onBack={backToHome}
                title="订单号"
                subTitle={order.orderId}
                extra={[
                    <Tag color="green" key={uuidv4()}>
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
                        <img src={order.movieCover} alt={order.movieName + "海报"}/>
                    </Col>
                </Row>
                <Divider/>
                <div className="cinema-des">
                    <p>{order.cinemaName}</p>
                    <p>地址：{order.cinemaAddress}</p>
                </div>
                <div className="user-desc">
                    <p>用户名：{order.userNickname}</p>
                    <p>手机号：{order.userPhone}</p>
                </div>
                {
                    <div className="qr-code">

                        <img alt={"二维码"} src={qrImagUrl}/>
                        <p>{order.seatInfo}</p>
                    </div>
                }
                <Button type="primary" onClick={() => navigator("/")}>
                    返回
                </Button>
            </div>
        </div>
    );
}

export default Ticket;
