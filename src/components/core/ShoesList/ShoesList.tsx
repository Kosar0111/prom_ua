import { FC, useEffect } from 'react'

import { Shoes } from '../Shoes/Shoes'

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { getGoods } from '../../../store/goodsSlice'
import './ShoesList.css'

export const ShoesList: FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getGoods())
  }, [dispatch])

  const goods = useAppSelector(state => state.goods.goods)

  return (
    <div className="shoes-wraper">
      <div className="shoes-list">
        {goods.map(good => (
          <Shoes key={good.id} {...good} />
        ))}
      </div>
    </div>
  )
}
