import * as React from 'react';
import { useState } from 'react';
import { INote } from '../App';
import AllNotes from './AllNotes';
import ClickedNote from './ClickedNote';

const DisplayNotes: React.FC<{ notes: INote[] }> = ({ notes }) => {
  const [clickedNote, setClickedNote] = useState<INote>(notes[0]);
  return (
    <div className='display-notes'>
      <AllNotes notes={notes} setClickedNote={setClickedNote} />
      <ClickedNote note={clickedNote} />
    </div>
  )
}

export default DisplayNotes
