import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "animate.css";
import "./style.css";
import App from "./App.jsx";

import { BoardProvider } from "./context/BoardContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <BoardProvider>
        <App />
      </BoardProvider>
    </BrowserRouter>
  </StrictMode>,
);
