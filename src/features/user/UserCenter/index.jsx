import {SwitcherOutlined, UserOutlined} from '@ant-design/icons';
import {Menu} from 'antd';
import React, {useEffect} from 'react';
import './index.css'
import {Outlet, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Back, gsap} from 'gsap'

export default function UserOrder(props) {
    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

    const items = [
        getItem('个人中心', 'detail', <UserOutlined/>),
        getItem('订单列表', 'orders', <SwitcherOutlined/>)
    ];
    const navigate = useNavigate()
    const onClick = ({item, key, keyPath, domEvent}) => {
        if (key === 'orders') {
            navigate('orders')
        }
        if (key === 'detail') {
            navigate('detail')
        }
    };
    const userInfo = useSelector(state => state.navigation.userInfo);
    console.log(userInfo);
    const separator = (nickName) => {
        let nickNamelist;
        if (nickName) {
            nickNamelist = nickName.split('');
        } else {
            nickNamelist = []
        }
        return nickNamelist.map((items, idx) => {
            return (
                <span key={idx}>{items}</span>
            )
        })
    };
    useEffect(() => {
        const tl1 = gsap.timeline()
        tl1.staggerFromTo(
            '.user-center-nickname span', .8, {
                ease: Back.easeOut.config(1.7),
                opacity: 0,
                rotation: -180,
                y: -100

            }, {
                ease: Back.easeOut.config(1.7),
                opacity: 1,
                rotation: 360,
                y: () => {
                    return Math.random() * 50
                }
            }, .1, '+=0', () => {

            }
        )
    }, [userInfo]);
    return (
        <div className="user-total-box">
            <div className="user-center-nickname">
                <span>你</span>
                <span>好</span>
                <span>，</span>
                {separator(userInfo.nickname)}
            </div>
            <div className="user-total-box-inner-box">
                <Menu
                    onClick={onClick}
                    style={{
                        width: 256, height: '900px',
                        borderRadius: '12px'
                    }}
                    defaultSelectedKeys={['detail']}
                    mode="inline"
                    items={items}
                />
                <Outlet/>
            </div>
        </div>
    );
};