import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { logOut } from '../../../store/authSlice'
import userCabinet from '../../../assets/img/user.png'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'

import './UserCabinet.css'

const UserCabinet: React.FC = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.auth.users)
  const out = () => {
    dispatch(logOut())
  }
  const [active, setActive] = useState(false)

  const { name, lastName } = user

  return (
    <div className="user-about">
      <div
        className="user-about-cabinet"
        onMouseEnter={() => setActive(!active)}
        onMouseLeave={() => setActive(!active)}
      >
        Мій кабінет
      </div>
      <div
        onMouseEnter={() => setActive(active)}
        onMouseLeave={() => setActive(!active)}
        className={active ? 'user-about-active' : 'user-about-hidden'}
      >
        <div className="user-about-name">
          {name} {lastName}
        </div>
        <Link
          to="/user-salesman-cabinet"
          className="user-about-salesman"
          onClick={() => setActive(!active)}
        >
          Кабінет продавця
        </Link>
        <Link
          to="/user-byer-cabinet"
          className="user-about-byer"
          onClick={() => setActive(!active)}
        >
          Кабінет покупця
        </Link>
        <button className="btn-logout" onClick={out}>
          Вийти
        </button>
      </div>
      <img src={userCabinet} alt="user" className="user-img" />
    </div>
  )
}

export default UserCabinet
