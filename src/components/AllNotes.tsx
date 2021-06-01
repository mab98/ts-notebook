import * as React from 'react';
import { INote } from '../App';
import Note from './Note';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { StoreState } from '../store/reducers';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';

const AllNotesSC = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  width: 95vw;
`

const NoNotes = styled.span`
  margin: 2rem auto;
  color: lightgray;
  font-weight: bold;
  font-size: 1.375rem;
  text-align: center;
  line-height: 4rem;
`

const AllNotes: React.FC = () => {
  const { storeNotes } = useSelector((state: StoreState) => state)
  const [draggableNotes, setDraggableNotes] = React.useState(storeNotes.notes);
  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(draggableNotes);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setDraggableNotes(items);
  }
  React.useEffect(() => {
    setDraggableNotes(storeNotes.notes)
  }, [storeNotes]);
  return (<>
    {storeNotes.notes[0] ?
      <DragDropContext onDragEnd={handleOnDragEnd}>
        < Droppable droppableId='notes' direction="horizontal" type="column">
          {provided => (
            <AllNotesSC {...provided.droppableProps} ref={provided.innerRef}>
              { draggableNotes.map((note: INote, index: number) =>
                <Draggable key={note.id} draggableId={note.id} index={index}>
                  {provided => (
                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                      <Note note={note} /></div>
                  )}
                </Draggable>,
                (provided.placeholder))}
            </AllNotesSC>
          )}
        </Droppable>
      </DragDropContext >
      : <NoNotes> <FontAwesomeIcon size='5x' icon={faLightbulb} /> <br />Notes you add appear here </NoNotes>}
  </>)
}

export default AllNotes
