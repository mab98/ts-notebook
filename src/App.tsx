import React, { useState } from "react"
import './App.css';
import AddNote from './components/AddNote';
import AllNotes from "./components/AllNotes";
import Header from "./components/Header";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./modeStyles/globalStyles";
import { light, dark } from "./modeStyles/themes";

const AppSC = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export interface INote {
  id: string;
  text: string;
  tags: string;
  selectedColor: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  const [theme, setTheme] = useState(light);
  const toggleTheme = () => { setTheme(theme.title === 'light' ? dark : light); };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header text="Notebook" toggleTheme={toggleTheme} />
      <AppSC>
        <AddNote notes={notes} setNotes={setNotes} />
        <AllNotes notes={notes} />
      </AppSC>
    </ThemeProvider>
  );
}

export default App;