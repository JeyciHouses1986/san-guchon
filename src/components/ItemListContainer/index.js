import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList';
import './itemListContainer.css';
import { collection, getDocs, query, where } from "firebase/firestore";
import {DB} from "../Firebase/configs.js"


export default function ItemListContainer () {
  const [productsData, setProductsData] = useState([]);
    const {categoryId} = useParams()

    useEffect(()=>{

      const colRef = collection(DB, "Productos");
     
      if(categoryId){
        const  colFilterRef = query(colRef, 
          where('category', '==', categoryId))
        getDocs(colRef)
        .then(res=> setProductsData(res.docs.map(prod => ({id:prod.id, ...prod.data()})))
        )
        getDocs(colFilterRef)
        .then(res=> setProductsData(res.docs.map(prod => ({id:prod.id, ...prod.data()})))
        )}else{
          getDocs(colRef)
          .then(res=> setProductsData(res.docs.map(prod => ({id:prod.id, ...prod.data()})))
          )
        };  
      
    },[categoryId]);


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

