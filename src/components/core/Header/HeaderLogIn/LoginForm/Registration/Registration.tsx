import './Registration.css'
import { createPortal } from 'react-dom'
import { useFormik, FormikProps } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { validationSchema } from '../../../../../../helpers/validationRegistration'

import { registrUser } from '../../../../../../store/authSlice'

import { useAppDispatch, useAppSelector } from '../../../../../../hooks/hooks'
interface IRegistrationProps {
  registrationOpen: boolean
  setRegistrationOpen: (registrationOpen: boolean) => void
}

type FormModel = {
  name: string
  lastName: string
  email: string
  password: string
  phone: string
}

const modalRegistration: any = document.getElementById('modalRegistration')
// eslint-disable-next-line react/prop-types
const Registration: React.FC<IRegistrationProps> = ({ registrationOpen, setRegistrationOpen }) => {
  const notify = () => toast.success('You registered successfully!')

  const dispatch = useAppDispatch()
  const { register } = useAppSelector(state => state.auth)

  const onSubmit = (values: FormModel) => {
    dispatch(registrUser(values))
    formik.resetForm()
    setRegistrationOpen(!registrationOpen)
    notify()
  }

  const formik: FormikProps<FormModel> = useFormik<FormModel>({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      phone: ''
    },
    onSubmit,
    validationSchema
  })

  if (registrationOpen) {
    return createPortal(
      <>
        {register && <ToastContainer />}
        <div className="registration" onClick={() => setRegistrationOpen(!registrationOpen)}></div>
        <div className="registration__modal" onClick={e => e.stopPropagation()}>
          <form className="registration__modal-wraper" onSubmit={formik.handleSubmit}>
            <div
              className="registration__modal-close"
              onClick={() => setRegistrationOpen(!registrationOpen)}
            >
              X
            </div>
            <h1 className="registration__modal-h1">Створити профіль</h1>
            <div className="registration__modal-content">
              <label className="registration__modal-login">Вашe імя</label>
              <input
                type="text"
                className="registration__modal-input"
                placeholder="Вашe імя"
                name="name"
                onBlur={formik.handleBlur}
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name && <div className="error">{formik.errors.name}</div>}
              <label className="registration__modal-login">Вашe прізвище</label>
              <input
                type="text"
                className="registration__modal-input"
                placeholder="Вашe прізвище"
                name="lastName"
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
              {formik.errors.lastName && <div className="error">{formik.errors.lastName}</div>}
              <label className="registration__modal-login">Ваш e-mail</label>
              <input
                type="email"
                className="registration__modal-input"
                placeholder="Ваш email"
                name="email"
                onBlur={formik.handleBlur}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && <div className="error">{formik.errors.email}</div>}
              <label className="registration__modal-pass">Введіть ваш пароль</label>
              <input
                type="password"
                className="registration__modal-pass-input"
                placeholder="Введіть ваш пароль"
                name="password"
                onBlur={formik.handleBlur}
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password && <div className="error">{formik.errors.password}</div>}
              <label className="registration__modal-login">Ваш телефон</label>
              <input
                type="phone"
                className="registration__modal-input"
                placeholder="Ваш телефон"
                name="phone"
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              {formik.errors.phone && <div className="error">{formik.errors.phone}</div>}
              <button type="submit" className="registration__modal-btn" disabled={!formik.isValid}>
                Зареєструватися
              </button>
            </div>
          </form>
        </div>
      </>,
      modalRegistration
    )
  }
  return null
}
export { Registration }
