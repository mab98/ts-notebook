import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AddNote from '../components/AddNote';
import { queryByAttribute, render } from '@testing-library/react';
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
  it("renders DOM elements", () => {
    const component = renderWithRedux(<AddNote />)
    const getById = queryByAttribute.bind(null, 'id');
    const titleInputElement = getById(component.container, 'title-input')
    const textInputElement = getById(component.container, 'text-input')
    const categorySelectElement = getById(component.container, 'select-category')
    const homeOptionElement = getById(component.container, 'option-home')
    const workOptionElement = getById(component.container, 'option-work')
    const studyOptionElement = getById(component.container, 'option-study')
    const submitButtonElement = getById(component.container, 'submit-btn')
    expect(titleInputElement).toBeTruthy();
    expect(textInputElement).toBeTruthy();
    expect(categorySelectElement).toBeTruthy();
    expect(submitButtonElement).toBeTruthy();
    // expect(homeOptionElement);
    // expect(workOptionElement);
    // expect(studyOptionElement);
    component.debug()
  })
});
