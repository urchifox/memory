import React from "react";
import { Image } from "./data";

export const useGame = (images: Array<Image>) => {
  const [stepsCount, setStepsCount] = React.useState(0);
  const [finishedCards, setFinishedCards] = React.useState<Array<Image["id"]>>(
    []
  );
  const isWin = finishedCards.length === images.length;

  const checkCards = (firstId: Image["id"], secondId: Image["id"]) => {
    const firstCard = images.find((image) => image.id === firstId);
    const secondCard = images.find((image) => image.id === secondId);

    if (firstCard === undefined || secondCard === undefined) {
      return;
    }

    if (firstCard.url === secondCard.url) {
      setFinishedCards((cards) => [...cards, firstId, secondId]);
    }

    setStepsCount((step) => step + 1);
  };

  return {
    stepsCount,
    finishedCards,
    checkCards,
    isWin,
  };
};
