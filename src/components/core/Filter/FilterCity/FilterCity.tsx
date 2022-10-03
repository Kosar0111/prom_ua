import { FC, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import './FilterCity.css'
import { IGood } from '../../../../model/interfaceUser'

type FilterCityProp = {
  goodsAll: IGood[]
  chooseCity: (e: string) => void
}

export const FilterCity: FC<FilterCityProp> = ({ goodsAll, chooseCity }) => {
  const { t } = useTranslation()
  const goods = goodsAll
  const city = goods.map((el) => el.city)
  const cityQni = Array.from(new Set(city))
  const [state, setState] = useState('')

  useEffect(() => {
    setState('All')
  }, [])

  return (
    <div className="sort-city">
      <div
        className={state === 'All' ? 'sort-city-el-active' : 'sort-city-el'}
        onClick={() => chooseCity('All')}
        onMouseEnter={() => setState('All')}
      >
        {t('sort-city.all')}
      </div>
      {cityQni.map((el, i) => (
        <div
          className={state === el ? 'sort-city-el-active' : 'sort-city-el'}
          key={i}
          onClick={() => chooseCity(el)}
          onMouseEnter={() => setState(el)}
        >
          {el}
        </div>
      ))}
    </div>
  )
}
