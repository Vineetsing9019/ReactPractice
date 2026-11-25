import React from 'react'
import { useForm } from 'react-hook-form'

export default function AddProduct() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function doAddProduct(formData) {
    console.log(formData);
    // POST request to api (localhost:8080/products)
  }

  return (
    <div className="col-5 mx-auto border rounded shadow p-3 mt-3">
      <form onSubmit={handleSubmit(doAddProduct)}>
        <h3>Add Product</h3>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input type="text" className="form-control"
          style={ errors.name ? {border:"2px solid red"} :{}}
          {...register('name', { required: "Product name is required" })} />
          { errors.name &&
            <div className='alert alert-danger'>
              {errors.name?.message}
            </div>
          }
        </div>
        <div className="mb-3">
          <label className="form-label">Product Category</label>
          <select className="form-select"
          style={ errors.category ? {border:"2px solid red"} :{}}
          {...register('category', { required: "Product category is required" })}>
            <option value="">Select category</option>
            <option value="Electronics">Electronics</option>
            <option value="Fresh Veggies">Fresh Veggies</option>
            <option value="Furniture">Furniture</option>
          </select>
          { errors.category &&
            <div className='alert alert-danger'>
              {errors.category?.message}
            </div>
          }
        </div>
        <div className="mb-3">
          <label className="form-label">Product Price</label>
          <input type="number" className="form-control"
          style={ errors.price ? {border:"2px solid red"} :{}}
          {...register('price', {
            required: "Product price is required",
            min: { value: 1, message: "Product price must be at least 1" }
          })} />
          { errors.price &&
            <div className='alert alert-danger'>
              {errors.price?.message}
            </div>
          }
        </div>
        <div className="mb-3">
          <label className="form-label">Product Image (URL)</label>
          <input type="text" className="form-control"
          {...register('imagePath')} />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Description</label>
          <textarea className="form-control" rows="3"
          {...register('description')}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  )
}
