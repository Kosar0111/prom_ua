import React from 'react'

import { logOut } from '../../../store/authSlice'

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import userCabinet from '../../../assets/img/user.png'
import './UserCabinet.css'

const UserCabinet: React.FC = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.auth.users)
  const out = () => {
    dispatch(logOut())
  }

  const { name, lastName, phone } = user

  return (
    <div className="user-about">
      <div className="name">{name}</div>
      <div className="last-name">{lastName}</div>
      <div className="phone">{phone}</div>
      <img src={userCabinet} alt="user" className="user-img" />
      <button className="btn-logout" onClick={out}>
        Logout
      </button>
    </div>
  )
}

export default UserCabinet
