import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>
      <div id="about" className='w-full p-2 md:h-screen flex py-16'>
        <div className='max-w-[1240px] px-2 py-[2rem] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#FF7043]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>
                    Hi, I’m Ujjwal Duwal, a recent Computer Engineering graduate from Khwopa Engineering College and a web and software development enthusiast. I’m passionate about technology and love exploring how things work behind the scenes. I thrive on learning new concepts, building creative solutions, and staying up-to-date with the latest trends in tech. 
                </p>
                <p className='py-2 text-gray-600'>
                    I’m detail-oriented, balancing creativity with technical problem-solving, and always eager to grow and carve a successful path in the tech world. Above all, I’m driven to contribute to impactful projects that make a difference. I am now spending my time building projects with React/Next JS and learning new technologies.
                </p>
                <Link href="/#projects" >
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.
                </p>
                </Link>                
                
                    
            </div>
            <div className='shadow-xl w-full flex items-center justify-center h-auto shadow-gray-400 rounded-[20%] p-1  hover:scale-105 ease-in duration-300'>
                    <img className='rounded-[20%] p-1' src="/assets/about/photo.jpeg" alt="/" />
                </div>
        </div>
      </div>
    </>
  )
}

export default About
