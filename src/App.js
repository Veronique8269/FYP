import "./App.css";
import { BrowserView, MobileView } from "react-device-detect";
import { HomePage } from "./pages/page-home/HomePage";
import { FlowerProvider } from "./context/useFlowerContext";
import { BrowserPage } from "./pages/browser/BrowserPage";
import "animate.css";

function App() {
  return (
    <>
      <FlowerProvider>
        <MobileView>
          <HomePage />
        </MobileView>

        <BrowserView>
          <BrowserPage />
        </BrowserView>
      </FlowerProvider>
    </>
  );
}

export default App;
