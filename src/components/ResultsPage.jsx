import React from "react";
import { AppRoute } from "../settings.js";
import getDeclension from "@dubaua/get-declension";

export function ResultsPage({ result, setPage, results }) {
  const handleResetButtonClick = () => {
    setPage(AppRoute.Initial);
  };

  const sortedResults = [
    ...results,
    { name: "Ваш результат", stepsCount: result },
  ].sort((a, b) => a.stepsCount - b.stepsCount);
  const rows = sortedResults.map(({ name, stepsCount }, index) => (
    <tr
      className={`result-table-row ${name === "Ваш результат" ? "active" : ""}`}
    >
      <td>{index}</td>
      <td>{name}</td>
      <td>{stepsCount}</td>
    </tr>
  ));

  const stepsDeclension = getDeclension({
    count: result,
    one: "шаг",
    few: "шага",
    many: "шагов",
  });

  return (
    <section className="result container">
      <h2>Лучшие результаты:</h2>
      <p>
        Вы завершили игру за <b>{stepsDeclension}</b>, так держать!
      </p>
      <table className="result-table">
        <thead>
          <tr className="result-table-row">
            <th>Место</th>
            <th>Имя</th>
            <th>Шаги</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <p>Хотите попробовать ещё раз?</p>
      <button
        className="button result-button"
        type="button"
        onClick={handleResetButtonClick}
      >
        Новая игра
      </button>
    </section>
  );
}
