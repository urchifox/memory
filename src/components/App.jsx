import React from "react";
import { InitialPage } from "./InitialPage.jsx";
import { GamePage } from "./GamePage.jsx";
import { ResultsPage } from "./ResultsPage.jsx";
import { AppRoute } from "../settings.js";

export function App({ getImages, results = [] }) {
  const [page, setPage] = React.useState(AppRoute.Initial);
  const [theme, setTheme] = React.useState(null);
  const [images, setImages] = React.useState([]);
  const [result, setResult] = React.useState(0);

  const handleGameStart = (theme) => {
    setTheme(theme);
    setImages(getImages(theme));
    setPage(AppRoute.Game);
  };

  const getPage = (page) => {
    switch (page) {
      case AppRoute.Initial:
        return <InitialPage onGameStart={handleGameStart} />;
      case AppRoute.Game:
        return (
          <GamePage
            theme={theme}
            images={images}
            setResult={setResult}
            setPage={setPage}
          />
        );
      case AppRoute.Results:
        return (
          <ResultsPage result={result} setPage={setPage} results={results} />
        );
      default:
        return null;
    }
  };

  return getPage(page);
}
