import { useNavigate } from "react-router-dom"

function Home(){
    const navigate=useNavigate()

    const handleBtn1=(name)=>{
        navigate(`/users/${name}/20`)
    }
    const handleBtn2=()=>{
        navigate("/users/rahul/26")
    }



    return(
        <>
            <h1>Home Page</h1>

            <button onClick={()=>handleBtn1('sudheer')}>Btn1</button>
            <button onClick={handleBtn2}>Btn2</button>

        </>
    )
}
export default Home