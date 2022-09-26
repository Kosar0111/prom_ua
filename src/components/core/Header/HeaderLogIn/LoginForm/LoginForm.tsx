import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import '../../../../../helpers/i18next'
import './LoginForm.css'
import { Registration } from './Registration/Registration'
import { LogIn } from './LogIn/LogIn'

export const LoginForm: React.FC = () => {
  const { t } = useTranslation()
  const [loginOpen, setLoginOpen] = useState(false)
  const [registrationOpen, setRegistrationOpen] = useState(false)
  loginOpen || registrationOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'scroll')
  return (
    <>
      <div className="loginform__main">
        <div className="loginform__login" onClick={() => setLoginOpen(!loginOpen)}>
          {t('user-cabinet.loginform__login')}
        </div>
        <div className="pipe">|</div>
        <div
          className="loginform__registration"
          onClick={() => setRegistrationOpen(!registrationOpen)}
        >
          {t('user-cabinet.loginform__registration')}
        </div>
      </div>
      <LogIn loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
      <Registration registrationOpen={registrationOpen} setRegistrationOpen={setRegistrationOpen} />
    </>
  )
}
