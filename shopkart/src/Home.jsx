import React, { useState, useEffect } from 'react'

export default function Home() {

    const [allProducts, setAllProducts] = useState(null);

    // Load products (url changes when a category is clicked)
    const loadProducts = (url) => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => setAllProducts(data.products))
        .catch(err => console.log(err));
    }

    // Runs once when the page opens → load All
    useEffect(() => {
        loadProducts('https://dummyjson.com/products');
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">

                {/* LEFT: Category sidebar */}
                <div className="col-md-2 p-3">
                    <a href="#" className="d-block fs-5 mb-2" onClick={() => loadProducts('https://dummyjson.com/products')}>All</a>
                    <a href="#" className="d-block fs-5 mb-2" onClick={() => loadProducts('https://dummyjson.com/products/category/smartphones')}>Electronics</a>
                    <a href="#" className="d-block fs-5 mb-2" onClick={() => loadProducts('https://dummyjson.com/products/category/groceries')}>Fresh Veggies</a>
                    <a href="#" className="d-block fs-5 mb-2" onClick={() => loadProducts('https://dummyjson.com/products/category/furniture')}>Furniture</a>
                </div>

                {/* RIGHT: Product cards */}
                <div className="col-md-10 p-3">
                    <h2>Product List</h2>

                    <div className="row">
                        {allProducts && allProducts.map((product) => (
                            <div className="col-md-4 mb-4" key={product.id}>
                                <div className="card h-100 p-2">
                                    <img src={product.thumbnail} className="card-img-top" alt={product.title}
                                         style={{ height: '200px', objectFit: 'contain' }} />

                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <h6>Category: {product.category}</h6>
                                        <p>
                                            {product.description.substring(0, 40)} <a href="#">Read More</a>
                                        </p>
                                        <p>Price: <b>$ {product.price}</b></p>

                                        <button className="btn btn-primary me-2">Details</button>
                                        <button className="btn btn-danger me-2">Delete</button>
                                        <button className="btn btn-warning">Update</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}