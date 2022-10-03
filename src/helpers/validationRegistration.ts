import * as yup from 'yup'

export const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Должно быть минимум 3 буквы')
    .max(30, 'Слишком длинное имя')
    .required('Обязательное поле!'),
  lastName: yup
    .string()
    .min(3, 'Должно быть как минимум 3 буквы')
    .max(40, 'Фамилия слишком длинная')
    .required('Обязательное поле!'),
  email: yup.string().email('Email не корректный').required('Email обязательный'),
  password: yup
    .string()
    .min(6, 'Должно быть минимум 3 буквы')
    .max(20, 'Пароль слишком длинный')
    .required('Пароль обязательно!'),
  phone: yup.string().min(10, 'Должно быть минимум 10 цифр').required('Телефон обязательно!')
})
