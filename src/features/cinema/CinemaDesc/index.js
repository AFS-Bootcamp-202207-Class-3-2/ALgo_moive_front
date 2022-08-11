import {Row, Col, Divider, Breadcrumb} from "antd";
import {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
import $ from 'jquery'

import {getCinemaByCinemaId, getMoviesByCinemaId} from "../../../api/cinema";
import "./index.css";
import "./flickity.css"
import "flickity/dist/flickity.min.css"
import Flickity from 'react-flickity-component'
import ScreeningList from "../../../pages/Screenings";

const CinemaDesc = () => {
    const {cinemaId} = useParams();
    const [cinema, setCinema] = useState({});
    const [movies, setMovies] = useState([])
    const [movieIndex, setMovieIndex] = useState(0)
    const [movieId, setMovieId] = useState("")

    // async function getData() {
    //     getCinemaByCinemaId(cinemaId).then(response => {
    //         setCinema(response.data.data.cinema);
    //     });
    //     await getMoviesByCinemaId(cinemaId).then(response => {
    //         setMovies(response.data.data.movies)
    //         setMovieIndex(movies.length >= 3 ? 3 : 0)
    //         setMovieId(movies[movieIndex].id)
    //     }).catch(function (msg) {
    //         console.log(msg)
    //     })
    // }
    useEffect(() => {
        async function getData() {
            getCinemaByCinemaId(cinemaId).then(response => {
                setCinema(response.data.data.cinema);
            });
            await getMoviesByCinemaId(cinemaId).then(response => {
                setMovies(response.data.data.movies)
                setMovieId(movies[movieIndex].id)
            }).catch(function (msg) {
                console.log(msg)
            })
        }
        getData();
    }, [cinemaId,movieIndex,movies]);
    const flickityOptions = {
        initialIndex: movieIndex
    }
    $(".flickity-prev-next-button.previous").click(function () {
        setMovieIndex(movieIndex - 1)
        setMovieId(movies[movieIndex].id)
        console.log(movieIndex)
    });
    $(".flickity-prev-next-button.next").click(function () {
        setMovieIndex(movieIndex + 1)
        setMovieId(movies[movieIndex].id)
        console.log(movieIndex)
    });
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

            <Flickity
                className="carousel"
                options={flickityOptions}>
                {
                    movies.map((item, index) => {
                        return (
                            <div key={index} className="carousel-cell"><img alt={"carousel_img"} className="carousel_img" src={item.cover}/>
                            </div>
                        )
                    })
                }
            </Flickity>
            {movies.length !== 0 ?
                <div className="movie-info">
                    <p className="movie-name">{movies[movieIndex].movieName}</p>
                    <p className="score">{movies[movieIndex].score}分</p>
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
            <ScreeningList cinemaId={cinemaId} movieId={movieId !== "" ? movieId : "ALGOMOVIE1"}/>
        </>
    );
}

export default CinemaDesc;
