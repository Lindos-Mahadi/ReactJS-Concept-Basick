import React, { useState, useEffect } from 'react'

function Home() {
    const[count, setCount]=useState(0)
    useEffect(()=>{
        console.warn(count)
    // },[count==5])
    },[])
    return (
        <div>
            <h1>Hooks in functional Component...{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Update State</button>
        </div>
    )
}

export default Home
