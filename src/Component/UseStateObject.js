import React from 'react'

const UseStateObject = () => {
 
    const [myObject, setMyObject] = React.useState({
        myName:"saurabh maurya", myAge:27, degree:"b.tech"
    })

    const changeObject = ()=>{
        setMyObject({...myObject, myAge:26})
    }

  return (
    <div>
        <h1>name: {myObject.myName} & age:{myObject.myAge} & Degree: {myObject.degree}</h1>
        <button onClick={changeObject}>Update</button>
    </div>
  )
}

export default UseStateObject