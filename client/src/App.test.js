import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { act } from 'react';

test('renders Home link', () => {
  act(() => {
    render(<App />);
  });
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
