import { INote } from '../App';
import { ActionType } from './types';

export interface INoteState {
  notes: INote[];
}

interface IAddNote {
  type: ActionType.ADD_NOTE;
  payload: INote;
}

export interface IDeleteNote {
  type: ActionType.DELETE_NOTE;
  payload: 'string';
}

export type Action = IAddNote | IDeleteNote;
