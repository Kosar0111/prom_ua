import { FC, useState } from 'react'

import './Shoes.css'
import { IGood } from '../../../model/interfaceUser'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { addGoods } from '../../../store/basketSlice'

type ShoesProps = IGood

export const Shoes: FC<ShoesProps> = good => {
  const { city, price, nameShop, img, title, id } = good
  const idUser = useAppSelector(state => state.auth.users.id)
  const [addBasket, setAddBasket] = useState(false)

  const dispatch = useAppDispatch()
  const orderGood = () => {
    dispatch(addGoods({ idUser, id }))

    setAddBasket(true)
  }
  return (
    <div className="shoes-container">
      <img className="shoes-img" src={img} alt="img" />
      <div className="shoes-title">{title}</div>
      <div className="shoes-city">{city}</div>
      <div className="shoes-price">{price} грн</div>
      {!addBasket ? (
        <button className="shoes-buy" onClick={orderGood}>
          Купити
        </button>
      ) : (
        <button className="shoes-buy-add">У кошику</button>
      )}
      <div className="space"></div>
      <div className="shoes-shop">{nameShop}</div>
    </div>
  )
}
