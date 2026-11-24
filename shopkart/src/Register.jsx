import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Register() {
 const {  register, handleSubmit, formState: { errors }} = useForm();
 const [passwordError, setPasswordError ] = useState(null);

function doRegister(formData){
  console.log(formData);
  
  if(formData.password === formData.confirmPassword){
    // POST request to api
  }
  else {
    setPasswordError("Password and confirm password must be same");
  }

}


  return (
    <div className="col-5 mx-auto border rounded shadow p-3 mt-3">
      <form onSubmit={handleSubmit(doRegister)}>
        <h3>Register</h3>
         { passwordError &&
          <div className="alert alert-danger" role="alert">
            {passwordError}
          </div>
         }
         <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" 
          style={ errors.username ? {border:"2px solid red"} :{}}
          {...register(
            'username',
            {
              "required":"Username is required",
              "minLength": {
                value:"3",
                message:"Username must have atleast 3 characters"
              }
            }
          )} />
          { errors.username &&
            <div className='alert alert-danger'>
            {errors.username?.message}
          </div>
          }
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" 
          style={ errors.email ? {border:"2px solid red"} :{}}
          {...register(
            'email',
            {
              "required": "Email is required",
              // "email": "Please enter the valid email"
              pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
          },
            }
            )} />
            { errors.email &&
            <div className='alert alert-danger'>
            {errors.email?.message}
          </div>
          } 
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" 
          style={ errors.password ? {border:"2px solid red"} :{}}
          {...register(
            'password',
            {
              "required":"Password is required",
              "minLength":{
                "value":"6",
                "message":"Password must have minimum 6 characters"
              },
              "maxLength":{
                "value":"12",
                "message":"Password can not have more than 12 characters"
              },
              "pattern":{
                "value":/^[a-zA-Z0-9@#_]*$/,
                "message":"Password can ONLY contain alphabets, digits and @_#"
              }
            }
            )} />
            { errors.password &&
              <div className='alert alert-danger'>
                {errors.password?.message}
              </div>
            }
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-control" 
          style={ errors.confirmPassword ? {border:"2px solid red"} :{}}
          {...register(
            'confirmPassword',
            {
              required:"Confirm Password is required"
            }
            )}/>
            { errors.confirmPassword &&
              <div className='alert alert-danger'>
                {errors.confirmPassword?.message}
              </div>
            }
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile</label>
          <input type="text" className="form-control" 
          {...register('mobile',
            {
              "required":"Mobile is rerquired",
              "pattern": {
                value: /^[7-9]{1}[0-9]{9}$/ ,
                "message":"Mobile must contain EXCATLY 10 digits"
              }
            }
          )}/>
          { errors.mobile &&
              <div className='alert alert-danger'>
                {errors.mobile?.message}
              </div>
            }
        </div>
         <div className="mb-3">
          <label className="form-label">Birth Date</label>
          <input type="date" className="form-control"
          {...register('birthDate')} />
        </div>
        <button type="submit" className="btn btn-primary"
        >Register</button>
      </form>
    </div>
  )
}
