import React, { useState } from "react";
import Contador from '../Contador';
import Card from "react-bootstrap/Card"
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext';
import Button from 'react-bootstrap/esm/Button';
import "./itemDetail.css"

export default function ItemDetail ({
  id, 
  nombre, 
  precio, 
  category, 
  stock, 
  imagen,
  inicial,
  detail
}) {

  const { addCartItem } = useCartContext();
  const [productAddedToCard, setProductAddedToCard] = useState(false);
  const onAdd = (quantityToAdd) => {
      addCartItem( { 
        id, 
        nombre,
        quantity: quantityToAdd,
        imagen,
        precio        
    } );
      setProductAddedToCard(true);
  };



    return (
      <div className="d-flex row col-12 m-1 p-1 justify-content-evenly">
         <Card className="col-3 m-2 p-7">
        <Card.Img
            variant="top"
            src={imagen}
            className="img-fluid"
        />
        <Card.Body>
            <Card.Title>
                <h1>{nombre}</h1>
                <h5 className="description" >{detail}</h5>
            </Card.Title>
            <Card.Text className="fw-bold fs-3">${precio}</Card.Text>
            <div className="text-center">                                
            </div>
            <div className="container-fluid">
                <div className="row">
                {productAddedToCard ? <div className="row"><Button as={Link} to={`/cart`} className="btn btn-info m-2" >Agregado! Ver carrito</Button><Button as={Link} to={`/`} className="btn btn-info m-2" >Continuar comprando</Button></div> : (
                <Contador
                    onAddItemsToCart={onAdd}
                    stock={stock}
                    inicial={inicial}
                ></Contador>
            )}
                </div>
            </div>
        </Card.Body>
    </Card>
      </div> 
    );
  }
  
