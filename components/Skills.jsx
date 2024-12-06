import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className=' w-full p-2 lg:h-screen'>
      <div className='max-w-[1240px] mx-auto flex-col justify-center items-center h-full px-2 py-[6rem]'>
        <p className='uppercase text-xl tracking-widest text-[#FF7043]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                {/* Use Image component with proper path and dimensions */}
                <Image 
                  src="/assets/skills/html.png" 
                  alt="HTML skill" 
                  width={64} 
                  height={64} 
                  className='w-auto h-auto'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                
                <Image 
                  src="/assets/skills/css.png" 
                  alt="HTML skill" 
                  width={64} 
                  height={64} 
                  className='w-auto h-auto'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
               
                <Image 
                  src="/assets/skills/javascript.png" 
                  alt="HTML skill" 
                  width={64} 
                  height={64} 
                  className='w-auto h-auto'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                
                <Image 
                  src="/assets/skills/react.png" 
                  alt="HTML skill" 
                  width={64} 
                  height={64} 
                  className='w-auto h-auto'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>REACT</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                
                <Image 
                  src="/assets/skills/nextjs.png" 
                  alt="HTML skill" 
                  width={64} 
                  height={64} 
                  className='w-auto h-auto'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NEXT</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
               
                <Image 
                  src="/assets/skills/tailwind.png" 
                  alt="HTML skill" 
                  width={64} 
                  height={64} 
                  className='w-auto h-auto'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>TAILWIND</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                
                <Image 
                  src="/assets/skills/bootstrap.png" 
                  alt="HTML skill" 
                  width={64} 
                  height={64} 
                  className='w-auto h-auto'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>BOOTSTRAP</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                
                <Image 
                  src="/assets/skills/github1.png" 
                  alt="HTML skill" 
                  width={64} 
                  height={64} 
                  className='w-auto h-auto'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>GITHUB</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills

