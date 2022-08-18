import React, { memo } from 'react'
import Card from "react-bootstrap/Card";

function CartItem({ id, quantity, nombre, imagen, precio }) {

  console.log('>>> render CartItem!');

  return (
    <div >
        <Card className="col-13 m-2 p-1">
        <Card.Img
            variant="top"
            src={imagen}
            className="img-fluid"
        />
        <Card.Body>
            <Card.Title>
                <h3>Cantidad: {quantity}</h3>
                <h4>{nombre}</h4>
            </Card.Title>
            <Card.Text className="fw-bold fs-3">${precio}</Card.Text>                            
        </Card.Body>
    </Card>
    </div>
  )
}

const CartItemMemo = memo(CartItem);

export default CartItemMemo;