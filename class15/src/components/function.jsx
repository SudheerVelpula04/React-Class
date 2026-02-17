import { useState } from "react"
function One(){
    const [count,setCount]=useState(0)//[]//{}//""
    const [text,setText]=useState("")
    const [data,setData]=useState([])
    const [isLogin,setIsLogin]=useState(true)
    // const increment=()=>{
    //     setCount(count+1)
    // }
    const handleClick=()=>{
        alert("Hello")
    }
    const HandleMessage=(message)=>{
            // alert("message"+message)
            alert(`Message : ${message}`)
    }
    return(
        <>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={handleClick}>click</button>
        <button onClick={()=>HandleMessage("bye See you tommor")}>Message</button>
        </>
    )
}
export default One