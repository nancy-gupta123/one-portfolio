import React from 'react'
import HTML from '../assets/portfolio/HTML.png'
import js from '../assets/portfolio/js.png'
import python from '../assets/portfolio/python.jpeg'
import react from '../assets/portfolio/react.png'
import tailwind from '../assets/portfolio/tailwind.jpeg'
import css from '../assets/portfolio/css.png'
import django from '../assets/portfolio/django.jpg'
import C from '../assets/portfolio/c++.jpeg'
const Experience = () => {
  const experience=[
    {
      id:1,
      src:HTML,
      title:'HTML',
      style:'shadow-orange-500'
    },
    {
      id:2,
      src:css,
      title:'CSS',
      style:'shadow-yellow-500'
    },
    {
      id:3,
      src:js,
      title:'JavaScript',
      style:'shadow-blue-500'
    },
    {
      id:4,
      src:python,
      title:'Python',
      style:'shadow-yellow-500'
    },
    {
      id:5,
      src:C,
      title:'C++',
      style:'shadow-blue-600'
    },
    {
      id:6,
      src:react,
      title:'React',
      style:'shadow-blue-600'
    },
    {
      id:7,
      src:django,
      title:'Django',
      style:'shadow-orange-500'
    },
    {
      id:8,
      src:tailwind,
      title:'Tailwind',
      style:'shadow-sky-400'
    }
  ]
  return (
    <div name="experience"className='w-full h-screen p-4 bg-gradient-to-b from-gray-800 to-black pt-19 sm:max-h-screen'>
        <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto text-white'>
          <div className='pb-8'>
            <p className='inline p-2 text-4xl font-bold border-b-4 border-gray-500'>Experience</p>
            <p className='py-6'>These are the technologies I've worked with</p>
        </div>

        
        <div className='grid w-full grid-cols-2 gap-8 px-12 py-8 text-center itemscol-center sm:grid-cols-3 sm:px-0'>
          
        {
          experience.map(({id,src,title,style})=>(
            <div key={id}className={`py-2 duration-500 rounded-lg shadow-md hover:scale-105 ${style}`}>
                <img src={src}alt="" className='w-20 h-24 mx-auto'/>
                <p className='mt-4 '>{title}</p>
            </div>
            
          ))
        }
          
            
        </div>
    </div>
    </div>
  )
}

export default Experience