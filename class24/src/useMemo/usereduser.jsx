import { useState } from "react"

function Counter(){
    const [count,setCount]=useState(0)
    return(
        <>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(0)}>reset</button>
        </>
    )
}
export default Counter