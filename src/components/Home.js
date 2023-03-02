import React from 'react';
import { CartState } from "../context/Context";
import SingleProduct from './SingleProduct';
import "./style.css"
import Filters from './Filters';

const Home = () => {
  const {state: {products}} = CartState();

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {
          products.map(product => (
            <SingleProduct product={product} key={product.id} />
          ))
        }
      </div>
    </div>
  )
}

export default Home;