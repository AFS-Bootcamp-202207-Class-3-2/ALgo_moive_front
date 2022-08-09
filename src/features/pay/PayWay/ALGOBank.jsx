import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import Bank from '../../../static/images/bank.svg'
import './index.css'
import request from '../../../api/api';
import './index.css'
import FailQr from '../../../static/images/fail_qr.png'
import OrderApi from '../../../api/OrderApi'
import {useSelector} from "react-redux";
import {MoneyCollectOutlined} from '@ant-design/icons';
export default function ALGOBank (props) {
    const {id} = useParams()
    let qrImagUrl= request.getUri() + '/order/qr-code/'+id
    const [second, setSecond] = useState(0);
    const [min, setMin] = useState(1);
    // const [qrValid,setqrValid] = useState(true)
    const qrValid = useSelector(state => state.payCountDown.qrValid)
    const navigate = useNavigate()
    let countDown;
    const location = useLocation();
    useEffect(()=>{
        OrderApi.cycleQueryOrderState(id)
            .then((res=>{
                let order = res.data.data.order;
                if (order.status === "1") {
                    navigate('/algo/'+id)
                }
            }))
        if (min < 0) {
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
    },[id,second]);
    return(
        <div className="pay-box">
            <div>
                <img style={{
                    height:'80px',width:'80px'
                }} src={Bank} alt="algopay"/>
                <span className="pay-box-title">
                    ALGO&nbsp;Bank
                </span>
            </div>
            <div>
                <img height="200px" width="200px" src={qrValid?qrImagUrl:FailQr}/>
                <span className="pay-real-box">
                    实际支付：
                    <span className="pay-real">
                        <span className="pay-real-icon"><MoneyCollectOutlined /></span>{location.state.price}
                    </span>
                </span>
            </div>
        </div>

    );
};