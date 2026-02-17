import React from "react";

class Products extends React.Component{

    constructor(){
        super();
        this.state={
            products:[],
            categoryValue:"",
            filterData:[],
            componentUpdate:0,

        }
        this.abortController= new AbortController(true);
    }
     componentDidMount(){
        this.fetchProducts()
        
    }
    componentDidUpdate(prevProp,prevState){
        // console.log(this.state.filterData)
        // console.log(prevState.filterData)
        console.log("update")
    }
    fetchProducts(){    
        fetch('https://dummyjson.com/products',{signal:this.abortController.signal})
        .then(res=>res.json())
        .then(data=>this.setState({products:data.products,filterData:data.products}))
    }
    handleCategory(category){
      
        // this.setState({categoryValue:category})

       const filtered=this.state.products.filter((item)=>item.category === category)
        this.setState({categoryValue:category,filterData:filtered})
    }
    componentWillUnmount(){
        console.log("closed")
        // console.log(this.abortController.abort())//cancel api
    }

    render(){
        // console.log(this.state.filterData)//[]
        return(
            <>
               <div style={{display:"flex",justifyContent:"space-evenly",width:"500px"}}>
                <button className="btn" onClick={()=>this.handleCategory('beauty')}>beauty</button>
                <button className="btn" onClick={()=>this.handleCategory('furniture')}>furniture</button>
                <button className="btn" onClick={()=>this.handleCategory('groceries')}>groceries</button>
                <button className="btn" onClick={()=>this.handleCategory('fragrances')}>fragrances</button>
               </div>
                {
                    this.state.filterData.map((item,index)=>(
                        <div key={index}>
                            <h1>{item.id}</h1>
                            <h1>{item.title}</h1>
                            <h1>{item.category}</h1>
                        </div>
                    ))
                }
            </>
        )
    }
}
export default Products