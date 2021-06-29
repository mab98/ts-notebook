import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AddNote from '../components/AddNote';
import { render } from '@testing-library/react';
import { reducers } from '../store/reducers';
import { store } from '../store';
import "@testing-library/jest-dom/extend-expect";

// interface RenderWithRedux<S = any, A extends Action = AnyAction, I extends S = any> {
//   (
//     ui: React.ReactNode,
//     reduxOptions: {
//       initialState?: I,
//       store?: Store<S, A>
//     }
//   ): RenderResult & {
//     initialState?: INoteState
//     store: Store<S, A>
//   }
// }

const renderWithRedux = (
  ui: React.ReactElement,
  {
    initialState,
    store = createStore(reducers, initialState),
    ...renderOptions
  }: any = {}
) => {
  const Wrapper: React.FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

const Wrapper: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

describe("Renders AddNote Component with Redux", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
  });
  it('renders AddNote with Redux using Wrapper', () => {
    render(<Wrapper> <AddNote /> </Wrapper>)
  })
  it('renders AddNote with Redux using renderWithRedux', () => {
    renderWithRedux(<AddNote />)
  })
});
