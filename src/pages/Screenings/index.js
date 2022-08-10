import React, {useEffect, useState} from 'react'
import { Table, Tabs} from 'antd';
import '../SearchPage/index.css'
import ScreeningApi from "../../api/ScreeningApi";
import './index.css';
import { useNavigate} from "react-router-dom";
import * as PropTypes from "prop-types";

export default function ScreeningList() {
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
            dataIndex: 'address',
            align: 'center',
            key: 'address',
            render: () => <a className="ticket-button" onClick={toChooseSeat}>选座购票</a>
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
    const toChooseSeat = () => {
        navigator("/chooseSeat");
    }
    const [bottom, setBottom] = useState('bottomCenter');
    const [screeningList, setScreeningList] = useState([]);
    useEffect(()=>{
        ScreeningApi.getCinemas('ALGOCINEMA1','ALGOMOVIE1').then(res=>{
            setScreeningList(res.data.data.sessionList)
        })
    },[])

    const dataSource = screeningList.map((item)=>{
        return {
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
