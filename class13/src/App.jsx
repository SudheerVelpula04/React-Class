// life cycle methods in class components
import Life from "./life/methods";
import React from "react";
import Update from "./life/update";
class App extends React.Component{
  constructor(){
    super();
    this.state={
      isTrue:true
    }
  }
  stop(){
    this.setState({isTrue:false})
  }
  start(){
    this.setState({isTrue:true})
  }
  render(){
    return(
      <>
        <h1>APP</h1>
        <Life/>

        {this.state.isTrue?<Update/>:<h1>Component Closed</h1>}
        <button onClick={()=>this.stop()}>stop</button>
        <button onClick={()=>this.start()}>Start</button>

      </>
    )
  }
}
export default App