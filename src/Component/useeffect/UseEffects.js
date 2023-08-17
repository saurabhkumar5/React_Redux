// import React, { useEffect, useState } from 'react'

// const UseEffects = () => {

//     const[count,setCount] = useState(0);

//     useEffect(()=>{
//         //console.log("use effect")
//         document.title = `Chats (${count})`
//     })

//      console.log("hello outside")

//   return (
//     <div>
//         <h1>{count}</h1>
//         <button className='btn' onClick={
//             ()=> setCount(count + 1)
//         }>click me</button>
//         hello use effect
//     </div>
//   )
// }


//esme jab refresh kar rahe h to bagal me zero bhi dikh rha h wo nhi dikhna chahiye

import React, { useEffect, useState } from 'react'

const UseEffects = () => {

    const[count,setCount] = useState(0);

    useEffect(()=>{
        if(count>= 1){
            document.title = `Chats (${count})`
        }else{
            document.title = `Chats `
        }
    },[count])

     console.log("hello outside")

  return (
    <div>
        <h1>{count}</h1>
        <button className='btn' onClick={
            ()=> setCount(count + 1)
        }>click me</button>
        hello use effect
    </div>
  )
}

export default UseEffects