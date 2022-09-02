import React from 'react'
import './CarouselItem.css'

type CarouselItemProps = {
  slide: string
  stopSlide: () => void
  startSlide: () => void
}
export const CarouselItem: React.FC<CarouselItemProps> = ({ slide, stopSlide, startSlide }) => {
  return (
    <div className="carousel-item" onMouseEnter={stopSlide} onMouseOut={startSlide}>
      <img src={slide} alt="slide" className="slide" />
    </div>
  )
}
