import emoji from '../../../../assets/img/emoji.png'

import { useAppSelector } from '../../../../hooks/hooks'

import UserCabinet from '../../UserCabinet/UserCabinet'

import { LoginForm } from './LoginForm/LoginForm'
import './HeaderLogin.css'

export const HeaderLogin = () => {
  const { auth, register } = useAppSelector(state => state.auth)
  return (
    <div className="header-login">
      <div className="language">
        <div className="ua">укр</div>|<div className="rus">рус</div>{' '}
      </div>
      <div className="help">
        <div className="help__emoji">
          <img src={emoji} alt="emoji" className="emoji" />
          <p className="launguage__text">Спеціально для вас</p>
          <p className="launguage__text">Допомога</p>
        </div>
        <div className="mobile">
          <p className="mobile__text">Мобільний додаток</p>
          <p className="mobile__text"> Почати продавати на prom.ua</p>
        </div>
      </div>
      {auth || register ? <UserCabinet /> : <LoginForm />}
    </div>
  )
}
