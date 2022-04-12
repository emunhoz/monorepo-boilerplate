import App from './App';
import { render, screen } from './configs/test-utils';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders button to get data', () => {
  render(<App />);
  const button = screen.getByText(/get some data/i);
  expect(button).toBeDefined();
});
