import React from 'react'
import '../UserOrders/index.css'
import {DeleteOutlined} from "@ant-design/icons";
import {Button, message, Popconfirm} from 'antd';
import {useNavigate} from "react-router-dom";
import Finish from '../../../static/images/finish.png'
import OrderApi from '../../../api/UserOrdersApi'

export default function OrdersItem(props) {
    const {order} = props
    const navigate = useNavigate()
    const viewDetail = (e) => {
        navigate(`/order/${order.orderId}`)
    };
    const deleteOrder =()=>{
        OrderApi.deleteOrdersFromUserById(order.orderId)
            .then(res=>{
                message.success(res.data.msg);
                navigate('/user')
            })
    }
    return (
        <div>
            <div className="user-orders-item">
                {order.status !== '1'?
                    <Popconfirm placement="top" title={"你确定删除该订单吗？"} onConfirm={deleteOrder} okText="Yes" cancelText="No">

                    <div className="user-orders-item-delete">
                    <DeleteOutlined/>
                </div>
                    </Popconfirm>:
                    <div className="user-orders-item-delete-f">
                    <img src={Finish} alt={"finish"} width={24} height={24}/>
                </div>
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
                        <div className="user-orders-item-down-detail-link">
                            {order.status === '1'?<Button onClick={viewDetail}
                                     size={"small"} type="link">查看详情</Button>:<Button ghost disabled>
                                无法查看发票
                            </Button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
