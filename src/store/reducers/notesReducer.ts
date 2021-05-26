import { INoteState, Action } from '../actions';
import { ActionType } from '../types';

const initialState: INoteState = {
  notes: [],
};

const notesReducer = (state: INoteState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};

export default notesReducer;
