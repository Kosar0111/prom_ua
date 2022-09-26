import { FC } from 'react'

import './Shoes.css'
import { IGood } from '../../../model/interfaceUser'
import { useAppDispatch } from '../../../hooks/hooks'
import { addProduct } from '../../../store/basketSlice'

type ShoesProps = IGood

export const Shoes: FC<ShoesProps> = good => {
  const { city, price, nameShop, img, title } = good
  const dispatch = useAppDispatch()
  const oderGood = () => {
    dispatch(addProduct(good))
  }
  return (
    <div className="shoes-container">
      <img className="shoes-img" src={img} alt="img" />
      <div className="shoes-title">{title}</div>
      <div className="shoes-city">{city}</div>
      <div className="shoes-price">{price} грн</div>
      <button className="shoes-buy" onClick={oderGood}>
        Купити
      </button>
      <div className="space"></div>
      <div className="shoes-shop">{nameShop}</div>
    </div>
  )
}
