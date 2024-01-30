import React, { useState } from 'react'

function SignUp({signUp}) {

const [data,setData]=useState(()=>{});


function handleInputChange({target:{name,value}}){
  setData({...data,[name]:value})
}

function submitForm(){
signUp(data.username,data.password,data.phone,data.name);

}


  return (
    <div>
     <input onChange={handleInputChange} type="text"    name="name" placeholder='Enter full name' /><br/>
    <input onChange={handleInputChange} type="email"    name="username" placeholder='Enter your email' /><br/>
    <input onChange={handleInputChange} type="text"     name="phone" placeholder='Enter phone number' /><br/>
    <input onChange={handleInputChange} type="password" name="password" placeholder='Enter password' /><br/>
    <button onClick={submitForm}>Register</button>
    </div>
  )
}

export default SignUp