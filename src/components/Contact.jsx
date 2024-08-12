import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className='w-full h-screen p-4 text-white bg-gradient-to-b from-black to-gray-800'>
        <div className='flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto'>
            <div className='pb-8'>
                <p className='inline text-4xl font-bold border-b-4 border-gray-500'>
                Contact
                </p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>
        <div className='flex items-center justify-center'>
            <form action="https://getform.io/f/bvrepgmb" method="POST"className='flex flex-col w-full '>
                <input type="text"name="Name" placeholder='Enter your name'className='p-2 my-2 text-white bg-transparent border-2 rounded-md focus:outline-none'/>

                <input type="text" name="Email" placeholder='Enter your branch'className='p-2 my-2 text-white bg-transparent border-2 rounded-md focus:outline-none'/>
                <textarea className='p-2 text-white bg-transparent border-2 rounded-md focus:outline-none'name="message"> </textarea>
                <button className='flex items-center px-6 py-3 mx-auto my-8 text-white duration-300 rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110'>Let's talk</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Contact