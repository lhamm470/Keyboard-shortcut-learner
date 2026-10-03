/// <reference path="./vite-env.d.ts" />

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { IsDoingLevelProvider } from "./IsDoingLevelContext.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IsDoingLevelProvider>
      <App />
    </IsDoingLevelProvider>
  </StrictMode>,
);
