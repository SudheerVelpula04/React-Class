
function Passing({user}){
    // if(user) return <h1>Hello {user}</h1>
    // else return <h1>NOt Found</h1>

    // return <h2>{user ? `hello ${user}` : "Not Found" }</h2>

    return(
        <>
            <h1>DashBoard</h1>
            {user && `hello ${user}`}
        </>
    )
}
export default Passing