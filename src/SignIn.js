import React,{useState} from 'react'

function SignIn({signIn}) {
    const [data,setData]=useState(()=>{});


    function handleInputChange({target:{name,value}}){
      setData({...data,[name]:value})
    }
    
    function submitForm(){
    signIn(data.username,data.password,data.phoneNumber);
    
    }
    
    
      return (
        <div>
        <input onChange={handleInputChange} type="email"    name="username" placeholder='Enter your email' /><br/>
        <input onChange={handleInputChange} type="password" name="password" placeholder='Enter password' /><br/>
        <button onClick={submitForm}>Login</button>
        </div>
      )
}

export default SignIn