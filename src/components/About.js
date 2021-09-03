import React, {memo} from 'react'

function About(props) {
    console.warn("Inner Component", props.data)
    return (
        <div>
            <h1>About Component</h1>
        </div>
    )
}

export default memo(About)
