import { useRef, useState } from "react"

export function UnControl(){
    console.log("render component")
    const inputRef=useRef('')

    const handleChange=(e)=>{
        console.log(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const text=inputRef.current.value
        console.log(text)

    }

    return(
        <>
                <h1>Un Control Components</h1>


                <form action="" onSubmit={handleSubmit}>
                    <input type="text" name="" id="" ref={inputRef} onChange={e=>handleChange(e)}/>
                    <button type="submit">submit</button>
                </form>
        </>
    )
}

export function UnControl2(){
    const nameRef=useRef('')
    const emailRef=useRef('')
    const passwordRef=useRef('')
    const [details,setDetails]=useState([])
    const handleSubmit=(e)=>{
        const name=nameRef.current.value
        const email=emailRef.current.value
        const password=passwordRef.current.value
        e.preventDefault()

        if(!name||!email||!password){
            alert("plz enter the field")
        }

        const details=[]
        details.push({...details,name,email,password})
        // console.log(name)
        // console.log(email)
        // console.log(password)
        setDetails(details)
    }
    return(
        <>
        {
            console.log(details)
        }
            <form action="" onSubmit={handleSubmit}>
                <input type="text" ref={nameRef}/>
                <input type="email" ref={emailRef}/>
                <input type="password" ref={passwordRef}/>
                <button type="submit">submit</button>
            </form>

            {
                details.map((item,index)=><h1>{item.name}</h1>)
            }
        </>
    )
}