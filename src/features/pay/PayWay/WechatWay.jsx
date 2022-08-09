import React, { useEffect, useState } from 'react'
import {useLocation, useParams} from 'react-router-dom'
export default function WechatWay (props) {
    const {way} = useParams();
    console.log(way)
    return(
        <div>
            WechatWay
        </div>
    );
};