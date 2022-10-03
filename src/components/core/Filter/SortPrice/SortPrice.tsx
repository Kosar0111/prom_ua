import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type SortPriceProp = {
  sortPrice: string
  priceSort: (e: string) => void
}

export const SortPrice: FC<SortPriceProp> = ({ sortPrice, priceSort }) => {
  const { t } = useTranslation()
  return (
    <div className="sort-price">
      Цена:
      <select value={sortPrice} onChange={(e) => priceSort(e.target.value)}>
        <option value="highest">{t('sortPrice.highest')}</option>
        <option value="lowest">{t('sortPrice.lowest')}</option>
      </select>
    </div>
  )
}
