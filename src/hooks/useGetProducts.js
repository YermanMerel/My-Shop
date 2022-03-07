import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API)=>{
    const [products, setProducts] = useState([]);

   useEffect( ()=>{
       const fetchProducts = async ()=>{
            const response = await axios(API);
            setProducts(response.data);
       }
       fetchProducts();
   }, [])
   return products;
};

export {useGetProducts};
