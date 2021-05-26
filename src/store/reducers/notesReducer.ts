import { INoteState, Action } from '../actions';
import { ActionType } from '../types';

const initialState: INoteState = {
  notes: [],
};

const notesReducer = (state: INoteState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    case ActionType.DELETE_NOTE:
      const remainingNotes = state.notes.filter(
        (note) => note.id != action.payload
      );
      return { ...state, notes: remainingNotes };
    default:
      return state;
  }
};

export default notesReducer;
