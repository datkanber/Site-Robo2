import React from 'react';
import { render, screen } from '@testing-library/react';
import KaggleData from './KaggleData';

test('renders KaggleData component with title', () => {
  render(<KaggleData />);
  const titleElement = screen.getByText(/Kaggle/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders loading message initially', () => {
  render(<KaggleData />);
  const loadingElement = screen.getByText(/Loading Kaggle data.../i);
  expect(loadingElement).toBeInTheDocument();
});
