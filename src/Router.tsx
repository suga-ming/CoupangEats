import { isMobile } from "react-device-detect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrowserPage from "./page/BrowserPage";
import Home from "./page/Home";
import MobilePage from "./page/MobilePage";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isMobile ? <MobilePage /> : <BrowserPage />}
          />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
