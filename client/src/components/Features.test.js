import React from 'react';
import { render, screen } from '@testing-library/react';
import Features from './Features';

test('renders Features component with title', () => {
  render(<Features />);
  const titleElement = screen.getByText(/Our Expertise/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders a feature item with title', () => {
  render(<Features />);
  const featureTitle = screen.getByText(/Data Science/i);
  expect(featureTitle).toBeInTheDocument();
});
