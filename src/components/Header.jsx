import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'
import { BsBag } from 'react-icons/bs'

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  const {itemAmount} = useContext(CartContext)
  return (
    <div>
      <div>Header</div>
      <button onClick={() => setIsOpen(!isOpen)}><BsBag className='text-2xl'/></button>
      <div>{itemAmount}</div>
    </div>
  )
}

export default Header