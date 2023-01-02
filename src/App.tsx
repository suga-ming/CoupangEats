import { BrowserView, isMobile, MobileView } from "react-device-detect";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import BrowserPage from "./page/BrowserPage";
import MobilePage from "./page/MobilePage";
import Router from "./Router";
import GlobalStyle from "./styles/GlobalStyles";
import { lightTheme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <MobileView>
          <MobilePage />
        </MobileView>
        <BrowserView>
          <BrowserPage />
        </BrowserView>
        <ReactQueryDevtools initialIsOpen></ReactQueryDevtools>
      </ThemeProvider>
    </>
  );
}

export default App;
