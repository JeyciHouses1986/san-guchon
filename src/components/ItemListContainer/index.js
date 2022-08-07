import { useState, useEffect } from "react";
import ItemList from "../ItemList"
import Data from '../Productos/data.json'


export default function ItemListContainer() {



    const[loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const[resultado, setResultado] = useState([]);

    useEffect(() => {
        const productCarrito = new Promise ((res, rej)=>{
        setTimeout(() => {
                res(Data)
                rej("¡Error! No se pudieron cargar los productos")
        }, 2000);
        })
        
        productCarrito
            .then((result)=>{
                setResultado(result)
            })
            .catch(()=> {
                setError(error === true)
            })
            .finally(()=>{
                setLoading(false)
            });
        
    })
    return (
        <>
            {
              loading ? <h4 className='charge'>Aguarde, los santos están llegando!!!</h4> : <ItemList productos={resultado} />
            }
        </>
    )
}

