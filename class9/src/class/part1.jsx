
import React from "react";

export class Part1 extends React.Component{
    constructor(){
        super();
        this.state={
            message:"hello hai How are you ?",
            count:0,
            products:[{user:"rahul",age:30},{user:"rajesh",age:20}]
        }
    }
    changeMessage(){
        this.setState({message:"i am Fine"})
    }
    increment(){
        this.setState({count:this.state.count+1})
    }
    decrement(){
        // this.setState({count:this.state.count-1})

        if(this.state.count > 0){
            
            this.setState({count:this.state.count-1})
        }else{
            alert("your going to -ve values")
            console.log(this.state.count)
        }
        // this.setState({message:"will meet tomr"})
    }
    reset=()=>{
        this.setState({count:0})
    }
    // name="Rajesh"
    render(){
        // console.log(this.state.products)//

        return(
            <>
                <h1>Part - 1</h1>
                {/* <h1>hello {this.name}</h1> */}
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Change Message</button>

                <h1>{this.state.count}</h1>
                <button onClick={()=>this.increment()}>increment</button>
                <button onClick={()=>this.decrement()}>decrement</button>
                <button onClick={()=>this.reset()}>Reset</button>
                {
                    this.state.products.map((ele,index)=><h1 key={index}>{ele.user}</h1>)
                }
            </>
        )
    }
}