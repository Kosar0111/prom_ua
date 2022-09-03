import './HeaderSearch.css'
import herb from '../../../assets/img/herb.jpeg'
import micro from '../../../assets/img/micro2.png'
import geo from '../../../assets/img/geo.png'
import arrowDown from '../../../assets/img/arrow-down.png'
import basket from '../../../assets/img/basket.png'
import heart from '../../../assets/img/heart.png'

export const HeaderSearch = () => {
  return (
    <div className="search__wraper">
      <div className="search">
        <div className="search__logo">
          <img src={herb} alt="logo" className="logo" />
          <span className="search__logo-span">PROM</span>
        </div>
        <div className="search__input">
          <input type="text" name="search" placeholder=" Я шукаю" className="input__search" />
          <img src={micro} alt="voice" className="voice" />
          <button className="btn__search">Знайти</button>
        </div>
        <div className="search__region">
          <img src={geo} alt="search__region-map" className="search__region-map" />
          <span className="search__country">Україна</span>
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
