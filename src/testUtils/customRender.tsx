import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/MainTheme";
import { Provider } from "react-redux";
import { store } from "../store";

export const customRender = (children: React.ReactElement) =>
  render(
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
    </BrowserRouter>,
  );

export const customRenderStore = (children: React.ReactElement) =>
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
      </Provider>
    </BrowserRouter>,
  );
