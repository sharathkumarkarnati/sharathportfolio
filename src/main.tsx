import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "overlayscrollbars/overlayscrollbars.css";
import App from "./App.tsx";
import { ThemeContextProvider } from "./ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>
);
