import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders game status', () => {
  const { getByText } = render(<App />);
  const statusElement = getByText(/next player: x/i);
  expect(statusElement).toBeInTheDocument();
});
