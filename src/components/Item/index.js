import Contador from '../Contador';
import './Item.css'
import { Link, useNavigate } from 'react-router-dom';
import Card from "react-bootstrap/Card";

export default function Item(props){
    
    const navigateFn = useNavigate();

    const loadItemDetails = () =>{
        navigateFn(`/details/${props.id}`);
    }

    return(
        <Card key={props.id} className="col-3 m-2 p-7">
        <Card.Img
            variant="top"
            src={props.imagen}
            className="img-fluid"
        />
        <Card.Body>
            <Card.Title>
                {props.nombre}
            </Card.Title>
            <Card.Text className="fw-bold fs-3">${props.precio}</Card.Text>
            <div className="text-center">                                
            <Link to={`/Details/${props.id}`}>
                <button type="button" className="btn btn-outline-dark" onClick={loadItemDetails}>
                    Detalle
                </button>
            </Link>
            </div>
            <div className="container-fluid">
                <div className="row">
                    
                        <Contador stock={props.stock} inicial={0} />
                        <button type="button" className="btn btn-primary">Agregar al carrito</button>
                    
                </div>
            </div>
        </Card.Body>
    </Card>
    );
}


