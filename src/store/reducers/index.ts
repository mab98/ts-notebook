import { combineReducers } from 'redux';
import notesReducer from './notesReducer';

export const reducers = combineReducers({
  storeNotes: notesReducer,
});

export type StoreState = ReturnType<typeof reducers>;
