import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return (
    <>
       <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#FFA726] to-[#FF7043]'>
                <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                    <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                    <p className='text-center text-white pb-4 pt-2'>React JS</p>
                    <Link href={projectUrl}>
                        <p className='py-3 px-6 text-center rounded-lg text-gray-700 tracking-wider bg-white font-bold text-lg cursor-pointer'>More Info</p>
                    </Link>
                </div>
            </div>
    </>
  )
}

export default ProjectItem
