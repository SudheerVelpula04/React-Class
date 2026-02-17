import React from "react";
class Btn extends React.Component{
    // in the class comp while asses the props we need to use the this key word
    // this.props
    // this.name
    // this.state
    message="class Component"
    render(){
        console.log(this.props.value)
        return(
            <>
                <h1>{this.message}</h1>
                <button>{this.props.value}</button>
                
            </>
        )
    }
}
export default Btn