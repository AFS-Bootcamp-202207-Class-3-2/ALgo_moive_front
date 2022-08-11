import React, {useEffect, useState} from 'react'
import UserOrdersApi from "../../../api/UserOrdersApi";
import './index.css'
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import OrdersItem from "../OrdersItem";
import {Pagination} from 'antd';
import NoData from '../../../static/images/NoData.png'

export default function UserOrders(props) {
    const [orders, setOrders] = useState([])
    const [page, setPage] = useState(1)
    const [pageSize] = useState(3)
    const userInfo = useSelector(state => state.navigation.userInfo);
    const [totalCount, setTotalCount] = useState(1);
    const navigate = useNavigate()
    useEffect(() => {
        if (userInfo) {
            UserOrdersApi.getUserOrders(userInfo.id, page, pageSize)
                .then(res => {
                    setOrders(res.data.data.orders)
                    setTotalCount(res.data.data.totalCount)
                })
        } else {
            navigate('/');
        }
    }, [page, pageSize, totalCount,userInfo,navigate]);
    const onChange = (page, pageSize) => {
        setPage(page)
        UserOrdersApi.getUserOrders(userInfo.id, page, pageSize)
            .then(res => {
                setOrders(res.data.data.orders)
            })
    }
    return (
        <div className="user-order-tot-box">
            <div className="orders-title-user">
                我的订单
            </div>
            {orders.length === 0 ? <img height={200} width={200} style={{
                display:'block',margin:'0 auto'
            }} alt={"没数据"} src={NoData}/> : <div>
                {
                    orders.map((item, idx) => {
                        return <OrdersItem order={item} key={idx}></OrdersItem>
                    })
                }
                <div>
                    <Pagination pageSize={3} defaultCurrent={1} current={page} total={totalCount} onChange={onChange}/>
                </div>
            </div>}
        </div>
    );
};