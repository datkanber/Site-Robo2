import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SapNews from './SapNews';

test('renders SapNews component with title', async () => {
  render(<SapNews />);
  await waitFor(() => {
    const titleElement = screen.getByText(/Latest SAP News/i);
    expect(titleElement).toBeInTheDocument();
  });
});
