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
