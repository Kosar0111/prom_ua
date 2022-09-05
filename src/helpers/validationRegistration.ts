import * as yup from 'yup'

export const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Must be 3 characters at least')
    .max(30, 'Too long name')
    .required('Your name is reqield!'),
  lastName: yup
    .string()
    .min(3, 'Must be 3 characters at least')
    .max(40, 'Too long lastName')
    .required('Last name is required field!'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Must be 3 characters at least')
    .max(20, 'Too long password')
    .required('Pasword is required field!'),
  phone: yup.string().min(10, 'Must be 10 figers at least').required('Phone is required field!')
})
