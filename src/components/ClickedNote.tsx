import * as React from 'react';
import { INote } from '../App';

const ClickedNote: React.FC<{ note: INote }> = ({ note }) => {
  return (
    <div className='clicked-note-container'>
      <h1>Clicked Note</h1>
      {note ?
        <div className='clicked-note' style={{ backgroundColor: note.selectedColor }}>
          <h3><strong>{note ? note.tags : null}</strong></h3>
          <hr />
          <p>{note ? note.text : null}</p>
        </div>
        : ''}
    </div>
  )
}

export default ClickedNote
