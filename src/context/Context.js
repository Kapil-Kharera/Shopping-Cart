import React, { useReducer, useContext } from 'react'
import { createContext } from "react";
import { faker } from '@faker-js/faker';
import { cartReducer, productReducer } from "./Reducer";

const CartContext = createContext();
faker.seed(99);


const Context = ({ children }) => {
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        // image: faker.image.business(),
        image: faker.image.imageUrl(0,0,'product', false),
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    }));

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    });

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: ""
    });

    // console.log(products);
  return (
    <CartContext.Provider value={{state, dispatch, productState, productDispatch}}>
        { children }
    </CartContext.Provider>
  )
}

export const CartState = () => {
    return useContext(CartContext);
}

export default Context;