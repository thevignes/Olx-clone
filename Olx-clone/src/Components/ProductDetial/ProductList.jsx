import {db} from '../../firebase/setUp';
import {collection, getDocs} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Product from '../Main/Product';

const ProductList = ({searchQuery}) => {
    const[products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);


    useEffect(()=>{
        const  getProudcts = async ()=>{
            const querySnap =  await getDocs(collection(db,'products'));
            const ProductsList = querySnap.docs.map((doc)=>({
                id:doc.id,
                ...doc.data()
            }))
            setProducts(ProductsList);
            setLoading(false);
        }
        getProudcts();
    },[])


    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );


if(loading){
    return(
        <div className='loading'>
            Loading...
        </div>
    )
}else{
return(
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '16px' }}>
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );

}

}


export default ProductList;