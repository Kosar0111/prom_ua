import { FC } from 'react'

import './Shoes.css'
import { IGood } from '../../../model/interfaceUser'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { addGoods } from '../../../store/basketSlice'

type ShoesProps = IGood

export const Shoes: FC<ShoesProps> = good => {
  const { city, price, nameShop, img, title, id } = good
  const idUser = useAppSelector(state => state.auth.users.id)
  console.log(idUser)

  const dispatch = useAppDispatch()
  const orderGood = () => {
    dispatch(addGoods({ idUser, city, price, nameShop, img, id, title }))
  }
  return (
    <div className="shoes-container">
      <img className="shoes-img" src={img} alt="img" />
      <div className="shoes-title">{title}</div>
      <div className="shoes-city">{city}</div>
      <div className="shoes-price">{price} грн</div>
      <button className="shoes-buy" onClick={orderGood}>
        Купити
      </button>
      <div className="space"></div>
      <div className="shoes-shop">{nameShop}</div>
    </div>
  )
}
