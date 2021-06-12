import React from "react"
import './App.css';
import AddNote from './components/AddNote';
import AllNotes from "./components/AllNotes";
import Header from "./components/Header";
import styled, { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyles from "./modeStyles/globalStyles";
import { light, dark } from "./modeStyles/themes";
import usePersistedState from "./utils/usePersistedState";

const AppSC = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export interface INote {
  id: string;
  title: string;
  text: string;
  category: string | undefined;
  selectedColor: string;
}

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => { setTheme(theme.title === 'light' ? dark : light); };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header text="Notebook" href='#' toggleTheme={toggleTheme} />
      <AppSC>
        <AddNote />
        <AllNotes />
      </AppSC>
    </ThemeProvider>
  );
}

export default App;