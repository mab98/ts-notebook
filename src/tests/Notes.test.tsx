import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AddNote from '../components/AddNote';
import { act, cleanup, fireEvent, getByTestId, queryByAttribute, render, screen, waitFor } from '@testing-library/react';
import { reducers } from '../store/reducers';
import { store } from '../store';

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
    store = createStore(reducers, initialState)
  }: any = {}
) => {
  const Wrapper: React.FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }
  return render(ui, { wrapper: Wrapper })
}

const Wrapper: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

describe("AddNote", () => {
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
  afterEach(() => {
    cleanup();
  })
  it('renders AddNote with Redux using Wrapper', () => {
    render(<Wrapper> <AddNote /> </Wrapper>)
  })
  it('renders AddNote with Redux using renderWithRedux', () => {
    renderWithRedux(<AddNote />)
  })
  it("renders DOM elements", () => {
    const component = renderWithRedux(<AddNote />)
    const getById = queryByAttribute.bind(null, 'id')
    const titleInput = getById(component.container, 'title-input')
    const textInput = getById(component.container, 'text-input')
    const categorySelect = getById(component.container, 'select-category')
    const submitBtn = getById(component.container, 'submit-btn')
    expect(titleInput).toBeTruthy();
    expect(textInput).toBeTruthy();
    expect(categorySelect).toBeTruthy();
    expect(submitBtn).toBeTruthy();
  })
  it('should give error validations if required fields are not filled', () => {
    const component = renderWithRedux(<AddNote />)
    const getById = queryByAttribute.bind(null, 'id')
    const submitBtn = getById(component.container, 'submit-btn')
    fireEvent.click(submitBtn)
  })
  it('should take input value for title', () => {
    const component = renderWithRedux(<AddNote />)
    const getById = queryByAttribute.bind(null, 'id')
    const titleInput = getById(component.container, 'title-input')
    expect(titleInput.value).toBe('');
    fireEvent.change(titleInput, { target: { value: "lorem ipsum" } })
    expect(titleInput).toHaveValue('lorem ipsum');
  })
  it('should take input value for text', () => {
    const component = renderWithRedux(<AddNote />)
    const getById = queryByAttribute.bind(null, 'id')
    const textInput = getById(component.container, 'text-input')
    expect(textInput.value).toBe('');
    fireEvent.change(textInput, { target: { value: "lorem ipsum lorem ipsum" } })
    expect(textInput.value).toBe('lorem ipsum lorem ipsum');
  })
  it('should select a category', async () => {
    const { container } = renderWithRedux(<AddNote />)
    let select = container.querySelector("[data-testid='select-category'] > .ant-select-selector");
    expect(select).not.toBeNull();

    let selectCategory = select as Element;
    await act(async () => { fireEvent.mouseDown(selectCategory) })

    const value = "Home";
    expect(await screen.findByTitle(value)).toBeInTheDocument();
    await act(async () => { fireEvent.click(screen.getByTitle(value)) })

    const getById = queryByAttribute.bind(null, 'id')
    const submitBtn = getById(container, 'submit-btn')
    await act(async () => { fireEvent.click(submitBtn) })
  })
  it('should submit the addnote form', async () => {
    const { container } = renderWithRedux(<AddNote />)
    const getById = queryByAttribute.bind(null, 'id')

    const titleInput = getById(container, 'title-input')
    const textInput = getById(container, 'text-input')
    const submitBtn = getById(container, 'submit-btn')

    let select = container.querySelector("[data-testid='select-category'] > .ant-select-selector");
    expect(select).not.toBeNull()
    let selectCategory = select as Element;
    await act(async () => { fireEvent.mouseDown(selectCategory) })
    const value = "Home";
    expect(await screen.findByTitle(value)).toBeInTheDocument();
    await act(async () => { fireEvent.click(screen.getByTitle(value)) });

    fireEvent.change(titleInput, { target: { value: "lorem ipsum" } })
    fireEvent.change(textInput, { target: { value: "lorem ipsum lorem ipsum" } })
    await act(async () => { fireEvent.click(submitBtn) })

    // const newNote = screen.get('note-1')
    // console.log('REQQQQ:', newNote);
    // expect(newNote).toBeInTheDocument()
    // expect(newNote).toHaveTextContent(/lorem/)
  })
});