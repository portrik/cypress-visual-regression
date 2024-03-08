import { type FC, useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Movement, Static, TextPage } from "$pages";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const App: FC = function () {
  const staticPage = useMemo(() => <Static />, []);

  const text = useMemo(() => <TextPage />, []);

  const movement = useMemo(() => <Movement />, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={staticPage} path="/" />
        <Route element={text} path="/text" />
        <Route element={movement} path="/movement" />
      </Routes>
    </BrowserRouter>
  );
};
