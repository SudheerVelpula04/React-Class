import { useState } from "react";

export function Control() {
  const [input, setInput] = useState("");
  const [value,setValue]=useState('')
  console.log("render updating the component")
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(input)
    console.log(value)
  }
  return (
    <>
      <h1>Control Component</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <select name="" id="" onChange={(e)=>setValue(e.target.value)}>
            <option value="TVS">TVS</option>
            <option value="Bajaj">Bajaj</option>
            <option value="Honda">Honda</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export function  Control2(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleLogin=(e)=>{
        e.preventDefault()
        console.log(email,password)
        if(!email || !password){
            alert('enter email and password')
            return
        }
        if(email && password){
            alert('Login Your Browser')
            setEmail('')
            setPassword('')
            return
        }
    }
    return(
        <>
            <form action="" onSubmit={handleLogin}>
                <input type="email" placeholder="Enter Email...." onChange={(e)=>setEmail(e.target.value)}/>
                <br />
                <br />
                <input type="password"  placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
                <br />
                <br />
                <button type="submit">
                    Login
                </button>
            </form>
        </>
    )
}

export function Control3(){
    const [formData,setFormData]=useState({
        email:"",
        password:""
    })
    const [error,setError]=useState({})

    const handelChange=(e)=>{
        // console.log(e.target)
        const {name,value}=e.target                                                                                                            
        // console.log(name)
        // console.log(value)
        // console.log(formData)
        setFormData({...formData,[name]:value})//

       
    }

    const validate=()=>{
         let newError={}
        if(!formData.email.includes('@')){
            newError.email="invalid Email Format"
        }
        if(formData.password.length<6){
            newError.password="password must be at least 6 Char"
        }
        return newError
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const validateErrors=validate()
        setError(validateErrors)
        

        if(Object.keys(validateErrors).length ===0){
            alert("Login Successful")
            console.log(formData)
            setFormData({email:'',password:''})
        }
        
    }

    return(
        <>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter Email" name="email" value={formData.email} onChange={(e)=>handelChange(e)}/>
                    <p style={{color:"red"}}>{error.email}</p>
                    <input type="password" placeholder="enter Password" name="password" value={formData.password} onChange={(e)=>handelChange(e)}/>
                    <p style={{color:"red"}}>{error.password}</p>
                    <button type="submit">Login</button>
                </form>

                <h1>{formData.email}</h1>
                <h1>{formData.password}</h1>
        </>
    )
}
