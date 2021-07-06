import React from 'react';
import { light } from "../modeStyles/themes";
import usePersistedState from "./usePersistedState";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider, DefaultTheme } from "styled-components";

const ThemeProviderWrapper: React.FC = ({ children }) => {
  const [theme] = usePersistedState<DefaultTheme>('theme', light);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: ThemeProviderWrapper, ...options })

export default customRender;