import * as React from 'react';
import { INote } from '../App';
import Note from './Note';
import styled from 'styled-components';

const AllNotesSC = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: baseline;
  width: 80vw;
`
const NoNotes = styled.p`
  margin: 0 auto;
  color: lightgray;
  font-weight: bold;
  font-size: 1.375rem;
`

const AllNotes: React.FC<{ notes: INote[] }> = ({ notes }) => {
  return (
    <AllNotesSC>
      { notes[0] ? notes.map((note: INote, key: number) => <Note key={note.id} note={note} />) : <NoNotes>Notes you add appear here</NoNotes>}
    </AllNotesSC>
  )
}

export default AllNotes
