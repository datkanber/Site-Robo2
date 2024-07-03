import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';

// Mock the play and pause methods of the HTMLMediaElement
beforeAll(() => {
  Object.defineProperty(HTMLMediaElement.prototype, 'play', {
    configurable: true,
    value: jest.fn()
  });
  Object.defineProperty(HTMLMediaElement.prototype, 'pause', {
    configurable: true,
    value: jest.fn()
  });
});

describe('Navbar Component', () => {
  test('renders Navbar component', () => {
    render(<Navbar />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });

  test('toggles menu on click', () => {
    render(<Navbar />);
    const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(toggleButton);
    const menu = screen.getByRole('list');
    expect(menu).toHaveClass('open');
  });

  test('toggles music on icon click', () => {
    render(<Navbar />);
    const musicIcon = screen.getByRole('button', { name: /toggle music/i });
    fireEvent.click(musicIcon);
    expect(musicIcon).toHaveClass('playing');
  });
});
