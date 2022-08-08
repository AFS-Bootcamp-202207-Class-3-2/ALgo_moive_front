import {Button} from "antd";
import './index.css'
import React from "react";
export default function MovieItem(props) {
    return (
        <div >
            <Button type="primary" className="ticket_button">
                <span>
                    购票
                </span>
            </Button>
        </div>
    )
}