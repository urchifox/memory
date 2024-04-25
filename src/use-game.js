import React from "react";

export const useGame = (images) => {
  const [stepsCount, setStepsCount] = React.useState(0);
  const [finishedCards, setFinishedCards] = React.useState([]);
  const isWin = finishedCards.length === images.length;

  const checkCards = (firstId, secondId) => {
    const firstCard = images.find((image) => image.id === firstId);
    const secondCard = images.find((image) => image.id === secondId);

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
