import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ status: 200, data: [] })),
  post: jest.fn(() => Promise.resolve({ status: 200, data: {} })),
}));

test('renders the physiotherapy home page', () => {
  render(<App />);
  expect(screen.getAllByText(/every pain relieved/i).length).toBeGreaterThan(0);
});

test('renders the mobile drawer social links without Twitter', () => {
  render(<App />);

  expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
    'href',
    'https://www.facebook.com/share/1Hjyke8qp5/'
  );
  expect(screen.getByRole('link', { name: 'YouTube' })).toHaveAttribute(
    'href',
    'https://www.youtube.com/@kiranPT237'
  );
  expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute(
    'href',
    'https://www.instagram.com/dr_kiran_fatima'
  );
  expect(screen.queryByRole('link', { name: 'Twitter' })).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/kiran-fatima-kf30'
  );
});
