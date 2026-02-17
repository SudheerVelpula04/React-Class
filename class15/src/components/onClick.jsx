import { useState } from "react"


function OnClick(){
    const [message,setMessage]=useState("Happy Baday..!")

    const Simple=(para)=>{

    }
    return(
        <>
            <h1>Message: {message}</h1>
            <button onClick={()=>setMessage("----Good Night----")}>Change Message</button>
            <button onClick={()=>Simple("bye")}></button>
        </>
    )
}
export default OnClick