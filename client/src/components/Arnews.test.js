import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import Arnews from './Arnews'; // Ensure the component name here matches the actual component name

test('renders Arnews component with title', async () => {
  await act(async () => {
    render(<Arnews />); // Use the same component name as in the import statement
  });

  await waitFor(() => {
    const titleElement = screen.getByText(/Latest AI News/i); // Adjust the text to match your component
    expect(titleElement).toBeInTheDocument();
  }, { timeout: 15000 }); // Increase timeout to 15 seconds
}, 20000); // Increase Jest test timeout to 20 seconds
