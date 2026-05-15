"use client"

import React from 'react'
import Image from 'next/image'
import SideBarComponents from '../components/SideBar'

const Home = () => {
  return (
    <div className='h-screen flex bg-[#000000]'>
        <SideBarComponents/>
        <main className='w-full p-5 flex flex-col gap-5 flex-1 min-h-screen overflow-y-auto'>
          <div className="main-text text-justify">
            <p className='text-[15px]'>
              Saya adalah seorang Web Developer dengan role Front-End Developer, yang menggunakan Tech-Stack berikut ini.
            </p>
          </div>
          <div className="tech-stack-sections flex flex-col gap-4">
            <div className="title relative bg-[#1f1f1f] px-4 py-2 w-40 rounded-r-lg">
              <span className='absolute bg-[#00ED60] h-full w-1 left-0 top-1/2 -translate-y-1/2'></span>
              <h1 className='text-[15px] font-semibold text-[#00ED60]'>Tech Stack</h1>
            </div>
            <div className="techstack-card flex gap-3">
              <div className="card flex flex-col justify-between gap-3 items-center text-center w-35 bg-[#1d1d1d] p-3 rounded">
                <div className="image-wrapper bg-[#FFFFFF] p-1.5 rounded">
                  <Image src={`/techstack-image/html-icon.png`} alt='HTML' width={80} height={80} />
                </div>
                <h1 className='text-[#ffffff] font-semibold'>HTML</h1>
              </div>
              <div className="card flex flex-col justify-between gap-3 items-center text-center w-35 bg-[#1d1d1d] p-3 rounded">
                <div className="image-wrapper bg-[#FFFFFF] p-1.5 rounded">
                  <Image src={`/techstack-image/css-icon.png`} alt='HTML' width={80} height={80} />
                </div>
                <h1 className='text-[#ffffff] font-semibold'>CSS</h1>
              </div>
              <div className="card flex flex-col justify-between gap-3 items-center text-center w-35 bg-[#1d1d1d] p-3 rounded">
                <div className="image-wrapper bg-[#FFFFFF] p-1.5 rounded">
                  <Image src={`/techstack-image/javascript-icon.jpg`} alt='HTML' width={80} height={80} />
                </div>
                <h1 className='text-[#ffffff] font-semibold'>Javascript</h1>
              </div>
              <div className="card flex flex-col justify-between gap-3 items-center text-center w-35 bg-[#1d1d1d] p-3 rounded">
                <div className="image-wrapper bg-[#FFFFFF] p-1.5 rounded">
                  <Image src={`/techstack-image/next-js-icon.jpg`} alt='HTML' width={80} height={80} />
                </div>
                <h1 className='text-[#ffffff] font-semibold'>Next JS</h1>
              </div>
              <div className="card flex flex-col justify-between gap-3 items-center text-center w-35 bg-[#1d1d1d] p-3 rounded">
                <div className="image-wrapper bg-[#FFFFFF] p-1.5 rounded">
                  <Image src={`/techstack-image/react-js-icon.png`} alt='HTML' width={80} height={80} />
                </div>
                <h1 className='text-[#ffffff] font-semibold'>React</h1>
              </div>
              <div className="card flex flex-col justify-between gap-3 items-center text-center w-35 bg-[#1d1d1d] p-3 rounded">
                <div className="image-wrapper bg-[#FFFFFF] p-1.5 rounded">
                  <Image src={`/techstack-image/tailwind-css-icon.jpg`} alt='HTML' width={80} height={80} />
                </div>
                <h1 className='text-[#ffffff] font-semibold'>Tailwind CSS</h1>
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}

export default Home