import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import Product from '../components/Product';
import Header from './../components/Header'
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import Help from '../components/Help';
import Footer from '../components/Footer';


const Home = () => {
    const { products}  = useContext(ProductContext);
    const filterProducts = products.filter(item => {
        return item.category === "men's clothing" || item.category === "women's clothing"
    })
    
  return (
<>
<Header/>
<Hero/>
<Sidebar/>
    <section className='py-16'>
        <div className='container mx-auto'>
            <div className='grid p-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] '>
                {filterProducts.map(product => {
                    return <Product product={product} key={product.id}/>
                }) }
            </div>
        </div>
    </section>
    <Help/>
    <Footer/>
                </>
  )
}

export default Home