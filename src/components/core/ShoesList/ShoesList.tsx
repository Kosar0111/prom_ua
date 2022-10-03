import { FC, useEffect, useState } from 'react'

import { Shoes } from '../Shoes/Shoes'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { getGoods } from '../../../store/goodsSlice'
import './ShoesList.css'
import { FilterCity } from '../Filter/FilterCity/FilterCity'
import { FilterCompany } from '../Filter/FilterCompany/FilterCompany'
import { SortPrice } from '../Filter/SortPrice/SortPrice'

export const ShoesList: FC = () => {
  const goods = useAppSelector((state) => state.goods.goods)
  const [sortPrice, setSortPrice] = useState('')
  const [goodsAll, setGoodsAll] = useState(goods)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getGoods())
  }, [dispatch])

  const chooseCity = (city: string) => {
    if (city === 'All') {
      setGoodsAll(goods)
    } else setGoodsAll(goods.filter((el) => el.city === city))
  }

  const chooseCompany = (company: string) => {
    if (company === 'All') {
      setGoodsAll(goods)
    } else setGoodsAll(goodsAll.filter((el) => el.nameShop === company))
  }

  const priceSort = (sort: string) => {
    setSortPrice(sort)
    setGoodsAll(
      goodsAll.slice().sort((a, b) => {
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
        <FilterCity chooseCity={chooseCity} goodsAll={goods} />
        <SortPrice sortPrice={sortPrice} priceSort={priceSort} />
        <FilterCompany chooseCompany={chooseCompany} goodsAll={goodsAll} />
      </div>
      <div className="shoes-list">
        {goodsAll.map((good) => (
          <Shoes key={good.id} {...good} />
        ))}
      </div>
    </div>
  )
}
