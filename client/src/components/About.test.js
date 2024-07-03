import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

test('renders About component with section title', () => {
  const { getByText } = render(<About />);
  const sectionTitle = getByText(/About Me/i);
  expect(sectionTitle).toBeInTheDocument();
});

test('renders About component with skills and expertise', () => {
  const { getByText } = render(<About />);
  const skillTitle = getByText(/Skills & Expertise/i);
  expect(skillTitle).toBeInTheDocument();
});

test('renders About component with recent projects', () => {
  const { getByText } = render(<About />);
  const projectsTitle = getByText(/Recent Projects/i);
  expect(projectsTitle).toBeInTheDocument();
});
