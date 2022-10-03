import { useState } from 'react'
import './HeaderSearch.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Select from 'react-select'

import { useAppSelector } from '../../../hooks/hooks'
import '../../../helpers/i18next'
import herb from '../../../assets/img/herb.jpeg'
import micro from '../../../assets/img/micro2.png'
import geo from '../../../assets/img/geo.png'
import basket from '../../../assets/img/basket.png'
import heart from '../../../assets/img/heart.png'
import { Basket } from '../Basket/Basket'

const options = [
  {
    label: 'Україна',
    value: 'urk'
  },
  {
    label: 'Київ',
    value: 'kyv'
  },
  {
    label: 'Харків',
    value: 'khr'
  },
  {
    label: 'Львів',
    value: 'lvv'
  },
  {
    label: 'Дніпро',
    value: 'dpr'
  },
  {
    label: 'Одеса',
    value: 'ods'
  }
]
export const HeaderSearch = () => {
  const { isAuthBool, register } = useAppSelector((state) => state.auth)
  const { items } = useAppSelector((state) => state.basket)
  const [basketOpen, setBasketOpen] = useState(false)
  const { t } = useTranslation()
  return (
    <div className="search__wrapper">
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
          <Select
            classNamePrefix="custom-select"
            className="search__country"
            options={options}
            defaultValue={options[0]}
            isSearchable={false}
          />
        </div>
        <div className="basket-all">
          <img src={heart} alt="heart" className="heart" />
          <img
            src={basket}
            alt="basket"
            className="basket"
            onClick={() => setBasketOpen(!basketOpen)}
          />
          {items.length > 0 && (isAuthBool || register) ? (
            <span className="count-basket">{items.length}</span>
          ) : (
            ''
          )}
        </div>
      </div>
      <Basket basketOpen={basketOpen} setBasketOpen={setBasketOpen} />
    </div>
  )
}
