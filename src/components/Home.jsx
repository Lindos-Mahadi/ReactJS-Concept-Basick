import React, { Component } from 'react';

class Home extends Component {
    
    render() {
        if(true)
        {
            throw new Error('Custom Error')    
        }
        return(
            <div>
                <h1>React Error Boundary</h1>
            </div>
        )
    }
}


export default Home;