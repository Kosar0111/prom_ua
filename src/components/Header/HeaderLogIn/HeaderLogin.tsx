import emoji from '../../../img/emoji.png'
import LoginForm from '../HeaderLogIn/LoginForm/LoginForm'
import './HeaderLogin.css'

const HeaderLogin = () => {
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
      <LoginForm />
    </div>
  )
}

export default HeaderLogin
