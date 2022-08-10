import React, {useEffect} from 'react'
import {gsap} from "gsap";
import './algo.css'
import {useNavigate, useParams} from "react-router-dom";

export default function ALGO() {
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() => {
        setTimeout(() => {
            navigate('/order/' + id)
        }, 4600)
        const timeline1 = gsap.timeline()
        const timeline2 = gsap.timeline()
        timeline1.staggerFromTo('.text-letter-wrapper span', .5, {
            opacity: 0,
            x: -3
        }, {
            opacity: 1,
            x: 0,
            delay: 2,
        }, .18)
        timeline2.staggerFromTo('.text-name-wrapper span', .5, {
            opacity: 0,
            x: -3
        }, {
            opacity: 1,
            x: 0,
            delay: 2,
        }, .18)
    }, [id,navigate])
    return (
        <div className="tot">
            <div className="containera">
                <div className="circle-areaa">
                    <div className="circlea">
                    </div>
                    <svg className="ccsvg">
                        <filter id="wavy">
                            <feTurbulence x='0' y='0' baseFrequency='0.009' numOctaves='5' seed='2'>
                                <animate attributeName='baseFrequency' dur='60s' values='0.02;0.005;0.02'
                                         repeatCount='indefinite'>
                                </animate>
                            </feTurbulence>
                            <feDisplacementMap in='SourceGraphic' scale='30'></feDisplacementMap>
                        </filter>
                    </svg>
                </div>
                <div className="video-area">
                </div>
                <div className="text-area">
                    <div className="text-letter-wrapper">
                        <span>A</span>
                        <span>L</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>G</span>
                        <span>O</span>
                    </div>
                    <div className="text-name-wrapper">
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>一</span>
                        <span>起</span>
                        <span>去</span>
                        <span>看</span>
                        <span className="rr">电</span>
                        <span className="rr">影</span>

                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
