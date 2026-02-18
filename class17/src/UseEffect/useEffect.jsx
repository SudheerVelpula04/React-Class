import { useEffect, useState } from "react"


function UseEffect(){
    const [text,setText]=useState("World")
    console.log('out side')
    // console.log(text)
    useEffect(()=>{
        console.log("in side the useEffect")
        setTimeout(()=>{
            console.log("setTimeout")
        },2000)
        console.log(text)
    },[])


    return(
        <>
        {
            console.log("in side the return")
        }
        </>
    )
}
export default UseEffect