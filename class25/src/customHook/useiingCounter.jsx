import useCounter from "./file1"
function DisplayCounter(){

    const {count,increment,decrement,reset}=useCounter()
    return(
        <>
            <h1>Counter</h1>
            <h1>Count : {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>

        </>
    )
}
export default DisplayCounter