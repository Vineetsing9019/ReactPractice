import React from 'react'
import { useForm } from 'react-hook-form';

export default function AddProduct() {
 const {  register, handleSubmit, formState: { errors }} = useForm();
 
 function addProduct(formData){
   console.log(formData); 
   // POST request
 }
 
 
return (
     <div className="col-5 mx-auto border rounded shadow p-3 mt-3">
       <form onSubmit={handleSubmit(addProduct)}>
         <h3>Add Product</h3>          
          <div className="mb-3">
           <label className="form-label">Product Name</label>
           <input type="text" className="form-control" 
              {...register('name')} />        
         </div>
         <div className="mb-3">
           <label className="form-label">Product Category</label>
           <input type="text" className="form-control" 
              {...register('category')} />        
         </div>
         <div className="mb-3">
           <label className="form-label">Description</label>
           <textarea className="form-control" 
              {...register('decsription')} />        
         </div>
         <div className="mb-3">
           <label className="form-label">Product Price</label>
           <input type="text" className="form-control" 
              {...register('price')} />        
         </div>
         <div className="mb-3">
           <label className="form-label">Image Path</label>
           <input type="text" className="form-control" 
              {...register('imagePath')} />        
         </div>
         <button type="submit" className="btn btn-primary"
         >Add Product</button>
       </form>
     </div>
   )
 }
 
