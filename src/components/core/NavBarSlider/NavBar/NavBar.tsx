import './NavBar.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import '../../../..//helpers/i18next'
import arrowBar from '../../../../assets/img/arrow-bar.png'
import notebook from '../../../../assets/img/netbook.png'
import emoji from '../../../../assets/img/emoji.png'

export const NavBar: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className="navbar__all">
      <div className="navbar-link__blue">
        <NavLink to={'!#'}>Military</NavLink>
      </div>
      <div className="navbar-link__blue-emoji">
        <img src={emoji} alt="emoji" className="emoji" />
        <NavLink to={'!#'}>{t('navbar.emoji')}</NavLink>
      </div>
      <div className="navbar-link__blue-notebook">
        <img src={notebook} alt="notebook" className="notebook" />
        <NavLink to={'!#'}>{t('navbar.notebook')}</NavLink>
      </div>
      <div className="navbar-link__item">
        <NavLink to={'!#'}>{t('navbar.arrow__bar')}</NavLink>
        <img src={arrowBar} alt="arrow__bar" className="arrow__bar" />
      </div>
      <div className="navbar-link__item">
        <NavLink to={'!#'}>{t('navbar.shoes')}</NavLink>
        <img src={arrowBar} alt="arrow__bar" className="arrow__bar" />
      </div>
      <div className="navbar-link__item">
        <NavLink to={'!#'}>{t('navbar.technicka')}</NavLink>
        <img src={arrowBar} alt="arrow__bar" className="arrow__bar" />
      </div>
      <div className="navbar-link__item">
        <NavLink to={'!#'}>Авто, мото</NavLink>
        <img src={arrowBar} alt="arrow__bar" className="arrow__bar" />
      </div>
      <div className="navbar-link__item">
        <NavLink to={'!#'}>{t('navbar.accessories')}</NavLink>
        <img src={arrowBar} alt="arrow__bar" className="arrow__bar" />
      </div>
      <div className="navbar-link__item">
        <NavLink to={'!#'}>{t('navbar.sport')}</NavLink>
        <img src={arrowBar} alt="arrow__bar" className="arrow__bar" />
      </div>
      <div className="navbar-link__item">
        <NavLink to={'!#'}>{t('navbar.millitary')}</NavLink>
        <img src={arrowBar} alt="arrow__bar" className="arrow__bar" />
      </div>
      <div className="navbar-link__blue">
        <NavLink to={'!#'}>{t('navbar.goods')}</NavLink>
      </div>
      <div className="navbar-link__blue">
        <NavLink to={'!#'}>{t('navbar.service')}</NavLink>
      </div>
      <div className="navbar-link__blue">
        <NavLink to={'!#'}>{t('navbar.order')}</NavLink>
      </div>
    </div>
  )
}
