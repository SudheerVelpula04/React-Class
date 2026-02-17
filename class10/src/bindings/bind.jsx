
import React from "react";
/**
 events
 ------
 onClick
 onChange
 onSubmit
 how many types of binds in React class Component
 there are 4 types of Binds
 1.in side the constructor by using bind method (Method-1);
 2.element in side the event arrow function (Method-2)
 3.in side the class property arrow function M-Way (Method-3)
 4.element in side the event by using the bind method (Method-4)
 */
export class Bind extends React.Component{
        constructor(){
            super();
            this.state={
                greet:"Happy ShivaRathri",
                message:"hi how are you ?",
                name:"NBK",
                python:"Back End"

            },
            this.messageView2=this.messageView2.bind(this)
        }
        messageView1(){
            console.log(this)//undefined
            this.setState({greet:"15th  is a Holiday on Sunday"})
        }
           messageView2(){
            console.log(this)
            this.setState({greet:"15th  is a Holiday on Sunday"})
        }
        changeMessage(){
            this.setState({message:"i am Fine"})
        }
        changeName=()=>{
            this.setState({name:"Nandhamuri Bala Krishna"})
        }
        defPython(){
            this.setState({python:"it is a object oriented programming lang"})
        }
        render(){
            return(
                <>
                        <h1>Bindings</h1>
                        <h1>Greet : {this.state.greet}</h1>
                        <button onClick={this.messageView1}>Holiday1</button>
                        <button onClick={this.messageView2}>Holiday2</button>
                        <h1>message:{this.state.message}</h1>
                        <button onClick={()=>this.changeMessage()}>change Message</button>

                        <h1>name:{this.state.name}</h1>
                        <button onClick={this.changeName}>Full Form</button>

                        <h1>{this.state.python}</h1>
                        <button onClick={this.defPython.bind(this)}>definition</button>
                </>
            )
        }
}


export class ChangeValue extends React.Component{
    constructor(){
        super();
        this.state={
            name:""
        }
        // this.changeValue=this.changeValue.bind(this)   
    }

    changeValue=(e)=>{
        console.log(this)
        console.log(e.target.value)
        this.setState({name:e.target.value})
    }

    render(){
        return(
            <>
                <input type="text" onChange={this.changeValue}/>
                <h1>my name is {this.state.name} </h1>
            </>
        )
    }
}