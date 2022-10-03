import './Slider.css'
import React from 'react'

import { Carousel } from './carousel/Carousel'
import { sliders } from './SliderData'

export const Slider: React.FC = () => {
  return (
    <div className="slider-container">
      <Carousel sliders={sliders} />
    </div>
  )
}
