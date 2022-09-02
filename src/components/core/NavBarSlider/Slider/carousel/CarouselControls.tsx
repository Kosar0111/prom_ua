import React from 'react'

type ICarouselControlsProps = {
  prev: () => void
  next: () => void
}
export const CarouselControls: React.FC<ICarouselControlsProps> = ({ prev, next }) => {
  return (
    <div>
      <div className="caurosel-control left" onClick={prev}>
        Prev
      </div>
      <div className="caurosel-control right" onClick={next}>
        Next
      </div>
    </div>
  )
}
