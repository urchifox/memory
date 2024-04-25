import React from "react";

export function Card({
  id,
  url,
  description,
  isVisible,
  isFinished,
  onCardClick,
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
