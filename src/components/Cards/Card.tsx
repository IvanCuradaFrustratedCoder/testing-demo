import React from "react";
import { User } from "../../types/Types";
import './Card.css';

const Card = (props: User) => {
  return <li className="card">{props.name}</li>;
};

export default Card;
