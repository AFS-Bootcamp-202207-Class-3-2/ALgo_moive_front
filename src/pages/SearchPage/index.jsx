import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import './index.css'
import searchApi from '../../api/searchApi'
import MovieCard from "../../features/MovieCard";
import { Pagination  } from 'antd';

export default function SearchPage (props) {
    const location = useLocation()
    const {state} = location
    const [totalData, setTotalData] = useState({});
    const [currPage, setCurrPage] = useState(1);
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        searchApi.searchCinemasOrMovies({keyword : state.keyword,
            pageSize:6})
            .then(res=>{
                setTotalData(res.data.data.movies);
                setMovies(res.data.data.movies.content)
            })
    },[state])

    const changePage = (page, pageSize) => {
        searchApi.searchCinemasOrMovies({keyword : state.keyword,
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

    );
};