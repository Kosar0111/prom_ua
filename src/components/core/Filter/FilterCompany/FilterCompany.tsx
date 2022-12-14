import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppSelector } from '../../../../hooks/hooks'
import { IGood } from '../../../../model/interfaceUser'

type FilterCompanyProp = {
  goodsAll: IGood[]
  chooseCompany: (e: string) => void
}

export const FilterCompany: FC<FilterCompanyProp> = ({ chooseCompany, goodsAll }) => {
  const { t } = useTranslation()
  const goods = useAppSelector((state) => state.goods.goods)
  const company = goods.map((el) => el.nameShop)
  const companyQni = Array.from(new Set(company))
  return (
    <div>
      <div className="sort-company">
        {t('sort-company.company')}
        <select onChange={(e) => chooseCompany(e.target.value)}>
          <option value="All" onChange={() => chooseCompany('All')}>
            {t('sort-company.all')}
          </option>
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
