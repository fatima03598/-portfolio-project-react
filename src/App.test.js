import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders homepage', () => {
  const { getByText } = render(<App />);
  const Homepage = getByText(/Homepage/i);
  expect(Homepage).toBeInTheDocument();
});
