import { isMobile } from "react-device-detect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import BrowserPage from "./page/BrowserPage";
import Heart from "./page/Heart";
import Home from "./page/Home";
import MobilePage from "./page/MobilePage";
import MyEats from "./page/MyEats";
import OrderList from "./page/OrderList";
import Search from "./page/Search";

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
          <Route path="/search" element={<Search />} />
          <Route path="/heart" element={<Heart />} />
          <Route path="/order" element={<OrderList />} />
          <Route path="/my" element={<MyEats />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
