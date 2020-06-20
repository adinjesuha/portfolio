import React, { useState, useRef, useEffect } from "react"
import Image from '../image'

const Card = ({slide}) => (
  <Image imgName={slide} className="item-content"/>
)

// =========================
// Controls
// =========================

const Controls = ({
  showPrevious,
  showNext,
  handlePreviousClick,
  handleNextClick,
}) => (
  <span
    className="controls"
    data-show-previous={showPrevious}
    data-show-next={showNext}
  >
    <button onClick={handlePreviousClick} />
    <button onClick={handleNextClick} />
  </span>
)

// =========================
// Slider item
// =========================

const SliderEl = ({ slides, current }) => {
  const [elementWidth, setElementWidth] = useState(0)

  let refElem = useRef(0)

  useEffect(() => {
    setElementWidth(refElem.current.offsetWidth)
    function handleResize() {
      let elementWidth = refElem.current.offsetWidth
      setElementWidth(elementWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const wrapperTransform = {
    transform: `translate3d(-${elementWidth * current}px, 0px, 0px)`,
  }

  return (
    <div className="slider-wrapper" style={wrapperTransform}>
      {slides.map(slide => (
        <div className="slider-item" ref={refElem} key={slide.index}>
          <Card slide={slide} />
        </div>
      ))}
    </div>
  )
}

// =========================
// Slide Component
// =========================

const Slide = ({ slideData }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = slideData

  const handlePreviousClick = () => {
    const previous = currentSlide - 1

    setCurrentSlide(previous < 0 ? slides.length - 1 : previous)
  }

  const handleNextClick = () => {
    const next = currentSlide + 1
    setCurrentSlide(next === slides.length ? 0 : next)
  }

  const showPrevious = currentSlide !== 0
  const showNext = currentSlide !== slides.length - 1

  return (
    <div className="slider-component" data-current-index={currentSlide}>
      <Controls
        showPrevious={showPrevious}
        showNext={showNext}
        handleNextClick={handleNextClick}
        handlePreviousClick={handlePreviousClick}
      />
      <SliderEl slides={slides} current={currentSlide} />
    </div>
  )
}

export default Slide
