import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders greeting text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hi/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders feature branch update', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/feature branch update/i);
  expect(linkElement).toBeInTheDocument();
});
