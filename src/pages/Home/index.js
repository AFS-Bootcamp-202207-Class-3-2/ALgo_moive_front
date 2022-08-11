import Carousel from "../../features/home/Carousel";
import MovieGroup from "../../features/home/MovieGroup";
import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../api/home";
import { addAllMovies } from "../../features/home/HomeSlice";
import "./index.css"
import BoxOffice from "../../features/home/BoxOffice";
import RecentMovies from "../../features/home/RecentMovies";

function Home() {
  const movies = useSelector((state) => state.home.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    getMovies().then((response) => {
      dispatch(addAllMovies(response.data.data.movies.content));
    });
  }, [dispatch]);
  return (
    <div>
      <Carousel />
      <Row className="home-content-row">
        <Col span={16}>
          <MovieGroup movies={movies} />
          <RecentMovies />
        </Col>
        <Col span={1}></Col>
        <Col span={7}>
          <BoxOffice/>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
