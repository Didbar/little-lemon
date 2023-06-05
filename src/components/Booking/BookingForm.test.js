import { fireEvent, render, screen } from '@testing-library/react'
import BookingForm from './BookingForm'
import { AlertProvider } from '../../context/alertContext'

describe('Booking form', () => {
  const onSubmit = jest.fn()
  const onOpen = jest.fn()

  test('should correctly render all fields', async () => {
    render(
      <AlertProvider>
        <BookingForm />
      </AlertProvider>
    )

    const dateInput = screen.getByLabelText(/Date/)
    const timeSelect = screen.getByLabelText(/Time/)
    const numberOfGuestsInput = screen.getByLabelText(/Number of Guests/)
    const occasionSelect = screen.getByLabelText(/Occasion/)
    const email = screen.getByLabelText(/Email/)
    const submitButton = screen.getByRole('button')

    expect(dateInput).toBeInTheDocument()
    expect(dateInput).toHaveAttribute('type', 'date')

    expect(timeSelect).toBeInTheDocument()

    expect(email).toBeInTheDocument()

    expect(numberOfGuestsInput).toBeInTheDocument()
    expect(numberOfGuestsInput).toHaveValue('1')

    expect(occasionSelect).toBeInTheDocument()

    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toHaveAttribute('type', 'submit')
    expect(submitButton).toBeDisabled()
  })

  test(`submit button should be disable when date field's value is empty`, () => {
    render(
      <AlertProvider>
        <BookingForm />
      </AlertProvider>
    )

    const dateInput = screen.getByLabelText(/Pick a Date/)
    const submitButton = screen.getByRole('button')
    fireEvent.change(dateInput, { target: { value: '' } })
    fireEvent.blur(dateInput)
    expect(submitButton).toBeDisabled()
  })
})
