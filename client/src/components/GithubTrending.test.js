import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import GithubTrending from './GithubTrending';

test('renders GithubTrending component with title', async () => {
  render(<GithubTrending />);
  await waitFor(() => {
    const titleElement = screen.getByText(/Trending GitHub Repositories/i);
    expect(titleElement).toBeInTheDocument();
  });
});
