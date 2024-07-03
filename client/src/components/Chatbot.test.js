import React from 'react';
import { render, screen } from '@testing-library/react';
import Chatbot from './Chatbot';

test('renders Chatbot component with initial message', () => {
  render(<Chatbot />);
  const initialMessage = screen.getByText(/Hello! How can I assist you today?/i);
  expect(initialMessage).toBeInTheDocument();
});
