import React, {useEffect, useState} from 'react'
import { Table, Tabs} from 'antd';
import '../SearchPage/index.css'
import ScreeningApi from "../../api/ScreeningApi";
import './index.css';
import {useLocation, useNavigate, useSearchParams,Navigate} from "react-router-dom";
import * as PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {setSkipPageProperties} from "../../features/login/loginSlice";


export default function ScreeningList(props) {
    const [params, setParams] = useSearchParams()
    let cinemaId = params.get('cinemaId')
    let movieId = params.get('movieId')
    if (props.cinemaId !== null &&props.movieId !==null) {
        cinemaId = props.cinemaId
        movieId = props.movieId
    }
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
            // dataIndex: 'address',
            align: 'center',
            // key: 'address',
            render: (item) => {
                return <div>
                    <a className="ticket-button" onClick={() => toChooseSeat(item)}>选座购票</a>
                </div>
            }
        },
    ];

    function TabPane(props) {
        return null;
    }

    TabPane.propTypes = {
        tab: PropTypes.string,
        children: PropTypes.node
    };

    const navigator = useNavigate();
    const toChooseSeat = (item) => {
        const isLogin = window.localStorage.getItem('token');
        if (isLogin == null && isLogin == undefined){
            dispatch(setSkipPageProperties(item.id));
            navigator('/login')
        }else {
            navigator("/chooseSeat?sessionId=" + item.id);
        }

    }
    const [bottom, setBottom] = useState('bottomCenter');
    const [screeningList, setScreeningList] = useState([]);
    useEffect(()=>{
        ScreeningApi.getCinemas(cinemaId,movieId).then(res=>{
            setScreeningList(res.data.data.sessionList)
        })
    },[movieId, cinemaId])

    const dataSource = screeningList.map((item)=>{
        return {
            id:item.id,
            startTime: (<span className="ticket-time">
                {item.startTime.slice(11,16)}
            </span>),
            endTime: (<span className="ticket-time">
                {item.endTime.slice(11,16)}
            </span>),
            roomName: item.roomName,
            languageVersion: item.languageVersion,
            price : (<span className="ticket-price">¥{item.price}</span>)
        }
    })

  return (
      <>
          <div style={{width: "80%",margin :"0 auto"}}>

              <div style={{marginLeft:"10px"}}>
                  <Tabs defaultActiveKey="1" >
                      <TabPane tab="观影时间:" key="6">
                      </TabPane>
                      <TabPane tab="今天" key="1">
                          Content of Tab Pane 1
                      </TabPane>
                      <TabPane tab="明天" key="2">
                          Content of Tab Pane 2
                      </TabPane>
                      <TabPane tab="后天" key="3">
                          Content of Tab Pane 3
                      </TabPane>
                  </Tabs>
              </div>
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
