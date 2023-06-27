import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import BookingPage from './BookingPage';
import AvaTimes from './Components/AvalTime';


test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
})

test('Renders the BookingForm text', () => {
  render(<BookingForm />);
  const textElement = screen.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat, risus quis feugiat fringilla, dolor dui vestibulum lorem, non posuere lectus sem id magna. Maecenas ut nulla quis ligula efficitur pretium eu elementum mi. Donec tempor eget felis et convallis. Aenean et scelerisque est. Aenean rhoncus felis non metus facilisis, at tincidunt orci faucibus. Integer hendrerit nec nisi quis aliquam. Integer rutrum, justo semper luctus auctor.");
  expect(textElement).toBeInTheDocument();
})

test('Render input Labeles', () => {
  render(<BookingPage />);
  const inputLabel = screen.getByText("Choose date")
  expect(inputLabel).toBeInTheDocument()
})

test('Render button text', () => {
  render(<BookingPage />);
  const buttonText = screen.getByDisplayValue("Make Your reservation")
  expect(buttonText).toBeInTheDocument()
})

test('Click booking button', () => {
  render(<BookingPage />);
  const buttonClick = screen.getByRole("button")
  fireEvent.click(buttonClick)
})

