import React, { useContext } from 'react'
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';


const Product = ({product}) => {
    const {id, image, category, title , price} = product;
    const { addToCart } = useContext(CartContext)

  return (
    <div>
        <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
            <div className='w-full h-full flex justify-center items-center'>
                <div className='w-[200] mx-auto flex justify-center items-center'>
                    <img className='max-h-[160px] group-hover:scale-110 duration-300' src={image} />
                </div>
            </div>
            <div className='absolute top-0 right-0 py-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-75 group-hover:right-5'>
            <button onClick={() => addToCart(product,id)}>
                <div className='flex justify-center items-center text-white bg-red-500 w-12 h-12'>
                <BsPlus className="text-3xl" />
                </div>
                </button>
                <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'><BsEyeFill/></Link>
            </div>
        </div>
        <div>
            <div className='text-sm gext-gray-500 capitalize mb-1'>{category}</div>
            <Link to={`/product/${id}`}>
            <h2 className='font-semibold mb-1'>{title}</h2>
            </Link>
            <div className='font-semibold'>{price}</div>
        </div>
    </div>
  )
}

export default Product