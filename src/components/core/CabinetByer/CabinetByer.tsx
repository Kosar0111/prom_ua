import { FC } from 'react'
import './CabinetByer.css'
import { Outlet } from 'react-router-dom'

import { CabinetByerNavBar } from './CabinetByerNavBar/CabinetByerNavBar'

export const CabinetByer: FC = () => {
  return (
    <div className="cabinet-byer">
      <div className="cabinet-byer-wraper">
        <div className="cabinet-byer-navbar">
          <CabinetByerNavBar />
        </div>
        <div className="cabinet-byer-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
