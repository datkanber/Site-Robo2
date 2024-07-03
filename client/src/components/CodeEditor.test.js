import React from 'react';
import { render, screen } from '@testing-library/react';
import CodeEditor from './CodeEditor';

test('renders CodeEditor component with title', () => {
  render(<CodeEditor />);
  const titleElement = screen.getByText(/Code Editor/i);
  expect(titleElement).toBeInTheDocument();
});
