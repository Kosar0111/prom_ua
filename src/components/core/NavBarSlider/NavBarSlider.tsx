import './NavBarSlider.css'
import React from 'react'

import { NavBar } from './NavBar/NavBar'
import { Slider } from './Slider/Slider'
import { CreateStore } from './CreateStore/CreateStore'

export const NavBarSlider: React.FC = () => {
  return (
    <div className="content__main">
      <NavBar />
      <Slider />
      <CreateStore />
    </div>
  )
}
