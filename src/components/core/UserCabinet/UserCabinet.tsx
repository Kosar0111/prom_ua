import React from 'react'

import { useAppSelector } from '../../../hooks/hooks'
import userCabinet from '../../../assets/img/user.png'
import './UserCabinet.css'

const UserCabinet: React.FC = () => {
  const user = useAppSelector(state => state.auth.users)
  //const { name, lastName, pohne } = { ...user }
  console.log(user)

  return (
    <div>
      <img src={userCabinet} alt="user" className="user-cabinet" />
    </div>
  )
}

export default UserCabinet
