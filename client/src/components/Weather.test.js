import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Weather from './Weather';

test('renders Weather component with title', async () => {
  render(<Weather />);
  await waitFor(() => {
    const titleElement = screen.getByText(/Current Weather/i);
    expect(titleElement).toBeInTheDocument();
  });
});
