import * as React from 'react';
import { INote } from '../App';
import Note from './Note';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { StoreState } from '../store/reducers';
import ReactGridLayout, { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(ReactGridLayout);

const AllNotesSC = styled.div`
  width: 95vw;
`
const NoNotes = styled.p`
  margin: 2rem auto;
  color: lightgray;
  font-weight: bold;
  font-size: 1.375rem;
  text-align: center;
  line-height: 4rem;
`
interface ILayout {
  i: string
  x: number
  y: number
  w: number
  h: number
}
const COL_SIZE=12;
const generateLayout = (notes: INote[]): ILayout[] =>
  notes.reduce((acc: ILayout[], item: INote, index) => acc.concat({ i: item.id, x: (index*2)%COL_SIZE, y: 0, w: 2, h: 1 }), []);

const AllNotes: React.FC = () => {
  const { storeNotes } = useSelector((state: StoreState) => state)
  return (
    <AllNotesSC>
      { storeNotes.notes[0]
        ?
        <ResponsiveGridLayout
          className="layout"
          layout={generateLayout(storeNotes.notes)}
          cols={COL_SIZE}
          isResizable={false}
          isDraggable
        >
          {storeNotes.notes.map((note: INote) => <div onMouseDown={ e => e.stopPropagation() } key={note.id}><Note  note={note} /></div>)}
        </ResponsiveGridLayout>
        : <NoNotes> <FontAwesomeIcon size='5x' icon={faLightbulb} /> <br />Notes you add appear here </NoNotes>}
    </AllNotesSC>
  )
}

export default AllNotes;
