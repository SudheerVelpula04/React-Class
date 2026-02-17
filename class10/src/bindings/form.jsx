import React from "react"

export class Form extends React.Component{
    constructor(){
        super();
            this.state={
                name:"",
                age:"",
                email:""
            }
        
    }
    handleName=(e)=>{
        this.setState({name:e.target.value})
    }
    handleAge=(e)=>{
        this.setState({age:e.target.value})
    }
    handleEmail=(e)=>{
        this.setState({email:e.target.value})
    }
    render(){
            return(
            <>
                <input type="text" placeholder="name" onChange={this.handleName}/>
                <input type="text" placeholder="age" onChange={this.handleAge}/>
                <input type="text" placeholder="email" onChange={this.handleEmail} />


                <p>Name:{this.state.name}</p>
                <p>Age:{this.state.age}</p>
                <p>Email:{this.state.email}</p>
            </>
        )
    }
}