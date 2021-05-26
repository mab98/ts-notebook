import { INote } from '../../App';
import { ActionType } from '../types';

export const addNoteAction = (note: INote) => ({
  type: ActionType.ADD_NOTE,
  payload: note,
});

export const deleteNoteAction = (id: string) => ({
  type: ActionType.DELETE_NOTE,
  payload: id,
});
