//首页轮播图组件
import {Carousel} from 'antd';
import './index.css'
import {getCarousels} from '../../../api/home'
import {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";

export default function Carousels(props) {
    const [carousels, setCarousels] = useState([])
    const dispatch = useDispatch();
    useEffect(()=>{
        getCarousels().then(response => {
            setCarousels(response.data.data.carousel);
        }).catch(function (msg) {
            console.log(msg);
        })
    },[dispatch]);

    return (
        <div>
            <br/><br/>
            <Carousel autoplay className='carousel-box'>
                {
                    carousels.map((item, index) => {
                        return (
                            <div key={index}>
                                <img alt="Carousel" className="carouselStyle" src={item}/>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
};