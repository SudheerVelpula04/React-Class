import { useEffect, useState } from "react"

function Count(){

    const [count,setCount]=useState(0)

    // useEffect(()=>{
        
    // },[count])
    return(
        <>
            {console.log("updated")}
            <h1>Count : {count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
        </>
    )
}
export default Count