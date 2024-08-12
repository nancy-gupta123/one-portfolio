import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen text-white bg-gradient-to-b from-gray-800 to-black'>
        <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>
            <div className='pb-8'>
                <p className='inline text-4xl font-bold border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-14'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam beatae minima nisi suscipit, quas tempora sed similique doloremque quis aperiam cupiditate accusantium accusamus, vel recusandae ea, maxime ullam consequuntur deserunt debitis? Dolorem earum dicta, neque aspernatur velit praesentium. Fugit illum voluptatem necessitatibus eos velit quis nostrum et adipisci vero. Assumenda?</p>
            <br/>
            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis aspernatur cum repudiandae, facilis minus, autem quod nemo rerum, architecto animi maiores nostrum et eaque aliquid nulla nesciunt exercitationem iure voluptatibus libero magnam sit ex possimus debitis eligendi. Fugit iure delectus doloremque aliquid ratione itaque quibusdam amet commodi, enim minima quos?</p>
        </div>
    </div>
  )
}

export default About