import React, { useState } from 'react'

export default function Login() {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  function doLogin(){
    event.preventDefault();
    const loginDetails = {"email":email, "password":password};
    console.log(loginDetails);
    
    fetch('http://localhost:8080/login', {
      "Content-Type":"application/json",
      "method": "POST",
      "body": loginDetails
    })
    .then(resp => resp.json())
    .then(data => {
      // login response frpom api
    })

  }

  return (
    <div className="col-4 mx-auto border rounded shadow p-3 mt-3">
      <form>
        <h3>Login</h3>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" 
          onChange={ ()=>setEmail(event.target.value) } />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control"
          onChange={ ()=> setPassword(event.target.value) } />
        </div>
        <button type="submit" className="btn btn-primary"
        onClick={doLogin}>Login</button>
      </form>
    </div>
  )
}
