import React from 'react'
import BookingForm from './BookingForm'
import { ChakraProvider } from '@chakra-ui/react'
import { AlertProvider } from '../../context/alertContext'
import Alert from '../Alert'

const Reservation = () => {
  return (
    <ChakraProvider>
      <AlertProvider>
        <BookingForm />
        <Alert />
      </AlertProvider>
    </ChakraProvider>
  )
}

export default Reservation
