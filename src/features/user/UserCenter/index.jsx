import { SwitcherOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import './index.css'
import {useNavigate,Outlet} from "react-router-dom";
export default function UserOrder (props) {
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
        getItem('userDetail', 'detail', <UserOutlined />),
        getItem('userOrders', 'orders', <SwitcherOutlined />)
    ];
    const navigate = useNavigate()
    const onClick = ({ item, key, keyPath, domEvent }) => {
        console.log('click ', key);
        if(key === 'orders'){
            navigate('orders')
        }
        if(key === 'detail'){
            navigate('detail')
        }
    };
    return(
        <div className="user-total-box">
            <div className="user-total-box-inner-box">
                <Menu
                    onClick={onClick}
                    style={{
                        width: 256,height:'100%'
                    }}
                    defaultSelectedKeys={['userOrders']}
                    mode="inline"
                    items={items}
                />
                <Outlet/>
            </div>
        </div>
    );
};