import Image from 'next/image'
import React from 'react'
import portfolioImg from '/public/assets/projects/portfolio.png'
import {RiRadioButtonFill} from "react-icons/ri"
import Link from 'next/link'
const portfolio = () => {
  return (
    <>
      <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'>
                <Image className='absolute z-10' layout='fill' src={portfolioImg} alt="/" />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white'>
                    <h2>Portfolio Website</h2>
                    <h3>React/Next JS / Tailwind </h3>
                </div>
            </div>
            
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>Developed a responsive and interactive personal portfolio website using Next.js and Tailwind CSS. The site features smooth scrolling, dynamic routing, and an intuitive navigation menu. It highlights personal projects, skills, and contact details, demonstrating proficiency in modern web development frameworks and design principles.</p>
                    <button className='px-8 py-2 mt-4 mr-8 rounded-lg text-gray-100 hover:bg-gradient-to-l from-[#FFA726] to-[#FF7043]'>Demo</button>
                    <button className='px-8 py-2 mt-4 rounded-lg text-gray-100 hover:bg-gradient-to-l from-[#FFA726] to-[#FF7043]'>Code</button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className="p-2">
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 items-center flex'><RiRadioButtonFill className='pr-1'/>React/Next</p>
                            <p className='text-gray-600 py-2 items-center flex'><RiRadioButtonFill className='pr-1'/>Tailwind</p>
                            <p className='text-gray-600 py-2 items-center flex'><RiRadioButtonFill className='pr-1'/>JavaScript</p>
                            <p className='text-gray-600 py-2 items-center flex'><RiRadioButtonFill className='pr-1'/></p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects' >
                <p className='underline cursor-pointer'>Back</p>
                </Link>          
                </div>
      </div>
    </>
  )
}

export default portfolio
