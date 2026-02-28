import { useEffect, useMemo, useState } from "react"

function Api(){
    const [products,setProducts]=useState([])
    const [search,setSearch]=useState('')
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    console.log('outside the filter')
    const filteredProducts=useMemo(()=>{
        console.log("inside the filter")
        return products.filter((item,index)=>item.title.toLowerCase().includes(search.toLowerCase()))
    },[products,search])
    // console.log(filteredProducts())
    return(
        <>
            <div>
                <h1>Search Products</h1>
                <input type="text" placeholder="Search Products..."  value={search} onChange={(e)=>setSearch(e.target.value)} />
                {
                    filteredProducts.map((item)=>(
                        <>
                            <h1>{item.id} - {item.title}</h1>
                            <img src={item.image} style={{width:"200px"}} alt="" />
                        </>
                    ))
                }
            </div>
        </>
    )
}
export default Api