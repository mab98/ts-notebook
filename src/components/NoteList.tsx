import { INote } from "../App";

interface NoteListProps {
  notes: INote[]
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => (
  <>
    {
      notes.map((note: INote, key: number) =>
        <li key={note.id}>{note.text} {note.tags}</li>)
    }
  </>
)

export default NoteList