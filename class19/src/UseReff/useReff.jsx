import { useEffect, useRef } from "react"

function UseRef(){
    const h1ref=useRef()
    useEffect(()=>{
        console.log(h1ref.current)
    },[])
    return(
        <>
        
        <h1>USE REF COMPONENT</h1>

        <h1>Hi How Re you</h1>
            {/* <button></button> */}
        <h1 ref={h1ref}>hello</h1>
        </>
    )
}
export default UseRef