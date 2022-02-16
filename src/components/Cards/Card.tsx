import React, { useState } from "react";
import { User } from "../../types/Types";
import "./Card.css";

const Card = (props: User) => {
  const [expand, setExpand] = useState(false);

  const onClick = () => {
    setExpand(!expand);
  };

  return (
    <li className="card" onClick={onClick}>
      <p>{props.name}</p>
      {expand && (
        <div className="card-content">
          <p>{props.email}</p>
          <p>{props.phone}</p>
        </div>
      )}
    </li>
  );
};

export default Card;
