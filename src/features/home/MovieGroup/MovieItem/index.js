import { Button } from "antd";
import "./index.css";
import React from "react";
export default function MovieItem(props) {
  const buyTicket = (event) => {
    event.stopPropagation();
  };
  return (
    <div>
      <Button type="danger" className="ticket_button" onClick={buyTicket}>
        <span>购票</span>
      </Button>
    </div>
  );
}
