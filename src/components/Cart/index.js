import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import CartItem from '../CartItem'

export default function Cart() {

  const  { cartData } = useContext(CartContext);

  console.log('>> cartData: ', cartData);

  return (
    
    <div className="d-flex row justify-content-evenly">
      <h3>Santos invocados:</h3>
      <div className="card-group">
        { (cartData.length > 0) ? cartData.map((item) => {
            return <CartItem key={item.id} id={item.id} quantity={item.quantity} nombre={item.nombre} imagen={item.imagen} precio={item.precio} />
          })
          : 
          "No has agregado ningun Santo a tus plegarias!"
        }
        </div>
    </div>
  )
}




