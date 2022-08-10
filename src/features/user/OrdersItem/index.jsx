import React from 'react'
import '../UserOrders/index.css'
import {DeleteOutlined} from "@ant-design/icons";
export default function OrdersItem(props) {
    const {order} = props
    return (
        <div>
            <div className="user-orders-item">
                <div className="user-orders-item-delete">
                    <DeleteOutlined/>
                </div>
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
                        <img height="130px" width="95px" src={order.movieCover}/>
                    </div>
                    <div className="user-orders-item-down-detail-box">
                        <div className="user-orders-item-down-detail">
                            <div className="user-orders-item-down-detail-title">
                                {order.movieName}
                            </div>
                            <div className="user-orders-item-down-detail-cinema">
                                {order.roomName}
                            </div>
                            <div className="user-orders-item-down-detail-room-seat">
                                {order.seatInfo.split(' ').map((item, idx) => {
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
                            <span className={order.status === '1'?"user-orders-item-down-detail-state-finish-span":"user-orders-item-down-detail-state-span"}>
                                {order.status === '1'?'已完成':'未完成'}
                            </span>
                        </div>
                        {/*<div className="user-orders-item-down-detail-link">*/}
                        {/*    */}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>);
}
