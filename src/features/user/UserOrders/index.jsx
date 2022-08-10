import React, { useEffect, useState } from 'react'
import { DeleteOutlined} from '@ant-design/icons'
import './index.css'
export default function UserOrders (props) {
    useEffect(() => {
        console.log('orders');
    });
    const picUrl = 'https://p0.pipi.cn/mmdb/25bfd63302f0fa395b07accde068bfd3c361f.jpg?imageView2/1/w/218/h/300'
    return(
        <div className="user-order-tot-box">

            <div className="orders-title-user">
                我的订单
            </div>


            <div className="user-orders-item">
                <div className="user-orders-item-delete">
                    <DeleteOutlined />
                </div>
                <div className="user-orders-item-upper">
                    <div className="user-orders-item-upper-time">
                        2021-05-08
                    </div>
                    <div className="user-orders-item-upper-sequence">
                        电影订单号：22654567465465
                    </div>
                </div>
                <div className="user-orders-item-down">
                    <div className="user-orders-item-down-pic">
                        <img height="130px" width="95px" src={picUrl}/>
                    </div>
                    <div className="user-orders-item-down-detail-box">
                        <div className="user-orders-item-down-detail">
                            <div className="user-orders-item-down-detail-title">
                                《速度与激情》
                            </div>
                            <div className="user-orders-item-down-detail-cinema">
                                万达影院
                            </div>
                            <div className="user-orders-item-down-detail-room-seat">
                                6座15排
                            </div>
                            <div className="user-orders-item-down-detail-time">
                                周五 5月 21日
                            </div>
                        </div>
                        <div className="user-orders-item-down-detail-price">
                            ￥133.8
                        </div>
                        <div className="user-orders-item-down-detail-state">
                            已完成
                        </div>
                        <div className="user-orders-item-down-detail-link">
                            查看详情
                        </div>
                    </div>
                </div>
            </div>

            <div className="user-orders-item">
                <div className="user-orders-item-delete">
                    <DeleteOutlined />
                </div>
                <div className="user-orders-item-upper">
                    <div className="user-orders-item-upper-time">
                        2021-05-08
                    </div>
                    <div className="user-orders-item-upper-sequence">
                        电影订单号：22654567465465
                    </div>
                </div>
                <div className="user-orders-item-down">
                    <div className="user-orders-item-down-pic">
                        <img height="130px" width="95px" src={picUrl}/>
                    </div>
                    <div className="user-orders-item-down-detail-box">
                        <div className="user-orders-item-down-detail">
                            <div className="user-orders-item-down-detail-title">
                                《速度与激情》
                            </div>
                            <div className="user-orders-item-down-detail-cinema">
                                万达影院
                            </div>
                            <div className="user-orders-item-down-detail-room-seat">
                                6座15排
                            </div>
                            <div className="user-orders-item-down-detail-time">
                                周五 5月 21日
                            </div>
                        </div>
                        <div className="user-orders-item-down-detail-price">
                            ￥133.8
                        </div>
                        <div className="user-orders-item-down-detail-state">
                            已完成
                        </div>
                        <div className="user-orders-item-down-detail-link">
                            查看详情
                        </div>
                    </div>
                </div>
            </div>

            <div className="user-orders-item">
                <div className="user-orders-item-delete">
                    <DeleteOutlined />
                </div>
                <div className="user-orders-item-upper">
                    <div className="user-orders-item-upper-time">
                        2021-05-08
                    </div>
                    <div className="user-orders-item-upper-sequence">
                        电影订单号：22654567465465
                    </div>
                </div>
                <div className="user-orders-item-down">
                    <div className="user-orders-item-down-pic">
                        <img height="130px" width="95px" src={picUrl}/>
                    </div>
                    <div className="user-orders-item-down-detail-box">
                        <div className="user-orders-item-down-detail">
                            <div className="user-orders-item-down-detail-title">
                                《速度与激情》
                            </div>
                            <div className="user-orders-item-down-detail-cinema">
                                万达影院
                            </div>
                            <div className="user-orders-item-down-detail-room-seat">
                                6座15排
                            </div>
                            <div className="user-orders-item-down-detail-time">
                                周五 5月 21日
                            </div>
                        </div>
                        <div className="user-orders-item-down-detail-price">
                            ￥133.8
                        </div>
                        <div className="user-orders-item-down-detail-state">
                            已完成
                        </div>
                        <div className="user-orders-item-down-detail-link">
                            查看详情
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};