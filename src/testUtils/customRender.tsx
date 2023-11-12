import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import mainTheme from "../styles/MainTheme";
import { PersonStructure } from "../store/types";
import { peopleReducer } from "../store/features/people/peopleSlice";

export const customRender = (children: React.ReactElement) =>
  render(
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
    </BrowserRouter>,
  );

export const customRenderWithProviders = (
  children: React.ReactElement,
  mockData: PersonStructure[],
) => {
  const mockStore = configureStore({
    reducer: {
      peopleState: peopleReducer,
    },
    preloadedState: { peopleState: { people: mockData } },
  });
  render(
    <BrowserRouter>
      <Provider store={mockStore}>
        <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
      </Provider>
    </BrowserRouter>,
  );
};
