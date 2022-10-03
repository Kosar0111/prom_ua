import { FC, useEffect } from 'react'

import './CategoryOfGoods.css'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { getGoods } from '../../../store/goodsSlice'
import { Shoes } from '../Shoes/Shoes'

export const CategoryOfGoods: FC = () => {
  const goods = useAppSelector((state) => state.goods.goods)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getGoods())
  }, [dispatch])
  return (
    <div className="goods">
      <div className="goods__list">
        {goods.map((good) => (
          <Shoes key={good.id} {...good} />
        ))}
      </div>
    </div>
  )
}
