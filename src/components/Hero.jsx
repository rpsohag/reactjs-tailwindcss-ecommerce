import React from 'react'
import womanImg from './../img/hero_girl.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='h-[800px] bg-hero object-cover bg-no-repeat bg-cover bg-center py-24'>
        <div className='container mx-auto flex justify-around h-full'>
            <div className='flex flex-col justify-center'>
            <div className='font-semibold flex items-center uppercase'>
                <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trend
            </div>
            <h1 className='text-[30px] lg:text-[70px] sm:text-[50px] xs:text-[30px] leading-[1.1] font-light mb-4'>SPECIAL SUMMER SALE <br /> <span className='font-semibold'>WOMENS/MENS</span></h1>
            <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary' >Discover More</Link>
            </div>
            <div className='hidden lg:block'>
            <img src={womanImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero