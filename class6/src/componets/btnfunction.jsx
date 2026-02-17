function Btn2(prop){
    let message="function Component"
    // while asses the props wee need to pass like a parameter
    // props is one way data flow from parent to child
    return(
        <>
            <h1>{message}</h1>
            <button>{prop.value}</button>
        </>
    )
}
export default Btn2