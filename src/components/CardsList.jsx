import React from "react";
import { Card } from "./Card.jsx";
import { TIMEOUT } from "../settings.js";

export function CardsList({ theme, images, finishedCards, checkCards }) {
  const [visibleCards, setVisibleCards] = React.useState([]);

  const handleCardClick = (id) => {
    if (visibleCards.includes(id) || finishedCards.includes(id)) {
      return;
    }

    switch (visibleCards.length) {
      case 0:
        setVisibleCards([id]);
        break;
      case 1:
        setVisibleCards((cards) => [...cards, id]);
        checkCards(...visibleCards, id);
        setTimeout(() => {
          setVisibleCards([]);
        }, TIMEOUT);
        break;
      default:
        setVisibleCards([]);
    }
  };

  return (
    <ul className={`cards cards-theme-${theme}`}>
      {images.map((image) => (
        <Card
          key={image.id}
          id={image.id}
          url={image.url}
          description={image.description}
          isVisible={visibleCards.includes(image.id)}
          isFinished={finishedCards.includes(image.id)}
          onCardClick={handleCardClick}
        />
      ))}
    </ul>
  );
}
