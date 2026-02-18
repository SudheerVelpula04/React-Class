import { useEffect, useState } from "react"

import axios from "axios"

function WithApi(){
    const [category,setCategory]=useState("")
    const [products,setProducts]=useState([])
    useEffect(()=>{
        // fetch('https://fakestoreapi.com/products')
        // .then(res=>res.json())
        // .then(data=>setProducts(data))

        axios.get('https://fakestoreapi.com/products')
            .then(res=>setProducts(res.data))
            .catch(err=>console.error(err))
    },[])
    // console.log(products)//[]

    const handleCategory=(data)=>{
        // console.log(data)
        setCategory(data)
    }
    return(
        <>


            <button onClick={()=>handleCategory("milk")}>Click</button>
            {console.log(category)}
            {
                    products.map((item,index)=>(
                            
                            <div key={index}>
                                <h1>{index} Title:{item.title}</h1>
                                {/* <h1>{index}</h1>
                                <h1>{item.title}</h1> */}
                            </div>
                    ))
            }
        </>
    )
}
export default WithApi