import { render, screen } from '@testing-library/react';

import { TopBar } from './index';

test('should render top bar text', () => {
  render(<TopBar />);

  const text = screen.getByText('What To Do Today');
  expect(text).toBeInTheDocument();
});
