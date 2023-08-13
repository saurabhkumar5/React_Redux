import React, { useState } from 'react'

const UseStateArray = () => {

    const biodata = [
        {
            id:0,myname:'saurabh', age:23
        },
        {
            id:1,myname:'kumar', age:24
        },
        {
            id:0,myname:'saurabh', age:23
        },
        {
            id:1,myname:'kumar', age:24
        }
    ]

    const [myArray, setmyArray] = useState(biodata);

    const clearArray = ()=>{
        setmyArray([]);
    }

  return (
    <>
        {/* {biodata.map((value)=>{
            return <h1>name: {value.myname} && age: {value.age}</h1>
        })}
        <button onClick={clearArray}>clear</button> */}

        {myArray.map((value)=>{
            return <h1>name: {value.myname} && age: {value.age}</h1>
        })}
        <button onClick={clearArray}>clear</button>
    </>
  )
}

export default UseStateArray