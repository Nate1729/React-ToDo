import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { testRender, makeTestStore } from 'utils/testUtils';

import { ToDoElement } from 'components/ToDoElement';
import { remove } from 'components/ToDoList/slice';

describe('Render information', () => {
  test('render text and icon', () => {
    const store = makeTestStore(); 
    testRender(<ToDoElement taskId={1} taskText="Hello World" />, {store});
    
    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(screen.getByLabelText("delete-1")).toBeInTheDocument();
  });

  test('Delete button dispatches the correct action', () => {
    const store = makeTestStore();
    testRender(<ToDoElement taskId={10} taskText="Hello World" />, { store });

    const button = screen.getByLabelText("delete-10");
    userEvent.click(button);

    expect(store.dispatch).toHaveBeenCalledWith(remove("Hello World"));
  });
});
