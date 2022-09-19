import { FC } from 'react'

import './Shoes.css'
import { IGood } from '../../../model/interfaceUser'

type ShoesProps = IGood

export const Shoes: FC<ShoesProps> = good => {
  const { city, price, nameShop, img, title } = good
  return (
    <div className="shoes-container">
      <img className="shoes-img" src={img} alt="img" />
      <div>{title}</div>
      <div>{price}</div>
      <div>{city}</div>
      <div>{nameShop}</div>
    </div>
  )
}
