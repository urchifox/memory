import React from "react";
import { Progress } from "./Progress.jsx";
import { CardsList } from "./CardsList.jsx";
import { Modal } from "./Modal.jsx";
import { AppRoute } from "../settings.js";
import { useGame } from "../use-game.js";

export function GamePage({ theme, images = [], setResult, setPage }) {
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
