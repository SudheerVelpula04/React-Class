// class components in react
/**
 class component is react component defined using the class in javascript ES6 
 that class extends the React.Component 
 it can use the state management , lifecycle methods and this 
  keyword to to manege the data behavior
  this{props,state,conText,}
  state management
  bind methods

  4 types of binds
  

   create the counter increment decrement and reset
   with using the css styles
   only use the class components
   then deploy the task and send in the group

  class state mang and lifecycle methods

 */

  import { Part1 } from "./class/part1";
  import React from "react";

  export default  class App extends React.Component{

    
    render(){
      return(
        <>
          {/* JSX javaScriptXML Jest like HTML COde */}
          <h1>Class Components</h1>
          <Part1/>
        </>
      )
    }
  }