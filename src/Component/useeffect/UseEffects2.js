//cleanup function

import React, { useEffect, useState } from 'react'

const UseEffects2 = () => {

  const [widthcount, setWidthCount] = useState(window.screen.width)

  const actualWidth = ()=>{
    console.log(window.innerWidth);
    setWidthCount(window.innerWidth)
  }


  useEffect(()=>{
    window.addEventListener("resize", actualWidth);

    return ()=>{
      window.removeEventListener("resize", actualWidth);
    }
  });

  return (
    <div>
      <p>The actual size of the window is:</p>
      <h1>{widthcount}</h1>
    </div>
  )
}

export default UseEffects2