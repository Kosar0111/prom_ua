import { FC } from 'react'

export const SortPrice: FC = () => {
  //const [sortPrice, setSortPrice] = useState(0)
  return (
    <div className="sort-price">
      Цена:
      <select>
        <option value="highest">Від найдорожчих</option>
        <option value="lowest">Від найдешевших</option>
      </select>
    </div>
  )
}
