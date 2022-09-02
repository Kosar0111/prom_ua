import * as yup from 'yup'

export const validationSchema = yup.object({
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup
    .string()
    .min(3, 'Must be 3 characters at least')
    .max(20, 'Too long password')
    .required('Pasword is required field!')
})
