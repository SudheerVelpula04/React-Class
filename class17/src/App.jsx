import { useState } from "react"
import Update from "./UseEffect/update"
import UseEffect from "./UseEffect/useEffect"
import WithApi from "./UseEffect/useEffectWithApi"

function App(){
  const [there,setThere]=useState(false)
  return(
    <>
      <h1>Main Component</h1>
      {/* <UseEffect/> */}
      <WithApi/>
      {
        there? <Update/>: <h1>Closed</h1>
      }
      <button onClick={()=>setThere(!there)}>{there ?"close":"open"}</button>
    </>
  )
}
export default App