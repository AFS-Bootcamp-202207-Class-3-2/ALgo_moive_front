import React, {useEffect, useState} from "react";
import { getCinemaListByMovieId } from "../../api/cinema";
import {useParams} from 'react-router-dom';
import './index.css'
import {Button, Empty} from "antd";
import { useNavigate } from "react-router-dom";

export default function CinemaList() {
    const navigator = useNavigate();
    const {movieId} = useParams();
    const [cinemaList, setCinemaList] = useState([]);
    useEffect(() => {
        getCinemaListByMovieId(movieId).then((response) => {
            if (response.data.code === "200") {
                setCinemaList(response.data.data.cinemas);
            }
        })
    }, []);
    const toChooseSet = () => {
        navigator("/chooseSeat");
    }
    return (
        <div className="cinema_div">
            <h2>影院列表</h2>
            {cinemaList.length === 0 ? <Empty className="empty_style" /> : cinemaList.map((cinema) => (
                <div className="cinemaList_div" key={cinema.id}>
                    <div>
                        <span className="cinema_style">{cinema.cinemaName}</span>
                        <br/>
                        <span className="address_style">地址：{cinema.address}</span>
                    </div>
                    <Button type="danger" shape="round" onClick={toChooseSet}>选座购票</Button>
                </div>
            ))}
        </div>
    );
}