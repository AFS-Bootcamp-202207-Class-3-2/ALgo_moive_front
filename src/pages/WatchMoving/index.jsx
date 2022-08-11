import React, {useEffect} from 'react';
import {Back, gsap} from 'gsap'
import { Button } from 'antd';
import './index.css'
import {useNavigate} from "react-router-dom";

export default function WatchMoving (props) {
    const navigate = useNavigate()
    useEffect(()=>{
        let inv = setInterval(()=>{
            const tl1 = gsap.timeline()
            tl1.staggerFromTo(
                '.message-box-a span', 1, {
                    ease: Back.easeOut.config(1.7),
                    opacity: 0,
                    rotation: -180,
                    y: -100

                }, {
                    ease: Back.easeOut.config(1.7),
                    opacity: 1,
                    rotation: 360,
                    y: () => {
                        return Math.random() * 50
                    }
                }, .1, '+=0', () => {

                }
            )
            return clearInterval(inv)
        },1000)

    },[navigate])

    const leaveHome =()=>{
        navigate('/',{
            replace:true
        })
    }
    return (
        <div className={"movie-box-a"}>
            <div className={"message-box-a"}>
                <span>看</span>
                <span>电</span>
                <span>影</span>
                <span>&nbsp;</span>
                <span>i</span>
                <span>n</span>
                <span>g</span>
                <span>·</span>
                <span>·</span>
                <span>·</span>
            </div>
            <div className={"limiit"}>
                <img className={"movie-pic-box"}
                     height={600}
                     src={"https://my-avatar-guli.oss-cn-shenzhen.aliyuncs.com/2020/%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9Flol%E5%85%89%E8%BE%89%E5%A5%B3%E9%83%8E%E6%8B%89%E5%85%8B%E4%B8%9D%E5%90%8C%E4%BA%BA4k%E9%AB%98%E6%B8%85%E5%A3%81%E7%BA%B8_%E5%BD%BC%E5%B2%B8%E5%9B%BE%E7%BD%91.jpg"}
                     alt={"movie"}/>
            </div>
            <div className={"movie-bottom-a"}>
                <Button type="primary" onClick={leaveHome}>
                    Leave
                </Button>
            </div>
        </div>
    );

};