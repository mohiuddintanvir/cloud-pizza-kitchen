import React from 'react';
import { AddProduct } from './AddProduct';

const ProductsInfo = ({product,onAddProduct}) => {
    const {img,name,
        details}=product;



        const addproduct=()=>{
            // toggle create after srtting up redux state for cart to add product there 
        }
    return (
        <div className='w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent text-center'>
            <img src={img} alt={name} className='w-96 h-40'/>
           <h2 className='pb-2 text-lg'>{name}</h2> 
           <p className='mb-2 h-20 line-clamp-4'>{
details}</p>
<AddProduct onAddProduct={addproduct}/>
        </div>
    );
};

export default ProductsInfo;