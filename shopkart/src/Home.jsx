import React, { useEffect, useState } from 'react'
import Product from './Product';

export default function Home() {

    const [allProducts, setAllProducts] = useState([]);

    // fetch('https://dummyjson.com/products')
    // .then(resp => resp.json())
    // .then(data => setAllProducts(data.products))
    // .catch(err => console.log(err));

    // useEffect is used to avoid the side effect
    // useEffect(()=>{    }, []);
    // useEffect(function, dependency list-DL );
    // DL - if anything from this DL is updated then the function will be executed again

    // DL - lists all the dependencies
    // we can define 'states and props' on which the useEffect is depenedent on this DL
    // if there is any change in any DL - useEffect will execute the function

    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log("calling fetch");        
        fetch(`${import.meta.env.VITE_API_URL}/products`)
        .then(resp => resp.json())
        .then(data => {
            // console.log(data);
            // console.log(data._embedded.products);
            setAllProducts(data._embedded.products);
        })
        .catch(err => console.log(err));
    },[]);

    // DL - [] ==> useEffect is NOT dependent on any of the state/props
    // DL - [count] ==> if count state is updated, iseEffect will execute the function again
    // DL is not mentioned - by default all states and props are the DL , by default the DL is [allProducts, count]

    // Rule: DL should not mention the state, which is getting updated within the function

  return (
    <>
        {/* <div>Home</div>
        <button onClick={()=>setCount(count+1)}>
            Current count { count }
        </button> */}
        <h2>Product List</h2>
        <div className="row">
        { allProducts && 
            allProducts.map(prodObj => <Product key={prodObj.id}  obj={prodObj} name={prodObj.title} />)
        }
        </div>
    </>
  )
}
