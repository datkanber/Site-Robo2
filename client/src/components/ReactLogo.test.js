import React from 'react';
import { render } from '@testing-library/react';
import ReactLogo from './ReactLogo';

test('renders ReactLogo component', () => {
  const { container } = render(<ReactLogo />);
  const spans = container.querySelectorAll('span');
  expect(spans.length).toBe(3);
});
