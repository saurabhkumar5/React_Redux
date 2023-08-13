
import React, {useState} from 'react'

const ShortCircuitEvl = () => {
    // const [demo, setDemo] = useState("");
    const [demo, setDemo] = useState("sumit");

  return (
    <div>
        <h1>{demo || "saurabh"}</h1>
        <h1>{demo && "maurya"}</h1>
    </div>
  )
}

export default ShortCircuitEvl