import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';

test('renders Projects component with title', () => {
  render(<Projects />);
  const titleElement = screen.getByText(/My Projects/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders a project item with title', () => {
  render(<Projects />);
  const projectTitle = screen.getByText(/IoT Smart Home System/i);
  expect(projectTitle).toBeInTheDocument();
});
