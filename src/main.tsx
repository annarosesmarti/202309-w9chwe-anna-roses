import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/400-italic.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import mainTheme from "./styles/MainTheme";
import App from "./components/App/App";
import GlobalStyled from "./styles/GlobalStyled";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyled />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
