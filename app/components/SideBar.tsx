"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IconArrowRight, IconDashboard, IconFolder, IconPhone, IconSchool, IconUser } from '@tabler/icons-react'
import { usePathname } from 'next/navigation'

const menuLinks = [
    {label: "Dashboard", href: "/home", icons: <IconDashboard size={22}/>},
    {label: "Profile", href: "/profile", icons: <IconUser size={22}/>},
    {label: "Projects", href: "/projects", icons: <IconFolder size={22}/>},
    {label: "School", href: "/school", icons: <IconSchool size={22}/>},
    {label: "Contacts", href: "/contact", icons: <IconPhone size={22}/>}
]

const SideBarComponents = () => {
const pathName = usePathname();
  return (
    <aside className='sticky p-3 w-65 bg-[#0d0d0d] h-screen left-0 top-0 flex flex-col gap-3'>
        <div className="logo flex justify-center">
            <Link href="/" className='flex items-center gap-2'>
                <Image src={`/favicon-portofolio-website.svg`} alt='Portofolio Tiery Umar Samsudin' width={40} height={40} />
                <h1 className='font-bold text-[19px]'>Portofolio</h1>
            </Link>
        </div>
        <div className="divider">
            <hr />
        </div>
        <div className="menu-links flex flex-col gap-2">
            <ul className='space-y-2'>
                {menuLinks.map((item) => {
                    const isActive = pathName === item.href;
                    return(
                        <li key={item.href}>
                            <Link href={item.href} className={`relative flex justify-between items-center px-3 py-1.5 rounded ${isActive ? "bg-[#222222]": "hover:bg-[#222222]"}`}>
                                <div className="wrapper flex items-center gap-3">
                                    {isActive && (
                                        <span className='absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-[#00ED60] rounded-r-full'/>
                                    )}
                                    <span>{item.icons}</span>
                                    <span className='text-[15px]'>{item.label}</span>
                                </div>
                                {isActive && (
                                    <span><IconArrowRight size={22} className='text-[#5f5f5f]'/></span>
                                )}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    </aside>
  )
}

export default SideBarComponents