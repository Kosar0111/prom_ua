import React from 'react'

type ICarouselControlsProps = {
  prev: () => void
  next: () => void
}
export const CarouselControls: React.FC<ICarouselControlsProps> = ({ prev, next }) => {
  return (
    <div>
      <div className="carousel-control left" onClick={prev}>
        Prev
      </div>
      <div className="carousel-control right" onClick={next}>
        Next
      </div>
    </div>
  )
}
