import useApi from "./customApi"


function DisplayApi(){
    const data=useApi('https://fakestoreapi.com/products')
    console.log(data)
    return(
        <>
        {
            data.map(item=><h1>{item.title}</h1>)
        }
        </>
    )
}
export default  DisplayApi