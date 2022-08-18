import React, { useContext } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget () {

  const { cartData } = useContext(CartContext);
    return (
        <Link to={`/cart`} >
        <FaShoppingCart />
        <span>{ cartData.length }</span>
        </Link>
    );
}