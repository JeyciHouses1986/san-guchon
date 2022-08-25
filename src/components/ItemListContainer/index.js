import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList';
import './itemListContainer.css';
import { collection, getDocs, query, where} from "firebase/firestore";
import {DB} from "../Firebase/configs.js"


export default function ItemListContainer () {
    const [data, setData] = useState([]);
    const {categoryId} = useParams()

    useEffect(()=>{

      const colRef = collection(DB, "Productos");
    
      if(categoryId){
        const  colFilterRef = query(colRef, 
          where('cat', '==', categoryId))
        getDocs(colRef)
        .then(res=> setData(res.docs.map(prod => ({id:prod.id, ...prod.data()})))
        )
        getDocs(colFilterRef)
        .then(res=> setData(res.docs.map(prod => ({id:prod.id, ...prod.data()})))
        )}else{
          getDocs(colRef)
          .then(res=> setData(res.docs.map(prod => ({id:prod.id, ...prod.data()})))
          )
        };  
      
    },[categoryId]);




    /* const [productsData, setProductsData] = useState([]);
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
    }, [categoryId]); */
  

  return (
    <div>
        {Array.isArray(data) && data.length === 0 ? (
                 <div className="waviy">
                 <span style={{'--i':'1'}}>Aguarde... </span>
                 <span style={{'--i':'2'}}>Los </span>
                 <span style={{'--i':'3'}}>Santos </span>
                 <span style={{'--i':'4'}}>vienen </span>
                 <span style={{'--i':'5'}}>llegando </span>
                </div>
            ) : (
                <ItemList products={data} category={categoryId} />
            )}
    </div>
  )
}



