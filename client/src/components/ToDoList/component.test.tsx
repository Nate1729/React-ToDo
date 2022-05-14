import { screen } from '@testing-library/react';
import { testRender, makeTestStore } from 'utils/testUtils';

import { ToDoList } from 'components/ToDoList';

describe('State controls', () => {
  test('Rendered tasks match state', () => {
    const preloadedState = {
      list: {
        value: ['Cut the grass', 'eat food'],
      }
    };
    const store = makeTestStore({ preloadedState });
    testRender(<ToDoList />, { store });

    expect(screen.getByText("Cut the grass")).toBeInTheDocument();
    expect(screen.getByText("eat food")).toBeInTheDocument();
  });
});
