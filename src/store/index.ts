import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './reducers';

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

export const store = createStore(
  reducers,
  persistedState,
  composeWithDevTools()
);
type RootState = ReturnType<typeof store.getState>;
function saveToLocalStorage(state: RootState) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    console.log(error);
  }
}

store.subscribe(() => saveToLocalStorage(store.getState()));
