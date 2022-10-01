import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { logOut } from '../../../store/authSlice'
import userCabinet from '../../../assets/img/user.png'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'

import '../../../helpers/i18next'
import './UserCabinet.css'

const UserCabinet: React.FC = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.auth.users)
  const { isAuthBool, register } = useAppSelector(state => state.auth)

  const out = () => {
    dispatch(logOut())
  }
  const [active, setActive] = useState(false)

  return (
    <div className="user-about">
      <div
        className="user-about-cabinet"
        onMouseEnter={() => setActive(!active)}
        onMouseLeave={() => setActive(!active)}
      >
        {t('user-cabinet.user-about-cabinet')}
      </div>
      <div
        onMouseEnter={() => setActive(active)}
        onMouseLeave={() => setActive(!active)}
        className={active ? 'user-about-active' : 'user-about-hidden'}
      >
        {isAuthBool || register ? (
          <div className="user-about-name">
            {user.name} {user.lastName}
          </div>
        ) : (
          ''
        )}

        <Link
          to="/user-salesman-cabinet"
          className="user-about-salesman"
          onClick={() => setActive(!active)}
        >
          {t('user-cabinet.user-about-salesman')}
        </Link>
        <Link
          to="/user-buyer-cabinet"
          className="user-about-buyer"
          onClick={() => setActive(!active)}
        >
          {t('user-cabinet.user-about-buyer')}
        </Link>
        <button className="btn-logout" onClick={out}>
          {t('user-cabinet.btn-logout')}
        </button>
      </div>
      <img src={userCabinet} alt="user" className="user-img" />
    </div>
  )
}

export default UserCabinet
