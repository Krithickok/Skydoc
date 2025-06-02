import App from './App';
import { screen, render } from '@testing-library/react';

test('should display the learn react link', () => {
  render(<App />);
  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
});
