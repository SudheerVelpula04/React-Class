import { useState,useMemo } from "react"

 function WithOutMemo(){
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    console.log("outside")
    // const doubled=useMemo(()=>{
    //      console.log('render')
    //     return count *2
       
    // },[count])
    // const doubled=()=>{
    //     console.log('render')
    //     return count*2
    // }
    return(
        <>
            {/* {console.log(doubled)} */}
            <p>Count: {count}</p>
            <p>Doubled : {doubled()}</p>
            <button onClick={()=>setCount(count+1)}>+</button>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
        </>
    )
 }
 export default WithOutMemo