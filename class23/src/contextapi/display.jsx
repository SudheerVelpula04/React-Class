import { useContext } from "react"
import { MakeContext } from "./createContext"
import Counter from "./counter"




function Display(){

    const {text,setText}= useContext(MakeContext)
    return(
        <>  
            {/* {console.log(text)} */}
            <h1>Display Data</h1>
            <h1>{text}</h1>

            <Counter/>


        </>
    )
}
export default Display