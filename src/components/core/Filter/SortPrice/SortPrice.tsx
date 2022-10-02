import { FC } from 'react'

type SortPriceProp = {
  sortPrice: string
  priceSort: (e: string) => void
}

export const SortPrice: FC<SortPriceProp> = ({ sortPrice, priceSort }) => {
  return (
    <div className="sort-price">
      Цена:
      <select value={sortPrice} onChange={e => priceSort(e.target.value)}>
        <option value="highest">Від найдорожчих</option>
        <option value="lowest">Від найдешевших</option>
      </select>
    </div>
  )
}
