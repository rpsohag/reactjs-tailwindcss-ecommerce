import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'
import { BsBag } from 'react-icons/bs'
import Logo from './../img/logo.png'

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  console.log(isOpen)
  const [isActive, setIsActive] = useState(false)
  const {itemAmount} = useContext(CartContext)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <header className={`${isActive ? 'bg-white shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all p-5`}>
      <div className='container flex mx-auto items-center justify-between h-full'>
          <Link to="/">
            <div>
            <img className='w-[40px]' src={Logo} alt="" />
            </div>
          </Link>
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative max-w-[50px] '>
          <BsBag className='text-2xl'/>
            <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full justify-center items-center flex'>{itemAmount}</div>
        </div>
      </div>
    </header>
  )
}

export default Header