import React, {useEffect, useState} from 'react';
import classnames from 'classnames';
import {v4 as uuidv4} from 'uuid';
import _ from 'lodash';
import {useNavigate, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOrderInfoByObject, getSeatAndMovieInfo} from '../../api/cinema'
import {message, Steps} from 'antd';
import empty from '../../static/images/empty.png';
import occupy from '../../static/images/occupy.png';
import select from '../../static/images/select.png';
import screenImage from '../../static/images/screen.png';
import '../../mock';
import './index.css';
import {setFilmInfo, setSeatsInfo, updateSeatInfo} from "./ChooseSeatSlice";
import {EditOutlined, InsertRowAboveOutlined, LoadingOutlined, VideoCameraTwoTone} from "@ant-design/icons";

export default function ChooseSeat() {
    const {Step} = Steps;
    const navigator = useNavigate();
    const [params] = useSearchParams()
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
    }, [dispatch, sessionId]);
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
        if (selectSeat.length === 0) {
            info()
        } else {
            let param = {}
            param.sessionId = sessionId
            param.price = filmInfo.price * selectSeat.length
            param.seats = selectSeat
            getOrderInfoByObject(param).then(response => {
                console.log(response)
                navigator(`/pay/${response.data.data.order.id}/alpayway`, {
                    replace: false,
                    state: {
                        price: param.price
                    }
                });
            }).catch(function (msg) {
                console.log(msg)
            })
        }
    }

    const info = () => {
        message.warning('???????????????');
    };

    return (
        <>
            <div className="pay-step-box">
                <Steps>
                    <Step status="finish" title="??????????????????" icon={<EditOutlined/>}/>
                    <Step status="finish" title="????????????" icon={<LoadingOutlined/>}/>
                    <Step status="process" title="??????" icon={<InsertRowAboveOutlined/>}/>
                    <Step status="wait" title="??????????????????" icon={<VideoCameraTwoTone/>}/>
                </Steps>
            </div>
            <div className="App">
                <div className="container">
                    <div className="seat-container">
                        <div className="seat-header">
                            <ul>
                                <li>
                                    <img src={empty} alt="????????????"/><span>????????????</span>
                                </li>
                                <li>
                                    <img src={occupy} alt="????????????"/><span>????????????</span>
                                </li>
                                <li>
                                    <img src={select} alt="????????????"/><span>????????????</span>
                                </li>
                            </ul>
                        </div>
                        <div className="seat-main">
                            <div className="screen">
                                <img src={screenImage} alt="??????"/>
                                <h4>????????????</h4>
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
                            <img style={{width: 150, height:230}} src={filmInfo.poster} alt="????????????"/>
                            <div className="header-msg">
                                <h3>{filmInfo.name}</h3>
                                <p><span>?????????</span>{filmInfo.type}</p>
                                <p><span>?????????</span>{filmInfo.duration}</p>
                            </div>
                        </div>
                        <div className="info-main">
                            <p><span>?????????</span>{filmInfo.cinema}</p>
                            <p><span>?????????</span>{filmInfo.filmRoom}</p>
                            <p><span>?????????</span>{filmInfo.arrange}</p>
                            <p><span>?????????</span>{filmInfo.type}</p>
                            <p><span>?????????</span>{"???" + Number(filmInfo.price).toFixed(2) + "/???"}</p>
                        </div>
                        <div>
                            <div className="select-item">
                                <span className="select-label">?????????</span>
                                <div className="select-seat">
                                    {
                                        selectSeat.length > 0 ? (selectSeat.map(val => {
                                            return <span key={uuidv4()}
                                                         className="ticket">{(Math.trunc(val.index / CONSTANT_SEAT_ROW) + 1) + "???" + (val.index % CONSTANT_SEAT_ROW + 1) + "???"}</span>
                                        })) : <span>?????????????????????????????????</span>
                                    }
                                </div>
                            </div>
                            <div className="select-item">
                                <span className="select-label">?????????</span>
                                <span>{(selectSeat.length * filmInfo.price).toFixed(2)}???</span>
                            </div>
                            <button className="btn" onClick={getOrderInfo}>????????????</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
