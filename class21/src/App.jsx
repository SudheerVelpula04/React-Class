import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import WithOutRoute from "./routing/withoutRout"
import { Routes,Route, Link } from "react-router-dom"
import Error from "./error"
import Users from "./user"
function App(){
  return(
    <>  
      {/* <WithOutRoute/> */}
    {/* static and dynamic*/}
    <ul>
      <li>
        <Link to={"/"} >Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/contact"}>Contact</Link>
      </li>
      {/* <li>
        <Link to={"/users/2"}>User</Link>
      </li> */}
    </ul>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/users/:name/:age" element={<Users/>}/>
    </Routes>


    </>
  )
}
export default App