import { useEffect, useState } from "react"

function Update(){
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log('update' )
        return ()=>{
            console.log("clear")
        }
    },[])

    return(
        <>  
        <h1>Count : {count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
        </>
    )
}
export default Update