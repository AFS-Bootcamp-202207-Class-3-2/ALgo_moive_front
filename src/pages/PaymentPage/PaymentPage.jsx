import React, { useEffect, useState } from 'react'
import {useParams, Outlet, useNavigate, NavLink} from 'react-router-dom'
import {FieldTimeOutlined,
    LoadingOutlined, EditOutlined,
    InsertRowAboveOutlined,MailOutlined, AppstoreOutlined, SettingOutlined,
    VideoCameraTwoTone } from '@ant-design/icons';
import { Steps , Menu} from 'antd';
import './index.css'
export default function PaymentPage (props) {
    const { Step } = Steps;
    const {id} = useParams();
    const navigate = useNavigate()
    const [second, setSecond] = useState(10);
    const [min, setMin] = useState(0);

    let countDown;

    useEffect(()=>{
        // console.log('init')
        if (min < 0) {
            console.log(min,second,countDown)
            //todo:二维码失效
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
            navigate('/pay/'+id+'/payway/'+'ALGOpay');
        }else if (key === 'WechatWay') {
            navigate('/pay/'+id+'/payway/'+'WechatPay');
        }else if (key === 'ZhiFuBao') {
            // navigate('/pay/'+id+'/payway/'+'ZhiFuBao');
            navigate('movie')
        }

    }
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
                    <div>请在&emsp;
                        <span style={{
                            fontSize: '3rem',
                            color:'red',
                            fontWeight: '1000'
                        }}>
                            {min}
                            </span>分钟&emsp;
                        <span style={{
                            fontSize: '3rem',
                            color:'red',
                            fontWeight: '1000'
                        }}>
                            {second}
                            </span>秒&emsp;完成支付
                    </div>
                    <div style={{
                        margin:'20px 0',color:'#1fc46a',
                    }}>超时订单会自动取消，如洪支付问题，诗致ALGO客服：1010-5335</div>
                </div>
            </div>

            <div className="pay-sequence-box">

            </div>
            <div className="pay-operation-box">
                <Menu mode="horizontal"
                      onClick={selectPayWay}
                      defaultSelectedKeys={['ALGOpay']}>
                    <Menu.Item key="ALGOpay" icon={<MailOutlined />}>
                        ALGO 银行支付
                    </Menu.Item>
                    <Menu.Item key="WechatWay" icon={<AppstoreOutlined />}>
                        微信支付
                    </Menu.Item>
                    <Menu.Item key="ZhiFuBao" icon={<AppstoreOutlined />}>
                        支付宝支付
                    </Menu.Item>
                </Menu>

                <NavLink to='payway/ALGOpay'>1</NavLink>
                <NavLink to='payway/WechatWay'>2</NavLink>
                <NavLink to='payway/ZhiFuBao'>3</NavLink>

                <Outlet/>
            </div>
        </div>
    );
};