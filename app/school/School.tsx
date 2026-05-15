import React from 'react'
import Image from 'next/image'
import SideBarComponents from '../components/SideBar'

const School = () => {
  return (
    <div className='h-screen flex bg-[#000000]'>
        <SideBarComponents/>
        <main className='w-full p-5 flex flex-col gap-5 flex-1 min-h-screen overflow-y-auto'>
            <div className="card-wrapper flex gap-3">
                <a href="https://www.smpangkasahusein.sch.id/" target='_blank'>
                    <div className="card flex flex-col gap-3 bg-[#212121] w-80 p-2 rounded h-full overflow-hidden border border-transparent hover:border-[#00ED60] hover:scale-103 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                        <div className="image flex justify-center items-center">
                            <Image src={`/school-image/profil-smp-angkasa-lanud-husein-bandung.jpg`} alt='SMP Angkasa Lanud Husein Sastranegara Bandung' width={300} height={300} className='rounded aspect-video object-cover'/>
                        </div>
                        <div className="name flex flex-col gap-3 overflow-hidden">
                            <h1 className='text-[15px]'>SMP Angkasa Lanud Husein Sastranegara</h1>
                            <p className='truncate max-w-70 text-[14px] text-[#6c6c6c]'>Jalan Pajajaran.151 Arjuna, Husen Sastranegara, Kec. Cicendo, Kota Bandung, Jawa Barat 40172</p>
                            <p className='text-[#6c6c6c] text-[13px] font-semibold'>2021-2024</p>
                        </div>
                    </div>
                </a>
                <a href="https://www.smk-pi.sch.id/" target='_blank'>
                    <div className="card flex flex-col gap-3 bg-[#212121] w-80 p-2 rounded h-full border border-transparent overflow-hidden hover:border-[#00ED60] hover:scale-103 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                        <div className="image flex justify-center items-center">
                            <Image src={`/school-image/profil-smk-prakarya-internasional-bandung.png`} alt='SMK Prakarya Internasional' width={300} height={300} className='rounded aspect-video object-cover'/>
                        </div>
                        <div className="name flex flex-col gap-3 overflow-hidden">
                            <h1 className='text-[15px]'>SMK Prakarya Internasional</h1>
                            <p className='truncate max-w-70 text-[14px] text-[#6c6c6c]'>Jl. Inhoftank No.46, Pelindung Hewan, Kec. Astanaanyar, Kota Bandung, Jawa Barat 40243</p>
                            <p className='text-[#6c6c6c] text-[13px] font-semibold'>2024-2027</p>
                        </div>
                    </div>
                </a>
            </div>
        </main>
    </div>
  )
}

export default School