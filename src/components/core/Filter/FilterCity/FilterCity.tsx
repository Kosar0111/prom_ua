import { FC, useState } from 'react'

import './FilterCity.css'
import { useAppSelector } from '../../../../hooks/hooks'

export const FilterCity: FC = () => {
  const goods = useAppSelector(state => state.goods.goods)
  const city = goods.map(el => el.city)
  const cityQni = Array.from(new Set(city))
  const [state, setState] = useState(0)

  const chooseCity = (city: string) => {
    setState(state)
    currentCity = cityQni.filter(el => el.toString() === city.toString())
    console.log(currentCity)
  }
  let currentCity = cityQni
  return (
    <div className="sort-city">
      <div
        className={state === 0 ? 'sort-city-el-active' : 'sort-city-el'}
        onClick={() => chooseCity('Все')}
      >
        Всі міста
      </div>
      {currentCity.map((el, i) => (
        <div
          className={state === i + 1 ? 'sort-city-el-active' : 'sort-city-el'}
          key={i}
          onClick={e => chooseCity(el)}
        >
          {el}
        </div>
      ))}
    </div>
  )
}
