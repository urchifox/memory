import React from "react";
import { Card } from "./Card";
import { TIMEOUT } from "../settings";
import { Image, Theme } from "../data";

export function CardsList({
  theme,
  images,
  finishedCards,
  checkCards,
}: {
  theme: Theme | null;
  images: Array<Image>;
  finishedCards: Array<Image["id"]>;
  checkCards: (firstId: Image["id"], secondId: Image["id"]) => void;
}) {
  const [visibleCards, setVisibleCards] = React.useState<Array<Image["id"]>>(
    []
  );

  const handleCardClick = (id: Image["id"]) => {
    if (visibleCards.includes(id) || finishedCards.includes(id)) {
      return;
    }

    switch (visibleCards.length) {
      case 0:
        setVisibleCards([id]);
        break;
      case 1:
        setVisibleCards((cards) => [...cards, id]);
        checkCards(visibleCards[0], id);
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
