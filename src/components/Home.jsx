import React from 'react'
import About from './About';

function Home() {
    const element1 = <h1>Introducing JSX</h1>;
    const name = 'Josh Perez';
    const element2 = <h1>Hello, {name}</h1>;
    
    return (
        <div>
            <About text= "Functional About Component" />
        </div>
    )
}

export default Home
