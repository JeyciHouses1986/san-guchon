import React from "react";
import { useCartContext } from "../CartContext";
import CartItem from "../CartItem";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore,doc,updateDoc, increment } from "firebase/firestore";

export default function Cart() {
  const { cartData, precioFinal,finalizarCompra, eliminarTodo } = useCartContext();

  const order = {
    buyer: {
        name: 'Susana Horia',
        email: 'susanitahoria@gmail.com',
        phone: '3516321654',
        address: 'Calle 13, piso 23'
    },
    items: cartData.map(producto => ({ id: producto.id, nombre: producto.nombre, precioUnitario: producto.precio, cantidad: producto.quantity, subtotal: producto.precio * producto.quantity })),
    total: precioFinal(),
}

const generarCompra = () => {
    const dataBase = getFirestore();
    const ordersCollection = collection(dataBase, 'orders');
    addDoc(ordersCollection, order)
        .then(({ id }) => alert(`Sus plegarias han sido escuchadas. Su numero de compra es: ${id}`))
        eliminarTodo()
    cartData.forEach((producto)=> {
        const itemRef = doc(dataBase, 'products', producto.id)
        updateDoc(itemRef, {
          stock: increment(-producto.quantity)
        })
    })
} 








  return (
    <div className="d-flex row justify-content-evenly">
      <h3>Santos invocados:</h3>
      <div className="card-group">
        {cartData.length > 0
          ? cartData.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  id={item.id}
                  quantity={item.quantity}
                  nombre={item.nombre}
                  imagen={item.imagen}
                  precio={item.precio}
                />
              );
            })
          : "No has agregado ningun Santo a tus plegarias!"}
      </div>
      <div className="d-flex row justify-content-evenly">
        <h4 className="cartTotal">Monto total: ${precioFinal()}</h4>
        <div>
        <div>
        <Button as={Link} to="/" className="btn btn-info w-25">
            Continuar comprando
        </Button>
        </div>
        <div> { eliminarTodo() } </div>
        <div onClick={generarCompra}> {finalizarCompra()} </div>
        </div>
      </div>
    </div>
  );
}
