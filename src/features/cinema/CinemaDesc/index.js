import {Row, Col, Divider, Breadcrumb,Tag} from "antd";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

import {getCinemaByCinemaId, getMoviesByCinemaId} from "../../../api/cinema";
import "./index.css";
import ScreeningList from "../../../pages/Screenings";


const CinemaDesc = () => {
    const {cinemaId} = useParams();
    const [cinema, setCinema] = useState({});
    const [movies, setMovies] = useState([])
    const [movieIndex, setMovieIndex] = useState(0)
    const [movieId, setMovieId] = useState("")
    let selectImg = "detail-img"

    const getData = async () => {
        getCinemaByCinemaId(cinemaId).then(response => {
            setCinema(response.data.data.cinema);
        });
        await getMoviesByCinemaId(cinemaId).then(response => {
            setMovies(response.data.data.movies)
            setMovieId(response.data.data.movies[movieIndex].id)
        }).catch(function (msg) {
            console.log(msg)
        })
    }

    useEffect(() => {
        getData()
    }, [cinemaId]);
    const changeIndexAndGetRoomData = (id, index) => {
        setMovieIndex(index)
        setMovieId(id)
        selectImg = "detail-img-select"
    }
    return (
        <>
            <div className="cinema-des-banner">
                <div className="cinema-des-row">
                    <Row>
                        <Col span={8} className="image-col">
                            <div className="image-box">
                                <div className="image">
                                    <img
                                        src="https://p0.meituan.net/mmdb/fd146c7848a0ebca36eb869dfef7c9331034607.png@292w_292h_1e_1c"
                                        alt="影院图片"
                                        className="image"
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col span={16} className="cinema-col">
                            <div className="cinema-des-box">
                                <div className="cinema-des-msg">
                                    <div className="cinema-name">{cinema.cinemaName}</div>
                                    <Divider></Divider>
                                    <div>
                                        <span>地址&nbsp;&nbsp;</span>
                                        {cinema.address}
                                    </div>
                                    <br />
                                    <div>
                                        <span>联系方式&nbsp;&nbsp;</span>
                                        {cinema.phone}
                                    </div>
                                    <Divider></Divider>
                                    <div>
                                        <span>特色服务&nbsp;&nbsp;</span>
                                        {cinema.cinemaService && cinema.cinemaService.split(",").map((item,index)=>{
                                            return <Tag color="geekblue">{item}</Tag>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to="/">ALGO MOVIE</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/cinemaList">影院</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{cinema.cinemaName}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="image-container">
                <div className="images-desc">
                    {
                        movies.map((item, index) => {
                            return (
                                <img alt="image" key={index} src={item.cover} className={selectImg}
                                     onClick={(e) => changeIndexAndGetRoomData(item.id, index)}/>
                            )
                        })}
                </div>
            </div>
            {movies.length !== 0 ?
                <div className="movie-info">
                    <p className="movie-name">{movies[movieIndex].movieName}</p>
                    <p className="score">{movies[movieIndex].score === 0 ? "暂无评分" : +movies[movieIndex].score + "分"}</p>
                    <br/>
                    <span className="key">类型：</span>
                    <span className="value">{movies[movieIndex].movieType}</span>
                    <span className="key">主演：</span>
                    <span className="value">{movies[movieIndex].actors}</span>
                    <span className="key">语言：</span>
                    <span className="value">{movies[movieIndex].languageVersion}</span>
                </div>
                : ""
            }

            <hr/>
            {movieId && <ScreeningList movieId={movieId} cinemaId={cinemaId}/>}
        </>
    );
}

export default CinemaDesc;
