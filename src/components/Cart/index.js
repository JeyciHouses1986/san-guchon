import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function Cart() {

  const  { cartData } = useContext(CartContext);

  console.log('>> cartData: ', cartData);

  return (
    <div className='cart'>
        Aca podemos ver la info del Cart!
        {
          cartData.map((item) => {
            return <div key={item.id}>{`ID: ${item.id} - Cantidad: ${item.quantity}`}</div>
          })

        }
    </div>
  )
}

//este comentario es para probar el pull en mi pc y la notebook

let juan = 8;