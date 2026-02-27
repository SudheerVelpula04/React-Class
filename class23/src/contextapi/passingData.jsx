import { useState } from "react"
import { MakeContext } from "./createContext"
import Display from "./display"
function PassingData(){
    const [text,setText]=useState('car')
    const [count,setCount]=useState(0)
    return(
        <>
        <MakeContext.Provider  value={{text,setText,count,setCount}} >
                <Display/>
        </MakeContext.Provider>

        </>
    )
}
export default PassingData