import React, { useState } from 'react'
import About from './About'

function Home() {
    const[count, setCount]=useState(0)
    About(count)
    return (
        <div>
            <h1>Home Component</h1>
            <button className="btn btn-warning" onClick={()=>setCount(count+1)}>Hit</button>
        </div>
    )
}

export default Home
