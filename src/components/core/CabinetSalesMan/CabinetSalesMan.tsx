import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { CabinetSalesManNavBar } from '../CabinetBuyer/CabinetSalesManNavBar/CabinetSalesManNavBar'

export const CabinetSalesMan: FC = () => {
  return (
    <div className="cabinet-buyer">
      <div className="cabinet-buyer-wrapper">
        <div className="cabinet-buyer-navbar">
          <CabinetSalesManNavBar />
        </div>
        <div className="cabinet-buyer-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
