import { act, cleanup, fireEvent, queryByAttribute, render, screen } from '@testing-library/react'
import React from 'react'
import { createStore } from 'redux'
import App from './App'
import AddNote from './components/AddNote';
import { reducers } from './store/reducers'
import { Provider } from 'react-redux';
import AllNotes from './components/AllNotes';

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

describe("App", () => {
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
  test('should render App component', async () => {
    renderWithRedux(<App />);
  })
  test('should add a new note', async () => {
    const { container, debug } = renderWithRedux(<App />);
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
    fireEvent.change(textInput, { target: { value: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum" } })
    await act(async () => { fireEvent.click(submitBtn) })

    const newNote = screen.getByTestId('newNote')
    // console.log('NEW NOTE:', newNote);
    // console.log('NEW NOTE INNER HTML:', newNote.innerHTML);
    expect(newNote).toBeInTheDocument()
    expect(newNote).toHaveTextContent(/lorem/)
  })
  test('should delete a note', async () => {
    const { container, debug } = renderWithRedux(<App />);
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
    fireEvent.change(textInput, { target: { value: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum" } })
    await act(async () => { fireEvent.click(submitBtn) })

    const newNote = screen.getByTestId('newNote')
    // console.log('NEW NOTE:', newNote);
    // console.log('NEW NOTE INNER HTML:', newNote.innerHTML);
    expect(newNote).toBeInTheDocument()
    expect(newNote).toHaveTextContent(/lorem/)

    const deleteBtn = screen.getByTestId('delete-btn')
    expect(deleteBtn).toBeInTheDocument()
    await act(async () => { fireEvent.click(deleteBtn) })

    expect(newNote).not.toBeInTheDocument()
  })

  describe('AddNote', () => {
    test('should render AddNote component', async () => {
      renderWithRedux(<AddNote />)
    })
  })

  describe('AllNotes', () => {
    test('should render AllNotes component', async () => {
      renderWithRedux(<AllNotes />)
    })
  })
})
