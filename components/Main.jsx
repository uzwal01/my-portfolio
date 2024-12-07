import React from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Main = () => {
  return (
    <>
      <section id="home" className='w-full h-screen text-center'> 
        <div className='max-w-[1240px] m-auto w-full h-screen p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600 '>Let's build something together</p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm <span className='text-[#FF7043]'>Ujjwal</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Front-End Web Developer
                </h1>
                <p className='py-4 text-gray-600'>
                    I'm a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive front-end web applications while learning back-end technologies.
                </p>
                <div className="flex justify-between items-center m-auto max-w-[330px] py-4">
                  <a href="https://www.linkedin.com/in/ujjwal-duwal" target='_blank' rel="noopener noreferrer" >
                    <div className="rounded-full shadow-lg shadeo-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn className="text-[#FF7043]"/>
                    </div>
                  </a>
                  <a href="https://github.com/uzwal01" target='_blank' rel="noopener noreferrer" >
                  <div className="rounded-full shadow-lg shadeo-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub className="text-[#FF7043]"/>
                </div>
                  </a>
                
                <a href="mailto:uzwalduwal07@gmail.com" target='_blank' rel="noopener noreferrer" >
                <div className="rounded-full shadow-lg shadeo-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail className="text-[#FF7043]"/>
                </div>
                 </a>
                
                <a href="/assets/resume/CV-resume.pdf" download="Ujjwal_Duwal_CV-resume.pdf" target='_blank' rel="noopener noreferrer" >
                <div className="rounded-full shadow-lg shadeo-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#FF7043]">
                  <BsFillPersonLinesFill className="text-white"/>
                </div> 
                </a>
                
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Main
