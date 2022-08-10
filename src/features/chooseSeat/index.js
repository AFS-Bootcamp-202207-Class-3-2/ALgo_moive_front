import React, {useEffect} from 'react';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import {useState} from 'react'
import { useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {getSeatAndMovieInfo, getOrderInfoByObject} from '../../api/cinema'
import { message } from 'antd';
import empty from '../../static/images/empty.png';
import occupy from '../../static/images/occupy.png';
import select from '../../static/images/select.png';
import screenImage from '../../static/images/screen.png';
import poster from '../../static/images/1.jpg';
import '../../mock';
import './index.css';
import {setFilmInfo, setSeatsInfo, updateSeatInfo} from "./ChooseSeatSlice";
import {useSearchParams} from "react-router-dom";

export default function ChooseSeat() {
    const navigator = useNavigate();
    const [params, setParams] = useSearchParams()
    const sessionId = params.get('sessionId')
    let CONSTANT_SEAT_ROW = 7;
    const dispatch = useDispatch();
    const [selectSeat, setSelectSeat] = useState([])
    useEffect(() => {
        getSeatAndMovieInfo(sessionId).then(response => {
            dispatch(setFilmInfo(response.data.data.sessionInfo))
            dispatch(setSeatsInfo(response.data.data.sessionInfo))
            // code();
        }).catch(function (msg) {
            console.log(msg)
        })
    }, [dispatch]);
    const roomInfo = useSelector((state) => state.chooseSeat.seatsInfo)
    const filmInfo = useSelector((state) => state.chooseSeat.filmInfo);
    const renderSeat = () => {
        if (roomInfo.length <= 0) {
            return;
        }
        let columns = [];
        for (let i = 0, len = roomInfo.length; i < len; i++) {
            columns.push(<div key={uuidv4()} className="row">
                {roomInfo[i].map((val, index) => {
                    return <span key={uuidv4()} onClick={e => click(i, index)} className={classnames('seat', {
                        'empty': val.state === 1,
                        'occupy': val.state === 2,
                        'select': val.state === 3
                    })}/>
                })}
            </div>);
        }
        return columns;
    };
    const renderNumber = () => {
        let spans = [];
        let row = 0;
        for (let i = 0; i < CONSTANT_SEAT_ROW; i++) {
            spans.push(<span key={uuidv4()}>{++row}</span>);
        }
        return spans;
    }

    const click = (row, column) => {
        if (roomInfo[row][column].state === 0 || roomInfo[row][column].state === 2) {
            return;
        }
        let tmpRoom = _.cloneDeep(roomInfo);
        let tmpSelectSeat = _.cloneDeep(selectSeat);
        if (tmpRoom[row][column].state === 1 && selectSeat.length < 5) {
            tmpRoom[row][column].state = 3;
            tmpSelectSeat.push(tmpRoom[row][column])
        } else if (tmpRoom[row][column].state === 3) {
            tmpRoom[row][column].state = 1;
            setSelectSeat(tmpSelectSeat)
            tmpSelectSeat = tmpSelectSeat.filter((item) => tmpRoom[row][column].index !== item.index)
        }
        setSelectSeat(tmpSelectSeat)
        dispatch(updateSeatInfo(tmpRoom))
    }

    const getOrderInfo = () => {
        if (selectSeat.length === 0){
            info()
        }else {
            let param = {}
            param.sessionId = sessionId
            param.price = filmInfo.price * selectSeat.length
            param.seats = selectSeat
            getOrderInfoByObject(param).then(response => {
                console.log(response)
                navigator(`/pay/${response.data.data.order.id}/alpayway`,{
                    replace:false,
                    state:{
                        price:param.price
                    }
                });
            }).catch(function (msg) {
                console.log(msg)
            })
        }
    }

    const info = () => {
        message.info('对不起，请先选位置');
    };

    return (
        <div className="App">
            <div className="container">
                <div className="seat-container">
                    <div className="seat-header">
                        <ul>
                            <li>
                                <img src={empty} alt="可选座位"/><span>可选座位</span>
                            </li>
                            <li>
                                <img src={occupy} alt="已售座位"/><span>已售座位</span>
                            </li>
                            <li>
                                <img src={select} alt="已选座位"/><span>已选座位</span>
                            </li>
                        </ul>
                    </div>
                    <div className="seat-main">
                        <div className="screen">
                            <img src={screenImage} alt="屏幕"/>
                            <h4>屏幕中央</h4>
                        </div>
                        <div className="seats">
                            <span className="line"/>
                            {renderSeat()}
                            <div className="seat-number">
                                {renderNumber()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="msg-container">
                    <div className="info-header">
                        <img src={poster} alt="电影海报"/>
                        <div className="header-msg">
                            <h3>{filmInfo.name}</h3>
                            <p><span>类型：</span>{filmInfo.type}</p>
                            <p><span>时长：</span>{filmInfo.duration}</p>
                        </div>
                    </div>
                    <div className="info-main">
                        <p><span>影院：</span>{filmInfo.cinema}</p>
                        <p><span>影厅：</span>{filmInfo.filmRoom}</p>
                        <p><span>场次：</span>{filmInfo.arrange}</p>
                        <p><span>类型：</span>{filmInfo.type}</p>
                        <p><span>票价：</span>{"￥" + Number(filmInfo.price).toFixed(2) + "/张"}</p>
                    </div>
                    <div>
                        <div className="select-item">
                            <span className="select-label">座位：</span>
                            <div className="select-seat">
                                {
                                    selectSeat.length > 0 ? (selectSeat.map(val => {
                                        return <span key={uuidv4()}
                                                     className="ticket">{(Math.trunc(val.index / CONSTANT_SEAT_ROW) + 1) + "排" + (val.index % CONSTANT_SEAT_ROW + 1) + "列"}</span>
                                    })) : <span>一次最多选择五张电影票</span>
                                }
                            </div>
                        </div>
                        <div className="select-item">
                            <span className="select-label">总价：</span>
                            <span>{(selectSeat.length * filmInfo.price).toFixed(2)}元</span>
                        </div>
                        <button className="btn" onClick={getOrderInfo}>确认选座</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
