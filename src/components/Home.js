import React from 'react';
import { CartState } from "../context/Context";
import SingleProduct from './SingleProduct';
import "./style.css"
import Filters from './Filters';

const Home = () => {
  const {
    state: {products},
  productState: {sort, byStock, byFastDelivery, byRating, searchQuery}
} = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a,b) => (
        sort === "lowToHigh" ? (a.price - b.price) : (b.price - a.price)
      ))
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter(product => product.inStock)
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter(product => product.fastDelivery)
      // console.log(sortedProducts);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(product => product.ratings >= byRating);
      // console.log(sortedProducts);
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter(product => product.name.toLowerCase().includes(searchQuery))
      console.log(sortedProducts);
    }

    return sortedProducts || products;
  }
  // const displayedProducts = products ? transformProducts() : [];
  // console.log(transformProducts());
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {
          transformProducts().map(product => (
            <SingleProduct product={product} key={product.id} />
          ))
        }
      </div>
    </div>
  )
}

export default Home;