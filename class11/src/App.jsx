import React from "react";
// what is mean by props ?
// where we use the props
// what is diff b/w props and state
// parent to child state ->data which manage component its self only
// grant parent ->parent ->child ->grand child
// props in class components
// general Props and Children Props
// data flow like parent to child
// list rendering by using props
// conditional Rendering class components
import Card from "./card";
import Card2 from "./card2";
import Data from "./data.json"
 class App extends React.Component{
  constructor(){
    super();
    this.state={
      
    }
  }

  render(){
    console.log(Data.quotes)
    return(
      <>
          <h1>APP</h1>
          {/* <Card username="Ramu" age="20" />
          <Card username="rajesh" age="20" />
          <Card username="llll" age="20" />
          <Card2>
            <p>username:Rahul</p>
            <p>age:20</p>
          </Card2> */}
          <Card list={Data.quotes}/>
      </>
    )
  }
}
export default App
