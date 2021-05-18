
import { INote } from '../App';

const Note: React.FC<{ note: INote, setClickedNote: Function }> = ({ note, setClickedNote }) => {
  return (
    <div className="note" onClick={() => setClickedNote(note)}>
      <h3><strong>{note.tags}</strong></h3>
      <p>{note.text.slice(0, 25)} ...</p>
    </div>
  )
}

export default Note
