// props parent comp to child comp
// 2 types of general and children props
// conditional render in react
// life cycle methods -> functional components easy->hooks 
import Home from "./components/home";
import PageNotFount from "./components/pageNotFound";
import React from "react";
class App extends React.Component{
  constructor(){
    super();
    this.state={
      isLOgin: false,
      message:"greeting",
      user:"13289323974",
    
    
    },
    this.style={color:this.state.isLOgin?"red":"yellow"}
  }
  render(){
  //  if(this.state.isLOgin){
  //     return <Home/>
  //  }else{
  //   return <PageNotFount/>
  //  }
  return(
    <>
      {/* {condition?true:false} */}
      {/* {this.state.isLOgin?<Home/>:<PageNotFount/>} */}
      {/* {
        this.state.isLOgin?"hello hai how are you ":this.state.message
      } */}
      {/* {this.state.user==="rahul" ? <Home/> :<PageNotFount/> } */}
      {/* {this.state.user && <p>simple</p>} */}
      <h1 style={this.style}>simple</h1>
      <Home/>
    </>
  )
  }
}
export default App