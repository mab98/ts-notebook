import React from 'react';
import { dark, light } from '../modeStyles/themes';
import usePersistedState from '../utils/usePersistedState';
import Header from '../components/Header';
import { DefaultTheme } from "styled-components";
import customRender from '../utils/ThemeProviderWrapper';

const HeaderStateComponent = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => { setTheme(theme.title === 'light' ? dark : light) };
  return <Header text="Notebook" href='#' toggleTheme={toggleTheme} />
}

test('renders children component correctly', () => {
  customRender(<HeaderStateComponent />)
})