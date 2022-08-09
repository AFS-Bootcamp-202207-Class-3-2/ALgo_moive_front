import React, { useEffect, useState } from 'react'

import {FieldTimeOutlined,
    LoadingOutlined, EditOutlined,
    InsertRowAboveOutlined,BankOutlined, WechatOutlined,
    VideoCameraTwoTone ,InfoCircleOutlined,
    AlipayCircleFilled} from '@ant-design/icons';
import {Button, Steps , Menu} from 'antd';
import {useParams, Outlet, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";

import {updateQrValid} from "../../features/pay/paySlice";

import './index.css'
import OrderApi from '../../api/OrderApi'
export default function PaymentPage (props) {
    const {Step} = Steps;
    const {id} = useParams();
    const navigate = useNavigate()
    const [second, setSecond] = useState(30);
    const [min, setMin] = useState(0);
    const dispatch = useDispatch();
    const [orderData,setOrderData] = useState({})
    let countDown;
    const qrValid = useSelector(state => state.payCountDown.qrValid)
    useEffect(()=>{
        // console.log('init')
        OrderApi.generateOrderResponseById(id)
            .then((res)=>{
                let data = res.data.data.data
                setOrderData(data)
            })
        dispatch(updateQrValid(true))
        if (min < 0) {
            console.log(min,second,countDown)
            //二维码失效
            dispatch(updateQrValid(false))
            return ;
        }
        countDown = setInterval(() => {
            setSecond(second - 1)
            if (second <= 0) {
                setSecond(59)
                setMin(min - 1);
            }
        }, 1000);
        return ()=> clearInterval(countDown)
    },[second,min]);

    const selectPayWay = ({ item, key, keyPath, domEvent })=>{
        if (key === 'ALGOpay') {
            navigate('alpayway',
                {
                    replace:false,
                    state: {
                        orderid: id,
                        price: orderData.price
                    }
                });
        }else if (key === 'WechatWay') {
            navigate('wepayway',
                {
                    replace:false,
                    state: {
                        orderid: id,
                        price: orderData.price
                    }
                });
        }else if (key === 'ZhiFuBao') {
            navigate('zhpayway',
                {
                    replace:false,
                    state: {
                        orderid: id,
                        price: orderData.price
                    }
                });
        }

    }

    const items = [
        { label: 'ALGO 银行支付', key: 'ALGOpay' ,icon:<BankOutlined />}, // 菜单项务必填写 key
        { label: '微信支付', key: 'WechatWay',icon:<WechatOutlined /> },
        {
            label: '支付宝支付',
            key: 'ZhiFuBao',icon:<AlipayCircleFilled />
        },
    ];
    return(
        <div className="pay-tot-box">
            <div className="pay-step-box">
                <Steps>
                    <Step status="finish" title="选择影片场次" icon={<EditOutlined />} />
                    <Step status="finish" title="选择座位" icon={<InsertRowAboveOutlined />} />
                    <Step status="process" title="支付" icon={<LoadingOutlined />} />
                    <Step status="wait" title="影院取票观影" icon={<VideoCameraTwoTone />} />
                </Steps>
            </div>
            <div className="pay-count-down-box">
                <div style={{
                    height:'200px',width:'200px',fontSize:'5rem',display:'flex',
                    justifyContent:'center'
                }}>
                    <div className="pay-count-down-icon">
                        <FieldTimeOutlined />
                    </div>

                </div>
                <div className="pay-count-down-latch">
                    {qrValid?<div className="pay-count-down-message-real">请在&emsp;
                        <span style={{
                            fontSize: '3rem',
                            color: 'red',
                            fontWeight: '1000'
                        }}>
                            {min}
                            </span>分钟&emsp;
                        <span style={{
                            fontSize: '3rem',
                            color: 'red',
                            fontWeight: '1000'
                        }}>
                            {second}
                            </span>秒&emsp;完成支付
                    </div>:
                        <div className="pay-time-out-text">
                            支付超时，请刷新
                        </div>
                    }
                    <div style={{
                        margin:'20px 0',color:'#1fc46a',
                    }}>超时订单会自动取消，如洪支付问题，诗致ALGO客服：1010-5335</div>
                </div>
            </div>

            <div className="pay-sequence-box">
                <div className="pay-acttion"
                >
                    <InfoCircleOutlined style={{
                        color:'orange'
                    }} />
                    请仔细核对场次信息，出票后将无法
                    <span style={{
                        color:'orange'
                    }}>
                        退票和改签
                    </span>
                </div>
                <div className="pay-info-col">
                    <div className="pay-info-row-title">
                        订单号
                    </div>
                    <div className="pay-info-row">
                        {orderData.orderId}
                    </div>
                </div>
                <div className="pay-info-col">
                    <div className="pay-info-row-title">
                        影片
                    </div>
                    <div className="pay-info-row">
                        {orderData.movieName}
                    </div>
                </div>
                <div className="pay-info-col">
                    <div  className="pay-info-row-title">
                        开始放映时间
                    </div>
                    <div style={{
                        color:'red'
                    }} className="pay-info-row">
                        {orderData.startTime}
                    </div>
                </div>
                <div className="pay-info-col">
                    <div className="pay-info-row-title">
                        影院
                    </div>
                    <div className="pay-info-row">
                        {orderData.cinemaName}
                    </div>
                </div>
                <div className="pay-info-col">
                    <div className="pay-info-row-title">
                        座位
                    </div>
                    <div className="pay-info-row">
                        <div className="pay-info-row">
                            {orderData.roomName}
                        </div>
                        <div className="pay-info-row">
                            <Button type="primary">{orderData.seatInfo}</Button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="pay-operation-box">
                <Menu mode="horizontal" items={items}
                      onClick={selectPayWay}
                      defaultSelectedKeys={['ALGOpay']}>
                    {/*<Menu.Item key="ALGOpay"  icon={<BankOutlined />}>*/}
                    {/*    ALGO 银行支付*/}
                    {/*</Menu.Item>*/}
                    {/*<Menu.Item key="WechatWay" icon={<WechatOutlined />}>*/}
                    {/*    微信支付*/}
                    {/*</Menu.Item>*/}
                    {/*<Menu.Item key="ZhiFuBao"  icon={<AlipayCircleFilled />}>*/}
                    {/*    支付宝支付*/}
                    {/*</Menu.Item>*/}
                </Menu>

                <Outlet/>
            </div>
        </div>
    );
};