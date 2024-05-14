import React from 'react'

function Banner() {
  return (
      <div className='grid grid-cols-2 items-center py-2 md:py-4 px-2 md:px-4 bg-slate-100'>
          <div>
              <h1 className='font-bold text-2xl md:text-6xl text-green-600'>The Fastest Delivery in <h1 className='text-gray-600'>Your City</h1></h1>
              <h3 className='py-8 font-medium text-gray-400'>Enjoy nature's freshest bounty delivered straight to your door. Order a wide variety of seasonal fruits sourced locally with just a few clicks.</h3>
              <button className='bg-green-600 text-white py-2 px-4 rounded-lg font-semibold'>Order Now</button>
          </div>
          <div>
              <img className='' src='https://images.unsplash.com/photo-1606757389667-45c2024f9fa4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt="Blueberry"/>
          </div>
    </div>
  )
}

export default Banner