import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
  Textarea,
  VStack
} from '@chakra-ui/react'
import * as Yup from 'yup'
import useSubmit from '../../hooks/useSubmit'
import { useAlertContext } from '../../context/alertContext'

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit()
  const { onOpen } = useAlertContext()
  const currentDate = new Date().toISOString().split('T')[0]
  const availableTimes = ['14:00 PM', '14:30 PM', '15:30 PM', '16:00 PM', '16:30 PM']

  useEffect(() => {
    if (!isLoading && response) {
      onOpen(response.type, response.message)
      if (response.type === 'success') {
        formik.resetForm()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response, isLoading])

  const formik = useFormik({
    initialValues: {
      reservationDate: '',
      reservationTime: '',
      email: '',
      numberOfGuests: 1,
      occasion: 'birthday' | 'anniversary' | 'noSpecific',
      comment: ''
    },
    onSubmit: async (values) => {
      await submit('#submit', values)
    },
    validationSchema: Yup.object({
      reservationDate: Yup.date().required('Reservation date is required'),
      reservationTime: Yup.string().required('Reservation time is required'),
      numberOfGuests: Yup.number().moreThan(0).lessThan(6).required(),
      email: Yup.string().required('Required').email('Invalid email address'),
      comment: Yup.string().min(25)
    })
  })

  return (
    <VStack p={{ base: '5rem 0' }}>
      <Heading as='h2' id='reservation-form' color='#495e57'>
        Reserve a Table
      </Heading>
      <Box rounded='md' w='100%' display='flex' justifyContent='center'>
        <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
          <VStack spacing={4} w='100%'>
            <FormControl
              isInvalid={formik.errors.reservationDate && formik.touched.reservationDate}
              isRequired>
              <FormLabel htmlFor='reservationDate'>Pick a Date</FormLabel>
              <Input
                id='reservationDate'
                name='reservationDate'
                type='date'
                min={currentDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.reservationDate}
              />
              <FormErrorMessage>{formik.errors.reservationDate}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={formik.errors.reservationTime && formik.touched.reservationTime}
              isRequired>
              <FormLabel htmlFor='reservationTime'>Pick a Time</FormLabel>
              <Select
                id='reservationTime'
                name='reservationTime'
                placeholder='Please Select Time'
                onChange={formik.handleChange}
                value={formik.values.reservationTime}>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </Select>
              <FormErrorMessage>{formik.errors.reservationTime}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={formik.errors.numberOfGuests && formik.touched.numberOfGuests}
              isRequired>
              <FormLabel htmlFor='numberOfGuests'>Number of Guests</FormLabel>
              <NumberInput
                id='numberOfGuests'
                name='numberOfGuests'
                min={1}
                max={5}
                defaultValue={formik.values.numberOfGuests}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl
              isInvalid={formik.errors.email && formik.touched.email}
              isRequired>
              <FormLabel htmlFor='email'>Email Address</FormLabel>
              <Input
                id='email'
                name='email'
                type='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor='occasion'>Occasion</FormLabel>
              <Select
                id='occasion'
                name='occasion'
                onChange={formik.handleChange}
                value={formik.values.occasion}>
                <option value='noSpecific'>No Specific</option>
                <option value='birthday'>Birthday</option>
                <option value='anniversary'>Anniversary</option>
              </Select>
            </FormControl>
            <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
              <FormLabel htmlFor='comment'>Your message</FormLabel>

              <Textarea
                id='comment'
                name='comment'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.comment}
                height={250}
              />
              <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
            </FormControl>
            <Button
              isLoading={isLoading}
              isDisabled={!formik.values.email | !formik.values.reservationDate}
              type='submit'
              colorScheme='yellow'
              width='full'>
              <Text color='#495e57'>Reserve</Text>
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  )
}

export default LandingSection
