import React from 'react';
import { render, screen } from '@testing-library/react';
import Blog from './Blog';

test('renders Blog component with title', () => {
  render(<Blog />);
  const titleElement = screen.getByText(/Blog/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders a blog post with title', () => {
  render(<Blog />);
  const postTitle = screen.getByText(/Understanding the Random Forest Algorithm/i);
  expect(postTitle).toBeInTheDocument();
});
