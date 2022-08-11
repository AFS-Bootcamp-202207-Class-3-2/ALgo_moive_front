import React, {useEffect, useState} from 'react'
import UserOrdersApi from "../../../api/UserOrdersApi";
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import OrdersItem from "../OrdersItem";
import {Pagination} from 'antd';
import NoData from '../../../static/images/NoData.png'
import {saveOrders, setTotalCount} from "../userOrderSlice";

export default function UserOrders(props) {
    const [page, setPage] = useState(1)
    const [pageSize] = useState(3)
    const userInfo = useSelector(state => state.navigation.userInfo);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const orders = useSelector(state => state.userOrder.orders);
    const totalCount = useSelector(state => state.userOrder.totalCount);

    useEffect(() => {
        if (userInfo) {
            UserOrdersApi.getUserOrders(userInfo.id, page, pageSize)
                .then(res => {
                    // dispatch(clearCurrentPageOrders([]))
                    dispatch(saveOrders(res.data.data.orders));
                    dispatch(setTotalCount(res.data.data.totalCount));
                })
        } else {
            navigate('/');
        }
    }, [page, pageSize, totalCount,userInfo,navigate,dispatch]);

    const onChange = (page, pageSize) => {
        setPage(page)
        UserOrdersApi.getUserOrders(userInfo.id, page, pageSize).then(res => {
            // dispatch(clearCurrentPageOrders([]))
            dispatch(saveOrders(res.data.data.orders));
            dispatch(setTotalCount(res.data.data.totalCount));
        })
    }

    return (
        <div className="user-order-tot-box">
            <div className="orders-title-user">
                我的订单
            </div>
            {totalCount === 0 ? <img height={200} width={200} style={{
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