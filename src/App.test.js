import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import BookingPage from './Components/BookingPage';
import { BrowserRouter } from 'react-router-dom';
import Confirm from './Components/ConfirmedBooking';
import { ShallowRenderer } from 'react-dom/test-utils';

test('Renders the BookingPage heading', () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
})

test('Renders the BookingPage text', () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>);
  const textElement = screen.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat, risus quis feugiat fringilla, dolor dui vestibulum lorem, non posuere lectus sem id magna. Maecenas ut nulla quis ligula efficitur pretium eu elementum mi. Donec tempor eget felis et convallis. Aenean et scelerisque est. Aenean rhoncus felis non metus facilisis, at tincidunt orci faucibus. Integer hendrerit nec nisi quis aliquam. Integer rutrum, justo semper luctus auctor.");
  expect(textElement).toBeInTheDocument();
})

test('Render input Labeles', () => {
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>);
  const inputLabel = screen.getByText("Choose date")
  expect(inputLabel).toBeInTheDocument()
})

test('Render button text', () => {
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>);
  const buttonText = screen.getByDisplayValue("Make Your reservation")
  expect(buttonText).toBeInTheDocument()
})

// test('Click booking button', () => {
//   render(<BookingForm />);
//   const buttonClick = screen.getByRole("button")
//   fireEvent.click(buttonClick)
// })

describe ("Reservation form", () => {

  test("input correct name, 3 symb.", () => {
    render(
      <BrowserRouter>
        <BookingForm/>
      </BrowserRouter>);

    const nameInput = screen.getByLabelText("Enter your name");
    fireEvent.change(nameInput, {target: {value: "Ian"}})

    expect(nameInput.value).toBe("Ian")

  });

  test("input correct date, YYYY-MM-DD", () => {
    render(
      <BrowserRouter>
        <BookingForm/>
      </BrowserRouter>);

    const dateInput = screen.getByLabelText("Choose date");
    fireEvent.change(dateInput, {target: {value: "2023-07-28"}})

    expect(dateInput.value).toBe("2023-07-28")

  });

  test("input correct number >= 1 ", () => {
    render(
      <BrowserRouter>
        <BookingForm/>
      </BrowserRouter>);

    const numberInput = screen.getByLabelText("Number of guests");
    fireEvent.change(numberInput, {target: {value: "1"}})

    expect(numberInput.value).toBe("1")

  });

  // test("input correct time, 19:00", () => {
  //   render(
  //     <BrowserRouter>
  //       <BookingForm/>
  //     </BrowserRouter>);

  //   expect(screen.getByRole('option', { name: '19:00' }).selected).toBe(true);
  // });

  test("input incorrect number < 1 and submit", () => {
    const handleSubmit = jest.fn();
    render(
      <BrowserRouter>
        <BookingForm onSubmit={handleSubmit}/>
      </BrowserRouter>)

    const numberInput = screen.getByLabelText("Number of guests");
    fireEvent.change(numberInput, {target: {value: "-1"}})

    const nameInput = screen.getByLabelText("Enter your name");
    fireEvent.change(nameInput, {target: {value: "Ian"}})

    expect(numberInput.value).toBe("-1")
    expect(handleSubmit).not.toHaveBeenCalled()
  });

  // test("submitting form, 3 symb.", () => {
  //   const userData = {
  //     name: "Ian",
  //     date: "2023-07-28",
  //     time: "19:00",
  //     number: "2",
  //     occasion: "Dinner",
  //   }
  //   const onSubmitSpy = jest.fn();

  //   render(
  //     <BrowserRouter>
  //        <BookingForm userData={userData} onSubmit={onSubmitSpy}/>
  //     </BrowserRouter>);

  //     const submitButton = screen.getByText("Make Your reservation");
  //     fireEvent.click(submitButton);

  //   expect(onSubmitSpy).toHaveBeenLastCalledWith({
  //     name: userData.name,
  //     date: userData.date,
  //     time: userData.time,
  //     number: userData.number,
  //     occasion: userData.occasion,
  //   });

  // })

  test("confirmation message on screen", async () => {
    render(
      <BrowserRouter>
        <Confirm />
      </BrowserRouter>);
    const newScreen = await screen.findByText('You have successfully reserved a table!');

    expect(newScreen).toBeInTheDocument();
  })

  test("submitting empty fields", () => {
    const handleSubmit = jest.fn();
    render(
     <BrowserRouter>
        <BookingForm onSubmit={handleSubmit}/>
     </BrowserRouter>);

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled()
   })

})