import './HeaderSearch.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import '../../../helpers/i18next'
import herb from '../../../assets/img/herb.jpeg'
import micro from '../../../assets/img/micro2.png'
import geo from '../../../assets/img/geo.png'
import arrowDown from '../../../assets/img/arrow-down.png'
import basket from '../../../assets/img/basket.png'
import heart from '../../../assets/img/heart.png'

export const HeaderSearch = () => {
  const { t } = useTranslation()
  return (
    <div className="search__wraper">
      <div className="search">
        <Link to="/" className="search__logo">
          <img src={herb} alt="logo" className="logo" />
          <span className="search__logo-span">PROM</span>
        </Link>
        <div className="search__input">
          <input type="text" name="search" placeholder=" Я шукаю" className="input__search" />
          <img src={micro} alt="voice" className="voice" />
          <button className="btn__search">{t('header-search.search__input')}</button>
        </div>
        <div className="search__region">
          <img src={geo} alt="search__region-map" className="search__region-map" />
          <span className="search__country">{t('header-search.search__region')}</span>
          <img src={arrowDown} alt="search__region__arrow" className="arrow__down" />
        </div>
        <div className="basket-all">
          <img src={heart} alt="heart" className="heart" />
          <img src={basket} alt="basket" className="basket" />
        </div>
      </div>
    </div>
  )
}
