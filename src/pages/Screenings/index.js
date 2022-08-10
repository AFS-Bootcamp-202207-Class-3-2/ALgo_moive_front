import React, {useEffect, useState} from 'react'
import { Table, Tabs} from 'antd';
import '../SearchPage/index.css'
import ScreeningApi from "../../api/ScreeningApi";
import './index.css';
import {useLocation, useNavigate, useSearchParams,Navigate} from "react-router-dom";
import ScreeningItem from "./screeningItem";
const { TabPane } = Tabs;


export default function ScreeningList(props) {
export default function ScreeningList() {

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
    const cinemaId = params.get('cinemaId')
    const movieId = params.get('movieId')
    let date = new Date();
    let month = date.getMonth() + 1
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (date >= 0 && date <= 9) {
        date = "0" + date;
    }
    const day = date.getDate()
    const todayTabPaneTitle = '今天' + month + '月' + day + '天'
    const tomorrowTabPaneTitle = '明天' + month + '月' + (day +1 ) + '天'
    const dayAfterTomorrowTabPaneTitle = '后天' + month + '月' + (day+2) + '天'

    }
    const [bottom, setBottom] = useState('bottomCenter');
    const [screeningList, setScreeningList] = useState([]);
    useEffect(()=>{
        ScreeningApi.getCinemas(cinemaId,movieId).then(res=>{
            setScreeningList(res.data.data.sessionList)
        })
    },[movieId, cinemaId])
    const todayDate = (date.getMonth()+1) + "-" + date.getDate();
    const tomorrowDate =  (date.getMonth()+1) + "-" + date.getDate()+1;
    const afterTomorrowDate =  (date.getMonth()+1) + "-" + date.getDate()+2;


  return (
      <>
          <div style={{width: "80%",margin :"0 auto"}}>
              <div style={{marginLeft:"10px"}}>
                  <Tabs defaultActiveKey="1"  >
                      <TabPane tab="观影时间:" key="6">
                      </TabPane>
                      <TabPane tab={todayTabPaneTitle} key="1">
                          <ScreeningItem cinemaId={cinemaId} movieId={movieId} filterDate={todayDate}  />
                      </TabPane>
                      <TabPane tab={tomorrowTabPaneTitle} key="2">
                          <ScreeningItem cinemaId={cinemaId} movieId={movieId} filterDate={tomorrowDate} />
                      </TabPane>
                      <TabPane tab={dayAfterTomorrowTabPaneTitle} key="3">
                          <ScreeningItem cinemaId={cinemaId} movieId={movieId} filterDate={afterTomorrowDate}  />
                      </TabPane>
                  </Tabs>
              </div>
          </div>
      </>
  )
}
