import { jwtDecode } from 'jwt-decode';
import React, { useState } from 'react';

export default function Login() {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);

  function doLogin(){
    event.preventDefault();
    setLoginError(null);
    const loginDetails = {"email":email, "password":password};
    console.log(loginDetails);
    
    fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
      headers:{"Content-Type":"application/json"},
      method: "POST",
      body: JSON.stringify(loginDetails)
    })
    .then(resp => resp.json())
    .then(data => {
      // login response frpom api
      console.log("server data:",data); // if login is successful, jwtToken is received
      if(data.jwtToken){
        // login successful
        alert("login successful");
        localStorage.setItem("token", data.jwtToken);
        const decodedToken = jwtDecode(data.jwtToken);
        console.log(decodedToken);
        const userId = +decodedToken.sub;
        localStorage.setItem("userId", userId);
        localStorage.setItem("roles", decodedToken.roles);
        localStorage.setItem("username", decodedToken.username);
      }
      else {
        // login failed
        setLoginError("please provide valid email and password");
      }
    })
    .catch(err => {
      setLoginError("please provide valid email and password");

    });

  }

  return (
    <div className="col-4 mx-auto border rounded shadow p-3 mt-3">
      <form>
        <h3>Login</h3>
        {
          loginError &&
          <div className='alert alert-danger' role="alert">
            {loginError}
          </div>
        }
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