import React from 'react'
import food_ordering from '../assets/portfolio/food_ordering.jpg'
import youtube_clone from '../assets/portfolio/youtube_clone.jpg'




const Portfolioo = () => {
  const portfolio=[
    {
      id:1,
      src:food_ordering,
    },
    {
      id:2,
      src:youtube_clone,
    },
    {
      id:3,
      src:food_ordering
    }
  ]
  return (
    <div name="Portfolio" className='w-full h-screen text-white bg-gradient-to-b from-black to-gray-800 md:max-h-screen'>
      <div className='w-full h-full max-w-screen-lg p-4 mx-auto text-white'>
        <div className='pb-8'>
          <p className='inline text-4xl font-bold border-b-4 border-gray-400'>Portfolio</p>
          <p className='py-6'>Here chechout some Projects</p>
        </div>
        <diV className='grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0'>
          
          {
            portfolio.map(({id,src})=>(
              <div key={id} className='rounded-lg shadow-md shadow-gray-600'>
            <img src={src}alt="" className='w-full duration-200 rounded-md h-52 hover:scale-105'/>
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105'>Code</button>
              <button className='w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105'>Demo</button>
            </div>
          </div>
            ))
          }
          
        </diV>
      </div>
    </div>
  )
}

export default Portfolioo