import { useState } from "react"

function OnSubmit(){
    const [user,setUser]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert("submitted")
        console.log(user)
    }
    return(

        <>  
            <h1>ON SUBMIT COMPONENT</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=>setUser(e.target.value)} />
                <button>Submit</button>
            </form>
        </>
    )
}
export default OnSubmit