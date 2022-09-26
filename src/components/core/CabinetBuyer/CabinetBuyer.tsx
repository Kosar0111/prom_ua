import { FC } from 'react'
import './CabinetBuyer.css'
import { Outlet } from 'react-router-dom'

import { CabinetBuyerNavBar } from './CabinetBuyerNavBar/CabinetBuyerNavBar'

export const CabinetBuyer: FC = () => {
  return (
    <div className="cabinet-buyer">
      <div className="cabinet-buyer-wrapper">
        <div className="cabinet-buyer-navbar">
          <CabinetBuyerNavBar />
        </div>
        <div className="cabinet-buyer-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
