import {Button} from "antd";
import "./index.css";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function MovieItem(props) {
    const {movie} = props.movie;
    const navigate = useNavigate();
    const buyTicket = (event) => {
        event.stopPropagation();
        navigate("cinemas/" + movie.id)
    };
    return (
        <div>
            <Button type="danger" className="ticket_button" onClick={buyTicket}>
                <span>购票</span>
            </Button>
        </div>
    );
}
