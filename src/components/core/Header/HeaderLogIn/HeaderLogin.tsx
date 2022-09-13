import { useTranslation } from 'react-i18next'

import emoji from '../../../../assets/img/emoji.png'

import { useAppSelector } from '../../../../hooks/hooks'

import '../../../../helpers/i18next'
import UserCabinet from '../../UserCabinet/UserCabinet'

import { LoginForm } from './LoginForm/LoginForm'
import './HeaderLogin.css'

type changeLanguage = (lang: string) => void
export const HeaderLogin = () => {
  const { t, i18n } = useTranslation()
  const changeLanguage: changeLanguage = lang => {
    i18n.changeLanguage(lang)
  }

  const { isAuth, register } = useAppSelector(state => state.auth)
  return (
    <div className="header-login">
      <div className="language">
        <div className="ua" onClick={() => changeLanguage('ua')}>
          укр
        </div>
        |
        <div className="rus" onClick={() => changeLanguage('ru')}>
          рус
        </div>
      </div>
      <div className="help">
        <div className="help__emoji">
          <img src={emoji} alt="emoji" className="emoji" />
          <p className="launguage__text">{t('header-login.launguage__text_for_you')}</p>
          <p className="launguage__text">{t('header-login.launguage__text_help')}</p>
        </div>
        <div className="mobile">
          <p className="mobile__text">{t('header-login.mobile__text-add')}</p>
          <p className="mobile__text">{t('header-login.mobile__text')}</p>
        </div>
      </div>
      {isAuth || register ? <UserCabinet /> : <LoginForm />}
    </div>
  )
}
