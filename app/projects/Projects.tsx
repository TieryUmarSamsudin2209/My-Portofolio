import React from 'react'
import Image from 'next/image'
import SideBarComponents from '../components/SideBar'

const Projects = () => {
  return (
    <div className='h-screen flex bg-[#000000]'>
        <SideBarComponents/>
        <main className='w-full p-5 flex flex-col gap-5 flex-1 min-h-screen overflow-y-auto'>
          <div className="card-wrapper">
            <div className="card bg-[#141414] w-100 p-2 rounded flex flex-col gap-4">
              <div className="image">
                <Image src={`/project-image/laravel-library-image-ui.png`} alt='Laravel Library' width={400} height={400} className='rounded'/>
              </div>
              <div className="text flex text-center gap-2 flex-col">
                <h1 className='font-bold text-[18px] text-[#00ED60]'>Library Laravel</h1>
                <p className='text-[15px] text-center'>Project ini adalah website Perpustakaan Digital dengan sistem REST API menggunakan Laravel dan Express JS.</p>
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}

export default Projects