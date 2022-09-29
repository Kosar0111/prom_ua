import { FC, useEffect, useState } from 'react'

import { Shoes } from '../Shoes/Shoes'

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { getGoods } from '../../../store/goodsSlice'
import './ShoesList.css'
import { Filter } from '../Filter/Filter'

export const ShoesList: FC = () => {
  const [sortCity, setSortCity] = useState('')
  const [sortPrice, setSortPrice] = useState('')
  const [sortCompany, setSortCompany] = useState('')
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getGoods())
  }, [dispatch])

  const goods = useAppSelector(state => state.goods.goods)

  return (
    <div className="shoes-wraper">
      <Filter
        sortCity={sortCity}
        sortPrice={sortPrice}
        sortCompany={sortCompany}
        setSortCity={setSortCity}
        setSortPrice={setSortPrice}
        setSortCompany={setSortCompany}
      />
      <div className="shoes-list">
        {goods.map(good => (
          <Shoes key={good.id} {...good} />
        ))}
      </div>
    </div>
  )
}
