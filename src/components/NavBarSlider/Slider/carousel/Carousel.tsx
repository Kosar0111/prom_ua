import React, { useState, useEffect, useRef } from 'react'

import CarouselItem from './CarouselItem'
import CarouselControls from './CarouselControls'
import CarouselIndicators from './CarouselIndicators'
import './Carousel.css'

type CauroselPrors = {
  sliders: string[]
}
const Carousel: React.FC<CauroselPrors> = ({ sliders }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideInterval: any = useRef()

  const prev = () => {
    startSlideTimer()
    const index: number = currentSlide > 0 ? currentSlide - 1 : sliders.length - 1
    setCurrentSlide(index)
  }
  const next = () => {
    startSlideTimer()
    const index = currentSlide < sliders.length - 1 ? currentSlide + 1 : 0
    setCurrentSlide(index)
  }

  const switchIndex = (index: number) => {
    startSlideTimer()
    setCurrentSlide(index)
  }

  const startSlideTimer = () => {
    stopSlideTimer()
    slideInterval.current = setInterval(() => {
      setCurrentSlide(currentSlide => (currentSlide < sliders.length - 1 ? currentSlide + 1 : 0))
    }, 3000)
  }

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current)
    }
  }
  useEffect(() => {
    startSlideTimer()

    return () => stopSlideTimer()
  }, [])

  return (
    <div className="corusel">
      <div className="corusel-inner" style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
        {sliders.map((slide, index) => (
          <CarouselItem
            slide={slide}
            key={index}
            stopSlide={stopSlideTimer}
            startSlide={startSlideTimer}
          />
        ))}
      </div>
      <CarouselIndicators sliders={sliders} currentIndex={currentSlide} switchIndex={switchIndex} />
      <CarouselControls prev={prev} next={next} />
    </div>
  )
}
export default Carousel
