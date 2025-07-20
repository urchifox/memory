import React from "react";
import { InitialPage } from "./InitialPage";
import { GamePage } from "./GamePage";
import { ResultsPage } from "./ResultsPage";
import { AppRoute } from "../settings";
import { Theme, Image, Result } from "../data";

export function App({
  getImages,
  results = [],
}: {
  getImages: (theme: Theme) => Array<Image>;
  results: Array<Result>;
}) {
  const [page, setPage] = React.useState<AppRoute>(AppRoute.Initial);
  const [theme, setTheme] = React.useState<null | Theme>(null);
  const [images, setImages] = React.useState<Array<Image>>([]);
  const [result, setResult] = React.useState(0);

  const handleGameStart = (theme: Theme) => {
    setTheme(theme);
    setImages(getImages(theme));
    setPage(AppRoute.Game);
  };

  const getPage = (page: AppRoute) => {
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
