import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Data from '../Productos/data.json'

export default function ItemDetailContainer(){

    const [product, setProduct] = useState([]);
    const {id} = useParams()

    const getProductById = (id) =>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(Data.find(dat => dat.id === id))
            }, 500);
        })
    }

    useEffect(()=>{
        getProductById(id)
        .then(product =>{
            setProduct(product)
        })
        .catch(error => {
            console.log(error)
        })
    }, [id])

    return(
        <div className='detcont'>
            <ItemDetail {...product}/>
        </div>
    );
}

