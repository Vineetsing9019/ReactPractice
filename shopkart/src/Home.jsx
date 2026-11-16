
import React, { useState, useEffect } from 'react'

export default function Home() {

    const [allProducts, setAllProducts] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(resp => resp.json())
        .then(data => setAllProducts(data.products))
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Home</h1>

            {allProducts && allProducts.map((product) => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                    <img src={product.thumbnail} width="100" alt={product.title} />
                </div>
            ))}
        </div>
    )
}
