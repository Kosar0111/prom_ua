import './AboutUs.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const AboutUs: React.FC = () => {
  return (
    <div>
      <p className="buyer-title">Про нас</p>
      <div className="buyer-link">
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Про prom.ua</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Робота в prom.ua</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Довідка та FAQ</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Контактна інформація</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Захист легальності контенту</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Content legality protection</NavLink>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
