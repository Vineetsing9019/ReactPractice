import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
  const navigate = useNavigate();

  useEffect(()=>{
    // remove token and user details saved at login
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("roles");
    localStorage.removeItem("username");
    alert("logout successful");
    navigate("/login");
  },[]);

  return (
    <div>Logging out...</div>
  )
}
