import React from 'react';
import { render, screen } from '@testing-library/react';
import LiveStream from './LiveStream';

test('renders LiveStream component with title', () => {
  render(<LiveStream />);
  const titleElement = screen.getByText(/LIVE News/i);
  expect(titleElement).toBeInTheDocument();
});
