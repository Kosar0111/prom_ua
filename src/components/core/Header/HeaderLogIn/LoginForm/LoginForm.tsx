import React, { useState } from 'react'

import './LoginForm.css'
import { Registration } from './Registration/Registration'
import { LogIn } from './LogIn/LogIn'

export const LoginForm: React.FC = () => {
  const [loginOpen, setLoginOpen] = useState(false)
  const [registrationOpen, setRegistrationOpen] = useState(false)

  return (
    <>
      <div className="loginform__main">
        <div className="loginform__login" onClick={() => setLoginOpen(!loginOpen)}>
          Увійти
        </div>
        <div className="pipe">|</div>
        <div
          className="loginform__registration"
          onClick={() => setRegistrationOpen(!registrationOpen)}
        >
          Зареєструватися
        </div>
      </div>
      <LogIn loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
      <Registration registrationOpen={registrationOpen} setRegistrationOpen={setRegistrationOpen} />
    </>
  )
}
