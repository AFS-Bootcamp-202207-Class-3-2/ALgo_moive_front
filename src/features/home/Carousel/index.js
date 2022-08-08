//首页轮播图组件
import {Carousel} from 'antd';
import './index.css'
import {getCarousels} from '../../../api/home'
import {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";

export default () => {
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
            <Carousel autoplay>
                {
                    carousels.map((item, index) => {
                        return (
                            <div key={index}>
                                <img className="carouselStyle" src={item}/>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
};