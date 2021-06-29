import { combineReducers } from 'redux';
import { initialState, notesReducer } from './notesReducer';

export const reducers = combineReducers({
  storeNotes: notesReducer,
});

export type StoreState = ReturnType<typeof reducers>;

export { initialState };
