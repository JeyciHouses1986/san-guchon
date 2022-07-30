import Card from "react-bootstrap/Card";
import Contador from '../Contador';
import { useState, useEffect } from "react";
import getFetch from "../Productos";
import './ItemListContainer.css'

export default function ItemListContainer() {

    function descItem() {
        return alert("Estamos preparando la descripcion de este San Guchon");
    }
    const [Data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch
            .then((resp) => setData(resp))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="d-flex row col-12 m-1 p-1 justify-content-evenly">
            {loading ? (

                <h3 className="text-dark text-center">
                    ¡Aguarde! Los santos vienen llegando...
                </h3>
            ) : (
                Data.map((prod) => (
                    <Card key={prod.id} className="col-3 m-2 p-7">
                        <Card.Img
                            variant="top"
                            src={prod.imagen}
                            className="img-fluid"
                        />
                        <Card.Body>
                            <Card.Title>
                                {prod.nombre}
                            </Card.Title>
                            <Card.Text className="fw-bold fs-3">${prod.precio}</Card.Text>
                            <div className="text-center">
                                <button type="button" className="btn btn-outline-dark" onClick={descItem}>
                                    Detalle
                                </button>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    
                                        <Contador stock={prod.stock} inicial={0} />
                                        <button type="button" className="btn btn-primary">Agregar al carrito</button>
                                    
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                ))
            )}
        </div>
    );
}
