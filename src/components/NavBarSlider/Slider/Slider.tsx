import './Slider.css'
import React from 'react'

import Carousel from './carousel/Carousel'
import { sliders } from './SliderData'

const Slider: React.FC = () => {
  return (
    <div className="slider-continer">
      <Carousel sliders={sliders} />
    </div>
  )
}

export default Slider
