import {useEffect, useState} from "react";
import searchApi from "../../../api/searchApi";
import {FireOutlined} from '@ant-design/icons'
import './index.css'

export default function MovieItemRank(props) {

    const {searchField} = props

    const [movieList,setMovieList] = useState([])
    useEffect(() => {
        searchApi.searchCinemasOrMovies({
            sortType: searchField,
            pageSize: 5
        }).then(res => {
            setMovieList(res.data.data.movies.content)
            })
    }, [searchField])
    return (
        <>
            <div>
                {
                    movieList.map((item, index)=>{
                        return (
                            <div className="rank_div">
                                <div className="movie_div">
                                    <div className="hot_rank">
                                        {index + 1}
                                    </div>
                                    <div className="cover_div">
                                        <img src={item.cover} style={{width:" 200px", height:"280px"}} alt="" />
                                    </div>
                                    <div className="desc_div">
                                        <span className="name_div"><b>{item.movieName}</b></span>
                                        <span>主演：{item.actors}</span>
                                        <span>上映时间：{item.releaseDate}</span>
                                    </div>
                                </div>
                                <div className="score_div">
                                    {
                                        searchField === 'score' ? item.score
                                            : searchField === 'hotSpot' ? item.hotSpot : item.boxOffice + ' w'
                                    }
                                    {
                                        searchField === 'hotSpot' ? <FireOutlined className="hot-spot-icon"/> : ''
                                    }
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}