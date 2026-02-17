// why react why not JS ?
// what is V-DOM ?
// what is babul and ESBUILD
// what is Component ?
// what is mean by JSX ?
// how the Html create in the react - javaScript object 
// what are the types of component - 2 types function and class
// import React from "react"
// class App extends React.Component{
//   render(){
//     return(
//       <>

//       </>
//     )
//   }
// }


import Btn from "./componets/btnclass.jsx"
import Btn2 from "./componets/btnfunction.jsx"
import Card from "./componets/card.jsx"
import Style from "./componets/style.jsx"
import "./componets/card.css"
import Count from "./counter.jsx"
function App(){
  return(
    <>
      {/* <Btn value="login"/> 
      <Btn2 value= "rigi"/>
      <Style/>
      <div className="container">
      <Card item="item - 1"/>
      <Card item="item - 2"/>
      <Card item="item - 3"/>
      <Card item="item - 4"/>
      <Card item="item - 5"/>
      <Card item="item - 6"/>
      <Card item="item - 7"/>
      <Card item="item - 8"/>
      </div> */}
      <Count/>
    </> 
  )
}

export default App