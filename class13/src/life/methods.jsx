import React from "react";
class Life extends React.Component{
    constructor(){
        super()
        // console.log("in side the constructor")
    }
    fetchData(){
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.error(err))
    }
    componentDidMount(){
        // console.log("this is inside the componentDidMount")
        this.fetchData()

    }

    render(){
        // console.log("log in side the render")
        
        return(
            <div>
                <h1>Life Component </h1>
                <button onClick={()=>alert('hello')} >click</button>
            </div>
          
            
        )
    }
}
export default Life