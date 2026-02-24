import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
function Users(){
    const {name,age}=useParams()
    const navigate=useNavigate()
    const location=useLocation()
    console.log(location)   
    // console.log(name,age)
    const handleClick=()=>{
        navigate('/')
    }
    return(
        <>
            <h1>UserName : {name}</h1>
            <h1>UserAge : {age}</h1>


            <button onClick={handleClick}>Home</button>

            <h1>{location.pathname}</h1>
            <h1>{location.search}</h1>
        </>
    )
}
export default Users