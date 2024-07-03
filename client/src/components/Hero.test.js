import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

test('renders Hero component with title', async () => {
  render(<Hero />);
  const titleElements = await screen.findAllByText(/Data Science/i);
  expect(titleElements.length).toBeGreaterThan(0);
  expect(titleElements[0]).toBeInTheDocument();
});
