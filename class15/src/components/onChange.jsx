import { useState } from "react"

function OnChange(){
    const [text,setText]=useState("")
    return(
        <>
            {console.log("render")}
            <h1>giving Values :- {text}</h1>
            <input type="text" name="" id="" onChange={(e)=>setText(e.target.value)} />
        </>
    )
}
export default OnChange