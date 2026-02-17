import React from "react";
import Image from "./component/image";
import Btn from "./component/button";
class App extends React.Component{
  render(){
    return(
      <>
        <div className="main-container">
          <Image/>
          <Btn/>
        </div>
      </>
    )
  }
}
export default App