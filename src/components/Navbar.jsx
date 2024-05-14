import React from 'react'

function Navbar() {
  return (
      <div className='flex justify-between bg-slate-100 py-2 md:py-4 px-2 md:px-4'>
          <h1 className='text-2xl md:text-3xl text-gray-600 font-bold'>Fruit Basket</h1>
          <ul className='hidden md:flex gap-4'>
              <li>Home</li>
              <li>Menu</li>
              <li>Service</li>
              <li>Shop</li>
          </ul>
    </div>
  )
}

export default Navbar