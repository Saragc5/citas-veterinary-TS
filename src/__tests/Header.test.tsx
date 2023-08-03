import { Header } from '../Components/Header'
import { render, screen } from '@testing-library/react'

test("Header should render properly",() => {
  render(<Header />);

  const headerTitle = screen.getByText(/seguimiento de pacientes/i);
  const secondHeaderTitle = screen.getByText(/veterinaria/i);

  expect(headerTitle).toBeInTheDocument();
  expect(secondHeaderTitle).toBeInTheDocument();
} )

