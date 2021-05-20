import React, { useState } from "react"
import './App.css';
import AddNote from './components/AddNote';
import AllNotes from "./components/AllNotes";
import Header from "./components/Header";
import styled from "styled-components";

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
  return (
    <>
      <Header />
      <AppSC>
        <AddNote notes={notes} setNotes={setNotes} />
        <AllNotes notes={notes} />
      </AppSC>
    </>
  );
}

export default App;