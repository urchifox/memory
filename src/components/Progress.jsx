import React from "react";

export function Progress({ finishedPairsAmount, pairsAmount }) {
  return (
    <>
      <div className="progress-wrapper">
        <div
          className="progress"
          style={{ width: `${(finishedPairsAmount / pairsAmount) * 100}%` }}
        ></div>
      </div>
      <p className="progress-description">
        Открыто <span>{finishedPairsAmount}</span> / <span>{pairsAmount}</span>
      </p>
    </>
  );
}
