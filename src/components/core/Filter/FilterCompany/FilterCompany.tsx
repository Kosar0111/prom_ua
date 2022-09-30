import { FC } from 'react'

import { useAppSelector } from '../../../../hooks/hooks'

export const FilterCompany: FC = () => {
  const goods = useAppSelector(state => state.goods.goods)
  const company = goods.map(el => el.nameShop)
  const companyQni = Array.from(new Set(company))
  return (
    <div>
      <div className="sort-company">
        Компанії:
        <select>
          <option value="all">Всі</option>
          {companyQni.map((el, i) => (
            <option key={i} value={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
