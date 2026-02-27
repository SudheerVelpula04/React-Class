import { useContext } from "react"
import { MakeContext } from "./createContext"

function Counter(){
    const {count,setCount}=useContext(MakeContext)
    return(
        <>
            <h1>Counter</h1>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)} className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">increment</button>
        </>
    )
}
export default Counter