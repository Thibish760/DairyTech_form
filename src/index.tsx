import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DesktopScreen } from "./screens/DesktopScreen/DesktopScreen";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DesktopScreen />
  </StrictMode>,
);
