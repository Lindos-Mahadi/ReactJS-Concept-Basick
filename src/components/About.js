import { useEffect } from 'react'

function About(props) {
    useEffect(()=>{
        document.title=props + "hits on button"
    })
    return (
        <div>
            
        </div>
    )
}

export default About
