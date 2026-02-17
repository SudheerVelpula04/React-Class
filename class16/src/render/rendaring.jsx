import { useState } from "react"
import Passing from "./passing"
import "./style.css"
export function Find(){
    const [isLogin,setIsLogin]=useState(false)
    return(
        <>
            <h1>{isLogin ? "WellCome User" : "DashBoard"}</h1>
            <button onClick={()=>setIsLogin(!isLogin)}>{isLogin ? "LogOut" :"Login"}</button>
        </>
    )
}
export function Style(){
    const [color,setColor]=useState(false)
    return(
        <>
            <h1 style={{color :color ?"red":"yellow"}} className={color?"active":"notActive"}>Color</h1>
            <button onClick={()=>setColor(!color)}>{color?"Yellow":"REd"}</button>
        </>
    )
}

/**
useEffect(callback,dependency)

useEffect(()=>{
    //mounting phase
    return // un Mounting phase or cleaning
},[count])//updating phase

 */
function Render(){
    return(
        <>
        <hr />
        <Passing user="sudheer"/>

        </>
    )
}
export default Render