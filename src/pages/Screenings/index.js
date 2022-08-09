import React, {useEffect, useState} from 'react'
import {Divider, List, Typography, Pagination, Avatar, Button, Skeleton, Table, Tabs} from 'antd';
import '../SearchPage/index.css'
import ScreeningApi from "../../api/ScreeningApi";
import './index.css'
import * as PropTypes from "prop-types";

const columns = [
    {
        title: (<div className="title">放映时间</div>),
        dataIndex: 'startTime',
        align: 'center',
        key: 'startTime',
        width:200
    },
    {
        title: (<div className="title">语言版本</div>),
        dataIndex: 'age',
        align: 'center',
        key: 'age',
        width: 200,
    },
    {
        title: (<div className="title">放映厅</div>),
        dataIndex: 'roomName',
        align: 'center',
        key: 'roomName',
        width: 200,
    },
    {
        title: (<div className="title">售价(元)</div>),
        dataIndex: 'price',
        align: 'center',
        key: 'price',
        width: 200,
    },
    {
        title: (<div className="title">选座购票</div>),
        dataIndex: 'address',
        align: 'center',
        key: 'address',
        render: () => <a className="ticket-button">选座购票</a>
    },
];

function TabPane(props) {
    console.log('props',props)
    return null;
}

TabPane.propTypes = {
    tab: PropTypes.string,
    children: PropTypes.node
};
export default function ScreeningList() {
    const [bottom, setBottom] = useState('bottomCenter');
    const [screeningList, setScreeningList] = useState([]);
    useEffect(()=>{
        ScreeningApi.getCinemas('ALGOCINEMA1','ALGOMOVIE1').then(res=>{
            setScreeningList(res.data.data.sessionList)
        })
    },[])

    console.log("csss",screeningList)

    const dataSource = screeningList.map((item)=>{
        return {
            startTime: (<span className="ticket-time">
                {item.startTime.split(" ")[1]}
            </span>),
            endTime: item.endTime,
            roomName: item.startTime,
            price : (<span className="ticket-price">¥{item.price}</span>)
        }
    })
    // const data = screeningList
    // console.log("csssdata",data)


    // const data = cinemaList
    // const changePage = (page, pageSize) => {
    //     console.log(page,pageSize)
    //     searchApi.searchCinemasOrMovies({
    //         page:page,
    //         pageSize:pageSize})
    //         .then(res=>{
    //             console.log(res)
    //
    //         })
    //     // setCurrPage(page);
    // };
  return (
      <>
          <div style={{width:"1200px",margin :"0 auto"}}>

              <div style={{marginLeft:"10px"}}>
                  <Tabs defaultActiveKey="1" >
                      <TabPane tab="观影时间:" key="6">
                      </TabPane>
                      <TabPane tab="Tab 1" key="1">
                          Content of Tab Pane 1
                      </TabPane>
                      <TabPane tab="Tab 2" key="2">
                          Content of Tab Pane 2
                      </TabPane>
                      <TabPane tab="Tab 3" key="3">
                          Content of Tab Pane 3
                      </TabPane>
                  </Tabs>
              </div>
              <Table
                  dataSource={dataSource}
                  columns={columns}
                  size="small"
                  scroll={{
                      x: 1500,
                      y: 300,
                  }}
                  pagination={{
                      position: [bottom],
                  }}
              />;
          </div>
      </>
  )
}
