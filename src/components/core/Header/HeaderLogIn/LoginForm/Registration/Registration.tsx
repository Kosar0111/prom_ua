import './Registration.css'
import { createPortal } from 'react-dom'
import { useFormik, FormikProps } from 'formik'
import { useTranslation } from 'react-i18next'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import '../../../../../../helpers/i18next'
import { validationSchema } from '../../../../../../helpers/validationRegistration'

import { registrUser } from '../../../../../../store/authSlice'

import { useAppDispatch, useAppSelector } from '../../../../../../hooks/hooks'
import load from '../../../../../../assets/img/loading.gif'
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
  const { t } = useTranslation()

  const dispatch = useAppDispatch()
  const { register, message, regError, loading } = useAppSelector(state => state.auth)

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
    document.body.style.overflow = 'hidden'
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
            <h1 className="registration__modal-h1">{t('registration.registration__modal-h1')}</h1>
            <div className="registration__modal-content">
              <label className="registration__modal-login">
                {t('registration.registration__modal-login')}
              </label>
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
              <label className="registration__modal-login">
                {t('registration.registration__modal-name')}
              </label>
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
              <label className="registration__modal-pass">
                {t('registration.registration__modal-pass')}
              </label>
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
                {t('registration.registration__modal-btn')}
              </button>
            </div>
          </form>
          {regError && (
            <h2 className="error-api">
              {t('registration.error-api')} {message}
            </h2>
          )}
          {loading && <img className="load" src={load} alt="loading" />}
          {register && notify()}
        </div>
      </>,
      modalRegistration
    )
  } else {
    document.body.style.overflow = 'scroll'
    return null
  }
}
export { Registration }
