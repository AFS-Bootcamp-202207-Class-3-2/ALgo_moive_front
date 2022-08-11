import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";
import searchApi from "../../api/searchApi";
import MovieCard from "../../features/MovieCard";
import { Pagination } from "antd";
import { Empty } from "antd";

export default function SearchPage(props) {
  const location = useLocation();
  const { state } = location;
  const [totalData, setTotalData] = useState({});
  const [currPage, setCurrPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState(state.value);

  useEffect(() => {
    searchApi
      .searchCinemasOrMovies({
        keyword: state.keyword,
        pageSize: 6,
      })
      .then((res) => {
        setTotalData(res.data.data.movies);
        setMovies(res.data.data.movies.content);
      });
  }, [currPage,state]);

  const getInput = (event) => {
    setInput(event.target.value);
  };

  const onSearch = () => {
    searchApi
      .searchCinemasOrMovies({
        keyword: input,
        pageSize: 6,
      })
      .then((res) => {
        setTotalData(res.data.data.movies);
        setMovies(res.data.data.movies.content);
      });
  };

  const changePage = (page, pageSize) => {
    searchApi
      .searchCinemasOrMovies({
        keyword: state.keyword,
        page: page,
        pageSize: pageSize,
      })
      .then((res) => {
        setTotalData(res.data.data.movies);
        setMovies(res.data.data.movies.content);
      });
    setCurrPage(page);
  };

  return (
    <>
      <div className="header_style">
        <div className="input_button">
          <input
            onChange={getInput}
            className="input_style"
            placeholder="搜电影，演职员"
            value={input}
          />
          <button className="button_style" type="submit" onClick={onSearch} />
        </div>
      </div>
      {movies.length === 0 ? (
        <Empty className="empty_style" />
      ) : (
        <div className="movie-list-card-col">
          {movies.map((item, idx) => (
            <MovieCard movie={item} key={idx} />
          ))}
        </div>
      )}
      <div>
        {movies.length !== 0 && (
          <div className="movie-list-pagination">
            <Pagination
              total={totalData.totalElements}
              showTotal={(total) => `Total ${total} 条数据`}
              defaultPageSize={6}
              current={currPage}
              defaultCurrent={1}
              onChange={changePage}
            />
          </div>
        )}
      </div>
    </>
  );
}
