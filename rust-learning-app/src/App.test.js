import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/AnimatedBackground', () => () => <div data-testid="animated-background-mock" />);

test('renders the login button', () => {
  render(<App />);
  const loginButton = screen.getByTestId('login-toggle-button');
  expect(loginButton).toBeInTheDocument();
});
