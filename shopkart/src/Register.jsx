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
          {...register('username',
            {
              "required":"username is required",
              "minLength": {
                value:"3",
                message:"username must have atleast 3 characters"
              }
            }
          )} />
          { errors.username &&
          <div className='alert alert-danger'>
            { errors.username?.message}
             </div>
}
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" 
          {...register('email')} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" 
          {...register('password')} />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-control" 
          {...register('confirmPassword')}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile</label>
          <input type="text" className="form-control" 
          {...register('mobile')}/>
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