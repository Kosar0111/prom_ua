import './Registration.css'
import { createPortal } from 'react-dom'

/*import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { register, reset } from '../../../../../auth/authSlice'*/

type RegistrationProps = {
  registrationOpen: boolean
  setRegistrationOpen: (registrationOpen: boolean) => void
}

const modalRegistration: any = document.getElementById('modalRegistration')
const Registration: React.FC<RegistrationProps> = (registrationOpen, setRegistrationOpen) => {
  if (!registrationOpen) {
    return createPortal(
      <>
        <div className="registration" onClick={() => setRegistrationOpen(!registrationOpen)}></div>
        <div className="registration__modal" onClick={e => e.stopPropagation()}>
          <form className="registration__modal-wraper">
            <div
              className="registration__modal-close"
              onClick={() => setRegistrationOpen(!registrationOpen)}
            >
              X
            </div>
            <h1 className="registration__modal-h1">Створити профіль</h1>
            <div className="registration__modal-content">
              <label className="registration__modal-login">Вашe імя</label>
              <input type="text" className="registration__modal-input" />
              <label className="registration__modal-login">Вашe прізвище</label>
              <input type="text" className="registration__modal-input" />
              <label className="registration__modal-login">Ваш e-mail</label>
              <input type="email" className="registration__modal-input" />
              <label className="registration__modal-pass">Введіть ваш пароль</label>
              <input type="password" className="registration__modal-pass-input" />
              <label className="registration__modal-login">Ваш телефон</label>
              <input type="phone" className="registration__modal-input" />
              <button
                className="registration__modal-btn"
                onClick={() => setRegistrationOpen(!registrationOpen)}
              >
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

export default Registration
