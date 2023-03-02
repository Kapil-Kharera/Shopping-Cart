import React, { useReducer, useContext } from 'react'
import { createContext } from "react";
import { faker } from '@faker-js/faker';
import { cartReducer } from "./Reducer";

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
        products,
        cart: [],
    });

    // console.log(products);
  return (
    <CartContext.Provider value={{state, dispatch}}>
        { children }
    </CartContext.Provider>
  )
}

export default Context;
export const CartState = () => {
    return useContext(CartContext);
}