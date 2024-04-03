import React, { useState } from 'react'

function Images({orignalImg, }) {
    const [isHover, setIsHover] = useState(false);
    const MouseHoverHandle = () => {
        setIsHover(true)
    }
    const MouseLeaveHandle = () => {
        setIsHover(false)
    }
  return (
    <>
        <img src={isHover ? "" : ""} alt="" onMouseEnter={MouseHoverHandle} onMouseLeave={MouseLeaveHandle} />
    </>
  )
}

export default Images
