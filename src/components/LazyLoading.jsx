// import React, {Suspense, lazy, Component} from 'react'
// // import Home from './Home'
// import About from './About'

// const Home = lazy(()=>import('./Home'))

// export default class LazyLoading extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>I am Lazy Loading class Component</h1>
//                 <Suspense fallback={<div>Please wait</div>}>
//                     <Home />
//                 </Suspense>
//                 {/* <About /> */}
//             </div>
//         )
//     }
// }

import React, {Suspense, lazy, Component} from 'react'
// import Home from './Home'
import About from './About'

const Home = lazy(()=>import('./Home'))

function LazyLoading() {
    return (
        <div>
            <h1>I am Lazy Loading in Functional & Class Compoent</h1>
               <Suspense fallback={<div>Please wait for Hoome....</div>}>
                   <Home />
              </Suspense>
               <Suspense fallback={<div>Please wait for About...</div>}>
                   <About />
              </Suspense>
            
        </div>
    )
}

export default LazyLoading

