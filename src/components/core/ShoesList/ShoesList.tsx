import { FC, useEffect, useState } from 'react'

import { Shoes } from '../Shoes/Shoes'

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { getGoods } from '../../../store/goodsSlice'
import './ShoesList.css'

import { FilterCity } from '../Filter/FilterCity/FilterCity'
import { FilterCompany } from '../Filter/FilterCompany/FilterCompany'
import { SortPrice } from '../Filter/SortPrice/SortPrice'

export const ShoesList: FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getGoods())
  }, [dispatch])
  const goods = useAppSelector(state => state.goods.goods)
  const [goodsAll, SetGoodsAll] = useState(goods)
  console.log(goods, goodsAll)

  // const [sortCity, setSortCity] = useState('')
  // const [sortCompany, setSortCompany] = useState('')
  const [sortPrice, setSortPrice] = useState('')
  const priceSort = (sort: string) => {
    setSortPrice(sort)
    SetGoodsAll(
      goods.slice().sort((a, b) => {
        return sort === 'lowest'
          ? a.price > b.price
            ? 1
            : -1
          : sort === 'highest'
          ? a.price < b.price
            ? 1
            : -1
          : a.id > b.id
          ? 1
          : -1
      })
    )
  }

  return (
    <div className="shoes-wrapper">
      <div className="filter-wrapper">
        <FilterCity />
        <SortPrice sortPrice={sortPrice} priceSort={priceSort} />
        <FilterCompany />
      </div>
      <div className="shoes-list">
        {goods.map(good => (
          <Shoes key={good.id} {...good} />
        ))}
      </div>
    </div>
  )
}
