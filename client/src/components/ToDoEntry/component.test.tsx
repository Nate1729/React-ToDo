// Testing imports
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {testRender, makeTestStore} from 'utils/testUtils';

// Actions and store
import { add } from 'components/ToDoList/slice';

// Components
import { ToDoEntry } from './index';

describe('Form rendering', () => {
  test('Submit button renders', () => {
    const store = makeTestStore();
    testRender(<ToDoEntry />, {store});

    expect(screen.getByText('Add item')).toBeInTheDocument();
  });

  test('Text area renders', () => {
    const store = makeTestStore();
    testRender(<ToDoEntry />, {store});

    expect(screen.getByPlaceholderText("Enter task here")).toBeInTheDocument();
  });
});


describe('Form validation', () => {
  test('Empty form renders error text', () => {
    const store = makeTestStore();
    testRender(<ToDoEntry />, {store});

    const button = screen.getByText("Add item");
    
    userEvent.click(button);

    expect(screen.getByText("Cannot add an empty task!")).toBeInTheDocument();
  });

  test('Valid input does not show error text', () => {
    const store = makeTestStore();
    testRender(<ToDoEntry />, {store});

    const input = screen.getByPlaceholderText("Enter task here");
    userEvent.type(input, "Hello There!");

    const button = screen.getByText("Add item");
    userEvent.click(button);
    
    expect(screen.queryByText("Cannot add an empty task!")).not.toBeInTheDocument();
  });

  test('Valid input dispatches action with correct payload', () => {
    const store = makeTestStore();
    testRender(<ToDoEntry />, {store});

    
    const text = "Hello There!";

    const input = screen.getByPlaceholderText("Enter task here");
    userEvent.type(input, text);

    const button = screen.getByText('Add item');
    userEvent.click(button);

    expect(store.dispatch).toHaveBeenCalledWith(add(text));
  });

  test('Invalid input does not dispatch action with correct payload', () => {
    const store = makeTestStore();
    testRender(<ToDoEntry />, { store });

    const button = screen.getByText("Add item");
    userEvent.click(button);

    expect(store.dispatch).not.toHaveBeenCalled();
  });

});
