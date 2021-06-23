import { render, screen } from '@testing-library/react';
import React, { useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { dark, light } from '../modeStyles/themes';
import usePersistedState from '../utils/usePersistedState';
import Header from './Header';

const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
const toggleTheme = () => { setTheme(theme.title === 'light' ? dark : light); };

test("renders Notebook text in the Header", () => {
  render(<Header text="Notebook" href='#' toggleTheme={toggleTheme} />);
  const HeaderElement = screen.getByAltText('Notebook')
  expect(HeaderElement).toBeInTheDocument()
})