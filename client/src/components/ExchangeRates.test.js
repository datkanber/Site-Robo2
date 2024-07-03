import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import ExchangeRates from './ExchangeRates';

test('renders ExchangeRates component with title', async () => {
  await act(async () => {
    render(<ExchangeRates />);
  });

  await waitFor(() => {
    const titleElement = screen.getByText(/Daily Exchange Rates/i);
    expect(titleElement).toBeInTheDocument();
  }, { timeout: 10000 }); // Increase the Jest timeout for this test
}, 20000); // Increase the Jest timeout for this test to 20 seconds
