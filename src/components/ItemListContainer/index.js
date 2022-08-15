import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../Productos/asyncmock'
import ItemList from '../ItemList'
import './itemListContainer.css'

const ItemListContainer = ({greeting}) => {
  const { id } = useParams();
    const categoryId = !isNaN(id) && +id;

    const [productsData, setProductsData] = useState([]);
    useEffect(() => {

        setProductsData([]);

        const productsDataPromise = getProductsByCategory (categoryId);

        productsDataPromise.then(
            (data) => {
                setProductsData(data);
            },
            (err) => {
                console.log(
                    "Ha ocurrido un error al traer los productos: ",
                    err
                );
            }
        );
    }, [categoryId]);
  

  return (
    <div>
      {Array.isArray(productsData) && productsData.length === 0 ? (
                 <div className="waviy">
                 <span style={{'--i':'1'}}>Aguarde... </span>
                 <span style={{'--i':'2'}}>Los </span>
                 <span style={{'--i':'3'}}>Santos </span>
                 <span style={{'--i':'4'}}>vienen </span>
                 <span style={{'--i':'5'}}>llegando </span>
                </div>
            ) : (
                <ItemList products={productsData} />
            )}
    </div>
  )
}

export default ItemListContainer

