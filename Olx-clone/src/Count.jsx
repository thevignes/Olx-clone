import React, { useState } from 'react'
import { useRef } from 'react'
const Count = () => {
const[change , SetchangeColor] = useState("")
        const inputRef = useRef()
    useRef(()=>{
        inputRef.current.color="red"
    })
const changeColor = ()=>{
SetchangeColor(inputRef)
}


  return (
    <div>
      <h1 ref={inputRef}>Vignesh</h1>
      <button onClick={changeColor}>click</button>
    </div>
  )
}

export default Count
