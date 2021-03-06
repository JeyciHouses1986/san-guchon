import { useState } from "react";
import './contador.css'

export default function Contador(props) {
    //const handlers = useState(0);
    const [contador, setContador] = useState(props.inicial);

    function agregarAlContador () {
        if (contador >= props.stock){
            alert(`No caigas en la gula, solo puedes pedir ${props.stock} unidades de este San Guchon`);
    } else {
        setContador (contador + 1);
    }
    }


    function restarAlContador () {
        if (contador>0) {
        setContador(contador - 1);    
        }        
    }


    return (
        <div className="d-flex flex-row justify-content-center mt-2">
            <button className="btn btn-outline-info p-2 boton-cant" onClick={restarAlContador}>-</button>
            <p className="p-2">
                {contador}
            </p>
            <button className="btn btn-outline-info p-2 boton-cant" onClick={agregarAlContador}>+</button>
        </div>
    )
}
