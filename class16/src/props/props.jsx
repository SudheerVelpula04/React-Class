
export const Prop =(props)=>(
    <>
        <h1>Props</h1>
        <h1>Name:{props.name}</h1>
        {/* {console.log()} */}
        {
            props.children
        }
        <hr />
    </>
)
// {"name":"sudheer","age":10,"branch":"ECE","Collage":"SSN"}
// {name,age,branch,Collage}
export function Prop2({name,age,branch,Collage,children}){
    return(
        <>
            <h1>Prop 2 Component</h1>
            <h1>Name:{name}</h1>
            <h1>age:{age}</h1>
            <h1>Branch:{branch}</h1>
            <h1>Collage:{Collage}</h1>
            {
               children
            }
        </>
    )
}
