import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { CabinetSalesManNavBar } from '../CabinetByer/CabinetSalesManNavBar/CabinetSalesManNavBar'

import './CabinetSalesMan.css'

export const CabinetSalesMan: FC = () => {
  return (
    <div className="cabinet-byer">
      <div className="cabinet-byer-wraper">
        <div className="cabinet-byer-navbar">
          <CabinetSalesManNavBar />
        </div>
        <div className="cabinet-byer-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
