import React from 'react'

function Home() {
    const element1 = <h1>Introducing JSX</h1>;
    const name = 'Josh Perez';
    const element2 = <h1>Hello, {name}</h1>;
    
    return (
        <div>
            {element1}
            {element2}
        </div>
    )
}

export default Home
