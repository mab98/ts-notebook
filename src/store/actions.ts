import { INote } from '../App';
import { DefaultTheme } from 'styled-components';
import { ActionType } from './types';

export interface INoteState {
  notes: INote[];
}

interface IAddNote {
  type: ActionType.ADD_NOTE;
  payload: INote;
}

interface IToggleTheme {
  type: ActionType.TOGGLE_THEME;
  payload: DefaultTheme;
}

export type Action = IAddNote | IToggleTheme;
