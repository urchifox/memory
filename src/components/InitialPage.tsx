import React from "react";
import { AppTheme } from "../settings";
import { Theme } from "../data";

export function InitialPage({
  onGameStart,
}: {
  onGameStart: (theme: Theme) => void;
}) {
  return (
    <section className="rules container">
      <h2>Добро пожаловать!</h2>
      <p>Memory — игра для тренировки визуальной памяти</p>
      <div className="rules-panel">
        <h3>Правила игры</h3>
        <ul className="rules-list">
          <li>
            В наборе есть множество карточек – по две штуки с одним и тем же
            рисунком.
          </li>
          <li>
            Нужно разложить карточки «рубашкой» вверх на столе, а затем
            переворачивать по две.
          </li>
          <li>
            Если они совпадают – игрок забирает их и получает ещё один ход.
          </li>
        </ul>
      </div>
      <button
        onClick={() => onGameStart(AppTheme.Cats)}
        className={`ico-button ico-button-${AppTheme.Cats}`}
        type="button"
      >
        Котики
      </button>
      <button
        onClick={() => onGameStart(AppTheme.Flowers)}
        className={`ico-button ico-button-${AppTheme.Flowers}`}
        type="button"
      >
        Цветочки
      </button>
      <button
        onClick={() => onGameStart(AppTheme.Cars)}
        className={`ico-button ico-button-${AppTheme.Cars}`}
        type="button"
      >
        Машины
      </button>
    </section>
  );
}
