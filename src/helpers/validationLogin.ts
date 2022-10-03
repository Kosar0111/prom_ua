import * as yup from 'yup'

export const validationSchema = yup.object({
  email: yup.string().email('Email не корректный').required('Email обязательно'),
  password: yup
    .string()
    .min(6, 'Должноо быть как минимум 3 буквы')
    .max(20, 'Пароль слишком длинный')
    .required('Обязательное поле!')
})
