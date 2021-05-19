import React, { useState } from "react"
import './App.css';
import AddNote from './components/AddNote';
import DisplayNotes from "./components/DisplayNotes";
import Header from "./components/Header";

export interface INote {
  id: string;
  text: string;
  tags: string;
  selectedColor: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  return (
    <div className="App">
      <Header />
      <AddNote notes={notes} setNotes={setNotes} />
      <DisplayNotes notes={notes} />
    </div>
  );
}

export default App;