import React, {useEffect, useState} from 'react'
import { Pagination  } from 'antd';
import '../SearchPage/index.css'
import MovieCard from "../../features/MovieCard";
import searchApi from "../../api/searchApi";
export default function Movie() {
    const [totalData, setTotalData] = useState({});
    const [currPage, setCurrPage] = useState(1);
    const [movies, setMovies] = useState([]);
    useEffect(()=>{

        searchApi.searchCinemasOrMovies({
            pageSize:6})
            .then(res=>{
                setTotalData(res.data.data.movies);
                setMovies(res.data.data.movies.content)
            })
    },[])

    const changePage = (page, pageSize) => {
        console.log(page,pageSize)
        searchApi.searchCinemasOrMovies({
            page:page,
            pageSize:pageSize})
            .then(res=>{
                console.log(res)
                setTotalData(res.data.data.movies);
                setMovies(res.data.data.movies.content)
            })
        setCurrPage(page);
    };
  return (
      <>
          <div className="movie-list-card-col">
              {
                  movies.map((item, idx) => (
                      <MovieCard movie={item} key={idx}/>
                  ))
              }
          </div>
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
      </>
  )
}
