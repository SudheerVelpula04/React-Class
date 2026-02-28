import { useReducer } from "react"
function reducer(state,action){
    console.log(state)
    // console.log(action.type)
    switch(action.type){
        case "INCREMENT":
            return {count:state.count+1}
        case "DECREMENT":
            return {count:state.count-1}
        case "RESET":
            return {count:0}
        default:
            return state
    }
}
function Counter1(){
    const [state,dispatch]=useReducer(reducer,{count:0})
    // console.log(state.count)
    return(
        <>
            <h1>Count :{state.count} </h1>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
            <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
        </>
    )
}
export default Counter1