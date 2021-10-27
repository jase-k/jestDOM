import { render, screen } from '@testing-library/react';
import App from './App';
import List from './List';

test('renders hello dojo react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Dojo/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Things I need to do react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Things I need to do/i);
  expect(linkElement).toBeInTheDocument();
});

test("Learn React in List", () =>{
  render(<List/>);
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument();
})