import React from 'react'
import Image from 'next/image'
import SideBarComponents from '../components/SideBar'
import { IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react'

const Profile = () => {
  return (
    <div className='h-screen flex bg-[#000000]'>
        <SideBarComponents/>
        <main className='w-full p-5 flex flex-col gap-5 flex-1 min-h-screen overflow-y-auto'>
            <div className="top flex gap-8 items-center">
                <div className="image-profile">
                    <Image src={`/pas-foto-tiery-umar-samsudin.png`} alt='Tiery Umar Samsudin' width={150} height={150} className='rounded-full'/>
                </div>
                <div className="introduce-sections">
                    <h2 className='text-[30px] font-bold'>Tiery Umar Samsudin</h2>
                    <h1 className='text-[25px] font-semibold text-[#00ED60]'>Front-End Developer</h1>
                </div>
            </div>
            <div className="divider">
                <hr />
            </div>
            <div className="personal-information flex flex-col gap-3">
                <div className="title relative bg-[#1f1f1f] px-5 py-1 rounded-r-full w-fit overflow-hidden">
                    <span className='absolute bg-[#00ED60] w-1 h-full left-0 -translate-y-1/2 top-1/2'></span>
                    <h1 className='font-semibold text-[15px] text-[#00ED60]'>Informasi Pribadi</h1>
                </div>
                <div className="text-wrapper">
                    <div className="information-list">
                        <ul className='flex flex-col gap-3'>
                            <li className='text-[#9C9C9C] text-[14px]'><span className='font-bold text-[#FFFFFF]'>Nama lengkap:</span> Tiery Umar Samsudin</li>
                            <li className='text-[#9C9C9C] text-[14px]'><span className='font-bold text-[#FFFFFF]'>Kelas:</span> XI</li>
                            <li className='text-[#9C9C9C] text-[14px]'><span className='font-bold text-[#FFFFFF]'>Jurusan:</span> Pengembangan Perangkat Lunak dan gim (PPLG)</li>
                            <li className='text-[#9C9C9C] text-[14px]'><span className='font-bold text-[#FFFFFF]'>Sekolah:</span> SMK Prakarya Internasional</li>
                            <li className='text-[#9C9C9C] text-[14px]'><span className='font-bold text-[#FFFFFF]'>Alamat:</span> Kota Bandung, Jawa Barat, Indonesia</li>
                            <li className='text-[#9C9C9C] text-[14px]'><span className='font-bold text-[#FFFFFF]'>Hobi:</span> Coding, Bermain Game, Mendengarkan Lagu, Berkendara Motor</li>
                            <li className='text-[#9C9C9C] text-[14px]'><span className='font-bold text-[#FFFFFF]'>Cita-cita:</span> Fullstack Developer dan Pengusaha Sukses</li>
                        </ul>
                    </div>
                </div>
                <div className="title relative bg-[#1f1f1f] px-5 py-1 rounded-r-full w-fit overflow-hidden">
                    <span className='absolute bg-[#00ED60] w-1 h-full left-0 -translate-y-1/2 top-1/2'></span>
                    <h1 className='font-semibold text-[15px] text-[#00ED60]'>Status Belajar</h1>
                </div>
                <div className="text-wrapper">
                    <p className='text-[14px]'>
                        Saat ini saya sedang belajar untuk peran Backend, menggunakan Node JS, yang merupakan framework Express JS, dengan membuat Rest API, CRUD, dll. 
                        Saya mempelajari ini karena tujuan saya adalah menjadi Fullstack Developer atau Professional Developer.
                    </p>
                </div>
                <div className="title relative bg-[#1f1f1f] px-5 py-1 rounded-r-full w-fit overflow-hidden">
                    <span className='absolute bg-[#00ED60] w-1 h-full left-0 -translate-y-1/2 top-1/2'></span>
                    <h1 className='font-semibold text-[15px] text-[#00ED60]'>Sosial Media</h1>
                </div>
                <div className="social-media-app">
                    <div className="app flex gap-3 items-center">
                        <a href="https://github.com/TieryUmarSamsudin2209" target='_blank' className='flex gap-2 items-center text-[14px] bg-[#111111] w-fit px-3 py-1.5 border rounded border-[#00ED60] text-[#00ED60] hover:bg-[#00ED60] hover:text-[#FFFFFF] transition-all duration-300'>
                            <IconBrandGithub size={22}/>
                            <h1>Github</h1>
                        </a>
                        <a href="https://www.instagram.com/_tieryumarsamsudin_?igsh=c2MzMnN5YWRycXp4" target='_blank' className='flex gap-2 items-center text-[14px] bg-[#111111] w-fit px-3 py-1.5 border rounded border-[#00ED60] text-[#00ED60] hover:bg-[#00ED60] hover:text-[#FFFFFF] transition-all duration-300'>
                            <IconBrandInstagram size={22}/>
                            <h1>Instagram</h1>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Profile