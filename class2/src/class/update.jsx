
import React, { Component } from "react";
export class Update extends Component{
        constructor(){
            super();
            this.state={
                message:"sudheer",
                product:[],
                count:0
            }
            console.log("in side the constructor")
        }
        message(){
            this.setState({message:this.state.message="welcome to Browser"})
        }
        fetchProducts(){
            fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then(data=>this.setState({product:data}))
            .catch(err=>console.log(err))
        }
      
        componentDidMount(){
            console.log("in side the ComponentDidMount")
            this.fetchProducts()
            setTimeout(()=>{
                this.message()
            },2000)
        }
       
          componentDidUpdate(){
            console.log("in the componentDidUpdate")
            console.log(`updated initial is ${this.state.count} in the count`)

        }
        
        increase=()=>{
            this.setState({count:this.state.count+1})
        }



        
    render(){
        console.log("in side the render")
        console.log(this.state.product)
        return(
            <>  
                
                <h1>Greeting:{this.state.message}</h1>

                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increase}>Increase</button>


                {this.state.product.length > 0?
                    this.state.product.map((value,index)=>(
                        <h1 key={index}>{value.title}</h1>
                    )) :<h1>loading......</h1>
                }

            </>
        )
    }
} 