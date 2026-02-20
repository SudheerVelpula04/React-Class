import { useEffect, useRef, useState } from "react"

function UseRef2(){
    const [count,setCount]=useState(0)
    const prevCount=useRef(0)
    const inputBox=useRef()
    const inputStore=useRef("")
    console.log("component render")
    useEffect(()=>{
        console.log(prevCount.current =count)
        console.log(inputBox.current.value)
    },[count])
    const handleChange=(text)=>{
        inputStore.current.innerText=text
        inputStore.current.style.backgroundColor="red"
        inputStore.current.style.color="blue"
    }
    return(
        <>
           <h1>Counter</h1>
            <h1>Counter: {count}</h1>
            <h3>prev Count:{prevCount.current}</h3>
            <input type="text" ref={inputBox}  placeholder="input" onChange={(e)=>handleChange(e.target.value)}/>
            <h1 ref={inputStore}>input giving value </h1>
            <button onClick={()=>setCount(count+1)}>increment</button>
        </>
    )
}

export function Input(){
    const inputRef=useRef(null)
    const inputH1=useRef("")
    const handleClick=()=>{
        inputRef.current.focus()
        inputH1.current.innerText="hello hai"
        inputH1.current.style.color="red"
    }
    return(
        <>
            <h1 ref={inputH1}></h1>
            {console.log(inputH1)}
            <input type="text" ref={inputRef}/>
            <button onClick={handleClick}>click</button>            
        </>
    )
}
// control forms
// un control forms
export function InputBox(){
    const [input,setInput]=useState('')
    const inputRef=useRef()
    console.log("component render")
    // const handleChange=()=>{
    //     console.log(inputRef.current.value)
    // }
    return(
        <>
            <h1>finding the control</h1>
            <input type="text" onChange={(e)=>setInput(e.target.value)} />
            <input type="text" ref={inputRef}   />
        </>
    )
}



export default UseRef2