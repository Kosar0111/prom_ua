import { FC } from 'react'

import { useAppDispatch, useAppSelector } from '../../..//hooks/hooks'
import { increaseGood, decreaseGood } from '../../../store/basketSlice'
import './BasketItemCount.css'

type BasketItemCountProps = {
  id: string
  price: number
  count: number
}

export const BasketItemCount: FC<BasketItemCountProps> = ({ id, price, count }) => {
  const idUser = useAppSelector(state => state.auth.users.id)
  const dispatch = useAppDispatch()
  const increase = () => {
    dispatch(increaseGood({ id, idUser }))
  }
  const decrease = () => {
    dispatch(decreaseGood({ id, idUser }))
  }
  return (
    <div className="bill">
      <div className="bill-count">
        <span className={count > 0 ? 'count-minus' : 'count-minus-lock'} onClick={decrease}>
          -
        </span>
        <span>{`${count}`}</span>
        <span className="count-plus" onClick={increase}>
          +
        </span>
      </div>
      <div className="bill-price">{price * count} грн</div>
    </div>
  )
}
