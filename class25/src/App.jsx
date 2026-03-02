// import A from "./lazy/a"
// import B from "./lazy/b"
// import C from "./lazy/c"

import { lazy, Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"
import React from "react"
// import A from "./lazy/a"
// import B from "./lazy/b"
// import C from "./lazy/c"
// import { D } from "./lazy/d"
const A= lazy(()=>import('./lazy/a'))
const B=lazy(()=>import('./lazy/b'))
const C=lazy(()=>import('./lazy/c'))
const D=lazy(()=>import('./lazy/d').then(m=>({default:m.D})))
const DisplayApi=React.lazy(()=>import('./customHook/dispalyapi'))
// console.log(A)
function App(){
  return(
    <>
        <h1>App</h1>
        <ul>
          <li><Link to={'/'}>A</Link></li>
          <li><Link to={'/b'}>B</Link></li>
          <li><Link to={'/c'}>C</Link></li>
          <li><Link to={'/d'}>D</Link></li>
          <li><Link to={'/products'}>Products</Link></li>
        </ul>
<hr />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
          <Route path="/" element={<A/>}/>
          <Route path="/b" element={<B/>}/>
          <Route path="/c" element={<C/>}/>
          <Route path="/d" element={<D/>}/>
          <Route path="/products" element={<DisplayApi/>}/>
        </Routes>
        </Suspense>
    </>
  )
}
export default App