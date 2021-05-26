import * as React from 'react';
import { INote } from '../App';
import Note from './Note';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { StoreState } from '../store/reducers';

const AllNotesSC = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: baseline;
  width: 80vw;
`

const NoNotes = styled.p`
  margin: 2rem auto;
  color: lightgray;
  font-weight: bold;
  font-size: 1.375rem;
  text-align: center;
  line-height: 4rem;
`

const AllNotes: React.FC = () => {
  const { storeNotes } = useSelector((state: StoreState) => state)
  return (
    <AllNotesSC>
      { storeNotes.notes[0]
        ? storeNotes.notes.map((note: INote, key: number) => <Note key={note.id} note={note} />)
        : <NoNotes> <FontAwesomeIcon size='5x' icon={faLightbulb} /> <br />Notes you add appear here </NoNotes>}
    </AllNotesSC>
  )
}

export default AllNotes
