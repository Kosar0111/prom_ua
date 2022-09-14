import './Login.css'
import { createPortal } from 'react-dom'
import { useFormik, FormikProps } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import 'react-toastify/dist/ReactToastify.css'

import '../../../../../../helpers/i18next'
import { validationSchema } from '../../../../../../helpers/validationLogin'

import { logIn } from '../../../../../../store/authSlice'

import { useAppDispatch, useAppSelector } from '../../../../../../hooks/hooks'

import load from '../../../../../../assets/img/loading.gif'
interface ILogInProps {
  loginOpen: boolean
  setLoginOpen: (loginOpen: boolean) => void
}

type FormModel = {
  email: string
  password: string
}

const modalLogin: any = document.getElementById('modalLogin')

// eslint-disable-next-line react/prop-types
export const LogIn: React.FC<ILogInProps> = ({ loginOpen, setLoginOpen }) => {
  const { t } = useTranslation()
  const notify1 = () => toast('Your authorization successfully!')
  const dispatch = useAppDispatch()
  const { loading, authError, isAuth, message } = useAppSelector(state => state.auth)
  const onSubmit = (values: FormModel) => {
    dispatch(logIn(values))
    formik.resetForm()
    setLoginOpen(!loginOpen)
  }

  const formik: FormikProps<FormModel> = useFormik<FormModel>({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit,
    validationSchema
  })
  if (loginOpen) {
    document.body.style.overflow = 'hidden'
    return createPortal(
      <>
        <ToastContainer />
        <div className="login" onClick={() => setLoginOpen(!loginOpen)}></div>
        <div className="login__modal" onClick={e => e.stopPropagation()}>
          <form className="login__modal-wraper" onSubmit={formik.handleSubmit}>
            <div className="login__modal-close" onClick={() => setLoginOpen(!loginOpen)}>
              X
            </div>
            <h1 className="login__modal-h1">{t('login.ogin__modal-h1')}</h1>
            <div className="login__modal-content">
              <label className="login__modal-login">Ваш e-mail</label>
              <input
                type="email"
                className="login__modal-input"
                placeholder="Ваш email"
                name="email"
                onBlur={formik.handleBlur}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && <div className="error">{formik.errors.email}</div>}
              <label className="login__modal-pass">{t('login.login__modal-pass')}</label>
              <input
                type="password"
                className="login__modal-pass-input"
                placeholder="Введіть ваш пароль"
                name="password"
                onBlur={formik.handleBlur}
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password && <div className="error">{formik.errors.password}</div>}
              <button className="login__modal-btn" type="submit" disabled={!formik.isValid}>
                {t('login.login__modal-btn')}
              </button>
            </div>
          </form>
          {authError && (
            <h2 className="error-api">
              {t('registration.error-api')} {message}
            </h2>
          )}
          {loading && <img className="load" src={load} alt="loading" />}
          {isAuth && notify1()}
        </div>
      </>,
      modalLogin
    )
  } else {
    document.body.style.overflow = 'scroll'
    return null
  }
}
