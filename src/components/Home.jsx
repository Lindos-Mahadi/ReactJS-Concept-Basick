import React, { useState } from 'react'
import About from './About'

function Home() {
    const[count, setCount]=useState(0)
    const[data, setData]=useState(0)
    return (
        <div>
            <h1>Memo with Functional Component -------{count}-------{data}</h1>
            <About data={data} />
            <button onClick={()=>setCount(count+1)}>Count</button>
            {/* <button onClick={()=>setData(data+1)}>data</button> */}
        </div>
    )
}

export default Home
