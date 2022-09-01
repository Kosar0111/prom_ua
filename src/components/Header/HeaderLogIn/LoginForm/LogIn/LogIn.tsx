import './Login.css'
import { createPortal } from 'react-dom'

interface ILogInProps {
  loginOpen: boolean
  setLoginOpen: any
}
const modalLogin: any = document.getElementById('modalLogin')
// eslint-disable-next-line react/prop-types
const LogIn: React.FC<ILogInProps> = ({ loginOpen, setLoginOpen }) => {
  if (loginOpen) {
    return createPortal(
      <>
        <div className="login" onClick={() => setLoginOpen(!loginOpen)}></div>
        <div className="login__modal" onClick={e => e.stopPropagation()}>
          <form className="login__modal-wraper">
            <div className="login__modal-close" onClick={() => setLoginOpen(!loginOpen)}>
              X
            </div>
            <h1 className="login__modal-h1">Увійти в кабінет</h1>
            <div className="login__modal-content">
              <label className="login__modal-login">Ваш e-mail</label>
              <input type="email" className="login__modal-input" />
              <label className="login__modal-pass">Введіть ваш пароль</label>
              <input type="password" className="login__modal-pass-input" />
              <button className="login__modal-btn" onClick={() => setLoginOpen(!loginOpen)}>
                Увійти
              </button>
            </div>
          </form>
        </div>
      </>,
      modalLogin
    )
  }
  return null
}

export default LogIn
