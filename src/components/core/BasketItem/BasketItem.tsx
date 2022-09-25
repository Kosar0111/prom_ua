import { FC } from 'react'

import { BasketItemCount } from '../BasketItemCount/BasketItemCount'
import { useAppDispatch } from '../../..//hooks/hooks'
import './BasketItem.css'
import { IGood } from '../../../model/interfaceUser'
import bucet from '../../../assets/img/bucet.png'
import { removeProduct } from '../../../store/basketSlice'

type BasketItemProp = IGood

export const BasketItem: FC<BasketItemProp> = item => {
  const { id, price, img, title, nameShop, count } = item

  const dispatch = useAppDispatch()
  const deleteItem = () => {
    dispatch(removeProduct(id))
  }
  return (
    <div className="basket-item__wrapper">
      <div className="shop-name"> Продавець компания: {nameShop}</div>
      <div className="gap"></div>
      <div className="basket-item-img__wrapper">
        <img className="basket-item-img" src={img} alt="img" />
        <div className="basket-item-title">
          {title}
          <div className="basket-item-price">{price} грн / шт</div>
        </div>
        <img src={bucet} alt="vedro" className="vedro" onClick={deleteItem} />
      </div>
      <div className="gap"></div>
      <div className="basket-item__total">
        <BasketItemCount key={id} id={id} price={price} count={count} />
      </div>
    </div>
  )
}