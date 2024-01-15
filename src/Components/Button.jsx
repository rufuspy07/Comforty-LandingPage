import React from 'react'

const Button = ({children,h,w,styles}) => {
  return (
    <div className={`bg-white rounded-md cursor-pointer mx-2 h-${h} w-${w} flex justify-center items-center ${styles}`}>
      {children}
    </div>
  )
}

export default Button
