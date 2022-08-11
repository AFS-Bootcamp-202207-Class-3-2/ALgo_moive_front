import React from 'react'
import {Tabs} from 'antd';
import '../SearchPage/index.css'
import './index.css';
import {useSearchParams} from "react-router-dom";
import ScreeningItem from "./screeningItem";
const { TabPane } = Tabs;

export default function ScreeningList(props) {

    const [params] = useSearchParams()
    let cinemaId = params.get('cinemaId')
    let movieId = params.get('movieId')
    if (props.cinemaId && props.movieId) {
        cinemaId = props.cinemaId
        movieId = props.movieId
    }
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

    const todayDate = (date.getMonth()+1) + "-" + (date.getDate());
    const tomorrowDate =  (date.getMonth()+1) + "-" + (date.getDate()+1);
    const afterTomorrowDate =  (date.getMonth()+1) + "-" + (date.getDate()+2);


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
