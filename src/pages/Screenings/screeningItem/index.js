import React, {useEffect, useState} from 'react'
import {Table} from 'antd';
import '../../SearchPage/index.css'
import ScreeningApi from "../../../api/ScreeningApi";
import '../index.css';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setSkipPageProperties} from "../../../features/login/loginSlice";


export default function ScreeningItem(props) {

    const sessionRequest = {...props}
    useEffect(() => {
        ScreeningApi.getCinemasBySessionRequest(sessionRequest).then(res => {
            setScreeningList(res.data.data.sessionList)
        })
    }, [])

    const dispatch = useDispatch()
    const columns = [
        {
            title: (<div className="title">放映时间</div>),
            dataIndex: 'startTime',
            align: 'center',
            key: 'startTime'
        },
        {
            title: (<div className="title">结束时间</div>),
            dataIndex: 'endTime',
            align: 'center',
            key: 'endTime'
        },
        {
            title: (<div className="title">语言版本</div>),
            dataIndex: 'languageVersion',
            align: 'center',
            key: 'languageVersion'
        },
        {
            title: (<div className="title">放映厅</div>),
            dataIndex: 'roomName',
            align: 'center',
            key: 'roomName'
        },
        {
            title: (<div className="title">售价(元)</div>),
            dataIndex: 'price',
            align: 'center',
            key: 'price'
        },
        {
            title: (<div className="title">选座购票</div>),
            align: 'center',
            render: (item) => {
                return <div>
                    <a className="ticket-button" onClick={() => toChooseSeat(item)}>选座购票</a>
                </div>
            }
        },
    ];

    const navigator = useNavigate();
    const toChooseSeat = (item) => {
        const isLogin = window.localStorage.getItem('token');
        if (isLogin === null && isLogin === undefined) {
            dispatch(setSkipPageProperties(item.id))
            navigator('/login', {
                replace: true
            })
        } else {
            navigator("/chooseSeat?sessionId=" + item.id);
        }

    }
    const [bottom] = useState('bottomCenter');
    const [screeningList, setScreeningList] = useState([]);

    const dataSource = screeningList.map((item) => {
        return {
            id: item.id,
            startTime: (<span className="ticket-time">
                {item.startTime.slice(11, 16)}
            </span>),
            endTime: (<span className="ticket-time">
                {item.endTime.slice(11, 16)}
            </span>),
            roomName: item.roomName,
            languageVersion: item.languageVersion,
            price: (<span className="ticket-price">¥{item.price}</span>)
        }
    })

    return (
        <>
            <div style={{width: "80%", margin: "0 auto"}}>
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    size="small"
                    pagination={{
                        position: [bottom],
                    }}
                />;
            </div>
        </>
    )
}
