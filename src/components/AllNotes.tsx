import { INote } from '../App';
import Note from './Note';

const AllNotes: React.FC<{ notes: INote[], setClickedNote: Function }> = ({ notes, setClickedNote }) => {
  return (
    <div className='all-notes'>
      <h1>All Notes</h1>
      { notes[0] ? notes.map((note: INote, key: number) => <Note key={note.id} note={note} setClickedNote={setClickedNote} />) : <p id='no-note'>No Notes Yet</p>}
    </div>
  )
}

export default AllNotes
