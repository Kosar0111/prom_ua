import { FC, useState } from 'react'
import './Filter.css'

import { useAppSelector } from '../../../hooks/hooks'

type FilterProps = {
  sortCity: string
  sortPrice: string
  sortCompany: string
  setSortCity: (e: string) => void
  setSortPrice: (e: string) => void
  setSortCompany: (e: string) => void
}
export const Filter: FC<FilterProps> = ({
  sortCity,
  sortPrice,
  sortCompany,
  setSortCity,
  setSortPrice,
  setSortCompany
}) => {
  const goods = useAppSelector(state => state.goods.goods)
  const city = goods.map(el => el.city)
  const cityQni = Array.from(new Set(city))
  const [state, setstate] = useState(0)
  const company = goods.map(el => el.nameShop)
  const companyQni = Array.from(new Set(company))

  return (
    <div className="filter-wrapper">
      <div className="sort-city">
        <div
          className={state === 0 ? 'sort-city-el-active' : 'sort-city-el'}
          onClick={() => setstate(0)}
        >
          Всі міста
        </div>
        {[...cityQni].map((el, i) => (
          <div
            className={state === i + 1 ? 'sort-city-el-active' : 'sort-city-el'}
            key={i}
            onClick={() => setstate(i + 1)}
          >
            {el}
          </div>
        ))}
      </div>
      <div className="sort-price">
        Цена:
        <select value={sortPrice} onChange={e => setSortPrice(e.target.value)}>
          <option value="highest">Від найдорожчих</option>
          <option value="lowest">Від найдешевших</option>
        </select>
      </div>
      <div className="sort-company">
        Компанії:
        <select>
          <option value="all">Всі</option>
          {companyQni.map((el, i) => (
            <option key={i} value={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
