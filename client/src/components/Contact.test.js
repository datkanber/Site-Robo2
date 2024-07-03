import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders Contact component with title', () => {
  render(<Contact />);
  const titleElement = screen.getByText(/Contact Me/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders Contact form with input fields', () => {
  render(<Contact />);
  const nameInput = screen.getByLabelText(/Name:/i);
  const emailInput = screen.getByLabelText(/Email:/i);
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});
