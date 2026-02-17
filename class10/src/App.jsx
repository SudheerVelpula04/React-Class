
import React from "react";
import { Bind, ChangeValue } from "./bindings/bind";
import { Form } from "./bindings/form";

export default class App extends React.Component{
  render(){
    return(
      <>
        <h1>Class part-2 Bindings</h1>
        {/* <Bind/> */}
        {/* <ChangeValue/> */}
        <Form/>
      </>
    )
  }
}