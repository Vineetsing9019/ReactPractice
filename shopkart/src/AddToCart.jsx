import React from 'react'
import { useForm } from 'react-hook-form'

export default function AddToCart() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function doAddToCart(formData) {
    console.log(formData);
    // POST request to api (localhost:8080/carts)
  }

  return (
    <div className="col-5 mx-auto border rounded shadow p-3 mt-3">
      <form onSubmit={handleSubmit(doAddToCart)}>
        <h3>Add Product to Cart</h3>
        <div className="mb-3">
          <label className="form-label">Product Id</label>
          <input type="number" className="form-control"
          {...register('productId', { required: "Product Id is required" })} />
          { errors.productId &&
            <div className='alert alert-danger'>
              {errors.productId?.message}
            </div>
          }
        </div>
        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input type="number" className="form-control" defaultValue={1}
          {...register('quantity', {
            required: "Quantity is required",
            min: { value: 1, message: "Quantity must be at least 1" }
          })} />
          { errors.quantity &&
            <div className='alert alert-danger'>
              {errors.quantity?.message}
            </div>
          }
        </div>
        <button type="submit" className="btn btn-primary">Add to Cart</button>
      </form>
    </div>
  )
}
