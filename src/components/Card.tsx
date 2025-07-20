import React from "react";
import { Image } from "../data";

export function Card({
  id,
  url,
  description,
  isVisible,
  isFinished,
  onCardClick,
}: {
  id: Image["id"];
  url: Image["url"];
  description: Image["description"];
  isVisible: boolean;
  isFinished: boolean;
  onCardClick: (id: Image["id"]) => void;
}) {
  const className = `card ${isVisible ? "card-show" : ""} ${
    isFinished ? "card-finished" : ""
  }`;

  const handleClick = () => {
    onCardClick(id);
  };

  return (
    <li className={className} onClick={handleClick}>
      <img src={url} width="204" height="144" alt={description} />
    </li>
  );
}
