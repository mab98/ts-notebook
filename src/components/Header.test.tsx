import { render, screen } from '@testing-library/react';
import React from 'react';
import { dark, light } from '../modeStyles/themes';
import usePersistedState from '../utils/usePersistedState';
import Header from './Header';
import { ThemeProvider, DefaultTheme } from "styled-components";

const TestHeaderWrapperComponent = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => { setTheme(theme.title === 'light' ? dark : light); };
  return (<ThemeProvider theme={theme}>
    <Header text="Notebook" href='#' toggleTheme={toggleTheme} />
  </ThemeProvider>
  )
}

test("renders Notebook text in the Header", () => {
  render(<TestHeaderWrapperComponent />);
  const HeaderElement = screen.getByText('Notebook')
  expect(HeaderElement).toBeInTheDocument()
})