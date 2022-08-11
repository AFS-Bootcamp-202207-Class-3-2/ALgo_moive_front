import React from 'react'
import '../UserOrders/index.css'
import {DeleteOutlined,UndoOutlined} from "@ant-design/icons";
import {Button, message, Popconfirm,Tag } from 'antd';
import {useNavigate} from "react-router-dom";
import Finish from '../../../static/images/finish.png'
import UserOrdersApi from "../../../api/UserOrdersApi";
import {deleteOrder,refundOrder} from "../userOrderSlice";
import {useDispatch} from "react-redux";

export default function OrdersItem(props) {
    const {order} = props
    console.log(order)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const viewDetail = (e) => {
        navigate(`/order/${order.orderId}`)
    };

    const gotoPay=()=>{
        navigate(`/pay/${order.orderId}/alpayway`,{
            replace:false,
            state:{
                price:order.price
            }
        })
    }
    //todo:empty case
    const deleteThisOrder = () => {
        const orderId = order.orderId;
        UserOrdersApi.deleteOrdersFromUserById(orderId).then(res=>{
            dispatch(deleteOrder(orderId));
            // console.log(orderId);
            message.success(res.data.msg);
        })
    }
    const returnTicket = ()=>{
        const orderId = order.orderId;
        UserOrdersApi.refundUnlockSeats(orderId).then(res=>{
            //todo:check fail
            dispatch(refundOrder(res.data.data.order));
            console.log(res.data.data.order);
            message.success(res.data.msg);
        })
    }

    const deleteOrderButNoUnlockSeat=()=>{
        const orderId = order.orderId;
        UserOrdersApi.realDeleteForWatched(orderId).then(res=>{
            //todo:flush view fail
            dispatch(deleteOrder(res.data.data.order.id));
            console.log(res.data.data.order);
            message.success(res.data.msg);
        })
    }

    return (
        <div>
            {/*0 待支付 1 待观影 2 已观影 3 退票*/}
            <div className="user-orders-item">
                {order.status === '3' ?
                    <Popconfirm placement="top" title={"你确定删除该订单吗？"} onConfirm={deleteOrderButNoUnlockSeat} okText="Yes"
                                cancelText="No">

                        <div className="user-orders-item-delete">
                            <DeleteOutlined/>
                        </div>
                    </Popconfirm> :
                    order.status === '2' ?
                    <div className="user-orders-item-delete-f">
                        <img src={Finish} alt={"finish"} width={24} height={24}/>
                    </div>:order.status === '1' ?''
                        :
                            //todo:转态0是需要解锁座位的
                            //todo:显示电影院名字和地址
                            <Popconfirm placement="top" title={"你确定删除该订单吗？"} onConfirm={deleteThisOrder} okText="Yes"
                                        cancelText="No">

                                <div className="user-orders-item-delete">
                                    <DeleteOutlined/>
                                </div>
                            </Popconfirm>

                }
                <div className="user-orders-item-upper">
                    <div className="user-orders-item-upper-time">
                        {order.createTime}
                    </div>
                    <div className="user-orders-item-upper-sequence">
                        电影订单号：{order.orderId}
                    </div>
                </div>
                <div className="user-orders-item-down">
                    <div className="user-orders-item-down-pic">
                        <img alt={"电影封面"} height="130px" width="95px" src={order.movieCover}/>
                    </div>
                    <div className="user-orders-item-down-detail-box">
                        <div className="user-orders-item-down-detail">
                            <div className="user-orders-item-down-detail-title">
                                {order.movieName}
                            </div>
                            <div className="user-orders-item-down-detail-cinema">
                                {order.cinemaName}{order.roomName}
                            </div>
                            <div className="user-orders-item-down-detail-cinema">
                                {order.cinemaAddress===null?order.cinemaAddress:''}
                            </div>
                            <div className="user-orders-item-down-detail-room-seat">
                                {
                                    order.seatInfo.split(' ').map((item, idx) => {
                                        let data = item.split(',');
                                        return data[0] + "排" + data[1] + "座 "
                                    })
                                }
                            </div>
                            <div className="user-orders-item-down-detail-time">
                                放映时间：{order.startTime}
                            </div>
                        </div>
                        <div className="user-orders-item-down-detail-price">
                            ￥ {order.price}
                        </div>
                        <div className="user-orders-item-down-detail-state">
                            {/*<span className={order.status === '1'?"user-orders-item-down-detail-state-finish-span":"user-orders-item-down-detail-state-span"}>*/}
                            {/*    {order.status === '1'?'已完成':'未完成'}*/}
                            {/*</span>*/}
                            {
                                order.status === '1' ? <Tag color="cyan">待观影</Tag> : order.status === '2' ?
                                    <Tag color="green">已完成</Tag> : order.status === '3' ? <Tag color="red">已退票</Tag>:
                                <Tag color="blue">待支付</Tag>
                            }
                        </div>
                        <div className="user-orders-item-down-detail-link">
                            {
                                order.status === '1' ?
                                    <div>
                                        <Button size={"small"} onClick={viewDetail}
                                                type="link" >查看详情</Button>
                                        <Button danger onClick={returnTicket} size={"small"}>退票</Button>
                                    </div> :
                                    order.status === '0' ?
                                        //todo:跳转支付页面
                                        <Button size={"small"} size={"small"} onClick={gotoPay}
                                                type="link">去支付</Button>
                                        :
                                        <Button size={"small"} ghost disabled>
                                            无法查看发票
                                        </Button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
