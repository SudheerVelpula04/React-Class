import React from "react";
class Update extends React.Component{
    constructor(){
        super();
        this.state={
            count:0,//1
            seconds:0
        }
    }
    increment(){
        this.setState({count:this.state.count+1})
    }
    componentDidMount(){
        this.timer=setInterval(()=>{
            this.setState({seconds:this.state.seconds +1})
        },1000)
    }
   
    
    componentDidUpdate(prevProp,prevTimer){
        console.log(prevTimer.seconds)
        console.log("update")
        console.log(this.state.seconds)

    }
    componentWillUnmount(){
        console.log("componentWillUnmount cleared the component")
        clearInterval(this.timer)
    }
    render(){
        return(
            <>
                <h1>Count: {this.state.count}</h1>
                <h1>timer : {this.state.seconds}</h1>
                <button onClick={()=>this.increment()}>increment</button>
            </>
        )
    }
}
export default Update