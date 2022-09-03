import './NavBar.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

import arrowBar from '../../../../assets/img/arrow-bar.png'
import notebook from '../../../../assets/img/netbook.png'
import emoji from '../../../../assets/img/emoji.png'

export const NavBar: React.FC = () => {
  return (
    <div className="navbar__all">
      <div className="navbar-link__blue">
        <NavLink to={'!#'}>Military</NavLink>
      </div>
      <div className="navbar-link__blue-emoji">
        <img src={emoji} alt="emoji" className="emoji" />
        <NavLink to={'!#'}>Пропозиція місяця</NavLink>
      </div>
      <div className="navbar-link__blue-notebook">
        <img src={notebook} alt="notebook" className="notebook" />
        <NavLink to={'!#'}>Шкільні товари на Промі</NavLink>
      </div>
      <div className="navbar-link__item">
        <NavLink to={'!#'}>Зараз купують</NavLink>
        <img src={arrowBar} alt="arrow__bar" className="arrow__bar" />
      </div>
      <div className="navbar-link__item">
        <NavLink to={'!#'}>Одяг взуття</NavLink>
        <img src={arrowBar} alt="arrow__bar" className="arrow__bar" />
      </div>
      <div className="navbar-link__item">
        <NavLink to={'!#'}>Техніка та електроніка</NavLink>
        <img src={arrowBar} alt="arrow__bar" className="arrow__bar" />
      </div>
      <div className="navbar-link__item">
        <NavLink to={'!#'}>Авто, мото</NavLink>
        <img src={arrowBar} alt="arrow__bar" className="arrow__bar" />
      </div>
      <div className="navbar-link__item">
        <NavLink to={'!#'}>Прикраси та аксесуари</NavLink>
        <img src={arrowBar} alt="arrow__bar" className="arrow__bar" />
      </div>
      <div className="navbar-link__item">
        <NavLink to={'!#'}>Спорт і відпочинок</NavLink>
        <img src={arrowBar} alt="arrow__bar" className="arrow__bar" />
      </div>
      <div className="navbar-link__item">
        <NavLink to={'!#'}>Воєнторг</NavLink>
        <img src={arrowBar} alt="arrow__bar" className="arrow__bar" />
      </div>
      <div className="navbar-link__blue">
        <NavLink to={'!#'}>Товари для бізнесу</NavLink>
      </div>
      <div className="navbar-link__blue">
        <NavLink to={'!#'}>Послуги</NavLink>
      </div>
      <div className="navbar-link__blue">
        <NavLink to={'!#'}>Замовити послугу</NavLink>
      </div>
    </div>
  )
}
