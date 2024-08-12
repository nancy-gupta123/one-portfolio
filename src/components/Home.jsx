import React from 'react'
import profile from '../assets/portfolio/R.jpeg'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='flex flex-col items-center h-full max-w-screen-lg gap-5 px-4 mx-auto text-white md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl font-bold sm:text-6xl'>I'm a full Stack Developer</h2>
                <p className='max-w-md py-4 text-gray-500'>
                    I am pursuing in Btech in Computer Science and Engineering I also completed my DSA.
                    This Protfolio is made up of React and Tailwind.
                </p>
                <div>
                    <Link to=
                        "Portfolio" smooth duration={500} className='flex items-center w-2/3 px-6 py-3 my-2 text-white rounded cursor-pointer w-fit-md group bg-gradient-to-r from-cyan-500 to-blue-500'>Portfolio<span className='duration-300 group-hover:rotate-90'><MdKeyboardArrowRight size={25} className='ml-1'/></span></Link>
                </div>
            </div>
            <div>
                <img src={profile} alt="my profile" className='w-2/3 rounded-2xl md:w-100% h-100%'/>
            </div>
        </div>
    </div>
  )
}

export default Home
