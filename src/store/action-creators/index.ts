import { INote } from '../../App';
import { ActionType } from '../types';
import { DefaultTheme } from 'styled-components';

export const addNoteAction = (note: INote) => ({
  type: ActionType.ADD_NOTE,
  payload: note,
});

export const toggleTheme = (theme: DefaultTheme) => ({
  type: ActionType.TOGGLE_THEME,
  payload: theme,
});
