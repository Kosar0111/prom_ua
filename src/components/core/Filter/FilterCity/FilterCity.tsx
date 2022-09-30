import { FC, useState } from 'react'

import './FilterCity.css'
import { useAppSelector } from '../../../../hooks/hooks'

export const FilterCity: FC = () => {
  const goods = useAppSelector(state => state.goods.goods)
  const city = goods.map(el => el.city)
  const cityQni = Array.from(new Set(city))
  const [state, setstate] = useState(0)

  return (
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
  )
}
