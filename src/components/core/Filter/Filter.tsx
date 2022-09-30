import { FC } from 'react'
import './Filter.css'

import { FilterCity } from './FilterCity/FilterCity'
import { FilterCompany } from './FilterCompany/FilterCompany'
import { SortPrice } from './SortPrice/SortPrice'

export const Filter: FC = ({}) => {
  // const [sortCity, setSortCity] = useState('')
  // const [sortCompany, setSortCompany] = useState('')
  // const [sortPrice, setSortPrice] = useState(0)

  return (
    <div className="filter-wrapper">
      <FilterCity />
      <SortPrice />
      <FilterCompany />
    </div>
  )
}
