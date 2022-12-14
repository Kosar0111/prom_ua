import React from 'react'
import './Carousel.css'

type CarouselIndicatorsProps = {
  sliders: string[]
  currentIndex: number
  switchIndex: (index: number) => void
}
export const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({
  sliders,
  currentIndex,
  switchIndex
}) => {
  return (
    <div className="carousel-indicators">
      {sliders.map((_, index) => (
        <button
          className={`carousel-indicator-item${currentIndex === index ? 'active' : ''}`}
          key={index}
          onClick={() => switchIndex(index)}
        ></button>
      ))}
    </div>
  )
}
