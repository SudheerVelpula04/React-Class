import { Route, Routes } from "react-router-dom"
import Data from "./component/data"
import Example from "./component/Example"
import Nav from "./component/nav"
// import Notification from "./component/notification"

function App(){
  return(
    <>
      
      
      {/* <Notification/> */}
      <Example/>
      <h1 className="text-4xl font-bold">APP</h1>
      <Routes>
        <Route path="/" element={<Data/>}/>
        <Route path="/nav" element={<Nav/>}/>
      </Routes>
      
      
    </>
  )
}
export default App