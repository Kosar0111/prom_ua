import './CreateStore.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const CreateStore: React.FC = () => {
  return (
    <div className="create__store">
      <div className="create__store-text">
        Продавати по всій <br />
        Україні
      </div>
      <NavLink to="!#" className="create__store-btn">
        Створити магазин
      </NavLink>
    </div>
  )
}

export default CreateStore
