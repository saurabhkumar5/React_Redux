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
            id:2,myname:'saurabh', age:23
        },
        {
            id:3,myname:'kumar', age:24
        }
    ]

    const [myArray, setmyArray] = useState(biodata);

    const clearArray = ()=>{
        setmyArray([]);
    }
    const removeElem = (id)=>{
        const myNewArray = myArray.filter((curElem)=>{
            return curElem.id!==id;
        })
        setmyArray(myNewArray);
    }

  return (
    <>

        {myArray.map((value)=>{
            return (
            <h1>name: {value.myname} && age: {value.age}
            <button onClick={()=>removeElem(value.id)}>remove</button>
            </h1>
            
            );
        })}
        
        <button onClick={clearArray}>clear</button>
        
    </>
  )
}

export default UseStateArray