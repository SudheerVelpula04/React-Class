// import { Route, Routes } from "react-router-dom"
// import Example from "./nav/Example"
// import Menu from "./nav/menu"
// import About from "./nav/about"
// import Products from "./nav/products"
// import Login from "./nav/Login"

import PassingData from "./contextapi/passingData"

function App(){
  return(
    <>
      {/* <Example/>
        <Routes>
          <Route path="/" element={<Menu/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      <h1>App</h1> */}
      <PassingData/>
    </>
  )
}
export default App