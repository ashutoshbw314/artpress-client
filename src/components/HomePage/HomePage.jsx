import React, {useState, useEffect} from "react";
import NavBar from "../shared-components/NavBar/NavBar";
import ProductCard from "./ProductCard";
import {getAllProducts} from "../../API/API";
import SquareSpinner from "../shared-components/Spinners/SquareSpinner";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        setProducts(products);
      } catch(error) {
        console.log(error.message)
      }  
    }  
    fetchProducts();
  }, [])

  return (
    <div>
      <NavBar />
      <div className='max-w-md px-8 py-8 mx-auto sm:max-w-xl lg:max-w-6xl lg:px-12'>
        <h1 className='mb-10 text-5xl font-bold text-center text-indigo-800 text-shadow-lg'>Artpress</h1>
        {
          products.length == 0 && <SquareSpinner />
        }
        <div className='mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-4'>
          {
            products.length != 0 && products.map((product) => 
              <ProductCard key={product._id} data={product} />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default HomePage;
