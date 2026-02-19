import axios from "axios"
import { useEffect, useState } from "react"
import "./products.css"
import Loader from "react-js-loader";
function Products(){

    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)
    const [color,setColor]=useState("red")
    const [category,setCategory]=useState('');
    // const [filter,setFilter]=useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            setProducts(res.data)
            setLoading(false)
        })
        .catch(err=>{
            // console.log("error")
            
            setError(err)
            setLoading(false)
        })
      
        
    },[])
    
    if(loading){
        return <Loader type="box-rotate-x" bgColor={color} color={color} title={"Products Loading...."} size={100} />
    }
    if(error){
        return console.log(error)
    }
    const FilterData=category ===""? products : products.filter((item)=>item.category=== category)


    const handleCategory=(item)=>{
        // console.log(item)   
        setCategory(item)     
    }
    
    return(
        <>
            {/* {console.log(products)}/ */}
            <h1>Displaying the Products</h1>

             <button onClick={()=>handleCategory("men's clothing")}>men's clothing</button>
             <button onClick={()=>handleCategory("jewelery")}>jewelery</button>
             <button onClick={()=>handleCategory("electronics")}>electronics</button>
             <button onClick={()=>handleCategory("women's clothing")}>women's clothing</button>

            <div className="container">
                {
                FilterData.map((item,index)=>(
                    <div className="items" key={index}>
                        <h3>{item.title}</h3>
                        <img src={item.image} alt="" />
                        <p>Category:{item.category}</p>
                    </div>
                ))
                }
            </div>
        </>
    )
}
export default Products