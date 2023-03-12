import React,{useState,useEffect} from 'react';
import { getDoc,doc } from 'firebase/firestore';
import './about.css'
import { db } from '../Firebase';
import Product from '../Product';
const AllProducts = () => {  
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchSubscribers = async () => {
          const ref = doc(db, 'Products', 'smU38tqi1oOMiQwEmXx2');
          const y = await getDoc(ref)
          setProducts(y.data().products);
      };
      fetchSubscribers();
    }, []);
  return (
    <div className="flex-container">
     {products.map(product=>(
        <div className='flex-item' >
        <Product productdata={product}/>
        </div>
     ))}
    </div>
  );
};

export default AllProducts;

