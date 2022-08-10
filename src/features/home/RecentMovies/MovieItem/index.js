import "./index.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function MovieItem(props) {
  const { movie } = props.movie;
  const navigate = useNavigate();
  const buyTicket = (event) => {
    event.stopPropagation();
    navigate("cinemas/" + movie.id);
  };
  return (
    <div className="ticket_button" onClick={buyTicket}>
      预&nbsp;售
    </div>
  );
}
