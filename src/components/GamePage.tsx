import React from "react";
import { Progress } from "./Progress";
import { CardsList } from "./CardsList";
import { Modal } from "./Modal";
import { AppRoute } from "../settings";
import { useGame } from "../use-game";
import { Image, Theme } from "../data";

export function GamePage({
  theme,
  images = [],
  setResult,
  setPage,
}: {
  theme: Theme | null;
  images: Array<Image>;
  setResult: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<AppRoute>>;
}) {
  const { stepsCount, finishedCards, checkCards, isWin } = useGame(images);

  const handleResultsClick = () => {
    setResult(stepsCount);
    setPage(AppRoute.Results);
  };

  return (
    <>
      <section className="game container">
        <Progress
          finishedPairsAmount={finishedCards.length / 2}
          pairsAmount={images.length / 2}
        />
        <div className="steps">Шаг {stepsCount}</div>
        <CardsList
          theme={theme}
          images={images}
          finishedCards={finishedCards}
          checkCards={checkCards}
        />
      </section>
      {isWin && (
        <Modal>
          <h3 className="modal-caption">Победа!</h3>
          <p className="modal-description">
            Теперь давайте узнаем результаты этой партии
          </p>
          <button
            className="button modal-button"
            type="button"
            onClick={handleResultsClick}
          >
            Показать результаты
          </button>
        </Modal>
      )}
    </>
  );
}
