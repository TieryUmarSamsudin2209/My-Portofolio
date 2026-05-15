"use client"

import React, { useState } from 'react'
import SideBarComponents from '../components/SideBar'
import { IconCheck, IconCopy } from '@tabler/icons-react'

const Contact = () => {
const textCopy = {
  email: "tieryumarsamsudin209@gmail.com",
  phone: "0877-2418-7655",
}
const [copied, setCopied] = useState<Record<string, boolean>>({})
const [showToast, setShowToast] = useState<Record<string, boolean>>({})
const handleCopy = async (text: string, key: string) => {
    try{
        await navigator.clipboard.writeText(text)
        setCopied(prev => ({ ...prev, [key]: true }))
        setShowToast(prev => ({ ...prev, [key]: true }))
        setTimeout(() => {
            const toastEl = document.getElementById(`toast-${key}`);
            if (toastEl) {
                toastEl.classList.remove("animate-slideUp");
                toastEl.classList.add("animate-slideDown");
            }
        }, 1700);
        setTimeout(() => {
            setCopied(prev => ({ ...prev, [key]: false }))
            setShowToast(prev => ({ ...prev, [key]: false }))
        }, 2000)
    }catch(err){
        console.error("Failed to copy text: ", err)
    }
}
  return (
    <div className='h-screen flex bg-[#000000]'>
        <SideBarComponents/>
        <main className='w-full p-5 flex flex-col gap-5 flex-1 min-h-screen overflow-y-auto'>
            <div className="wrapper-all mt-10 flex gap-2 justify-center items-center">
              <div className="phone-sections flex items-center justify-between w-100 bg-[#131313] px-4 py-2 rounded border border-[#00ED60]">
                <div className="left flex flex-col gap-2">  
                  <h1 className='text-[19px] text-[#00ED60] font-bold'>Nomor Telepon</h1>
                  <p className='text-[14px] text-[#606060]'>+62 877-2418-7655</p>
                </div>
                <div className="button-copy relative flex items-center justify-center">
                  {showToast["phone"] && (
                    <div id="toast-phone" className="absolute bottom-full left-1/2 z-50 mb-3 bg-[#00ED60] text-black text-[12px] font-bold px-3 py-1 rounded shadow-lg whitespace-nowrap animate-slideUp">
                      Tersalin!
                    </div>
                  )}
                  <button type='button' onClick={() => handleCopy(textCopy.phone, "phone")} className='cursor-pointer hover:bg-[#2b2b2b] p-2 rounded-full transition-all duration-300'>
                    {copied["phone"] ? <IconCheck size={22}/> : <IconCopy size={22}/>}
                  </button>
                </div>
              </div>
              <div className="email-sections flex items-center justify-between w-100 bg-[#131313] px-4 py-2 rounded border border-[#00ED60]">
                <div className="left flex flex-col gap-2">  
                  <h1 className='text-[19px] text-[#00ED60] font-bold'>Email</h1>
                  <p className='text-[14px] text-[#606060]'>tieryumarsamsudin209@gmail.com</p>
                </div>
                <div className="button-copy relative flex items-center justify-center">
                  {showToast["email"] && (
                    <div id="toast-email" className="absolute bottom-full left-1/2 z-50 mb-3 bg-[#00ED60] text-black text-[12px] font-bold px-3 py-1 rounded shadow-lg whitespace-nowrap animate-slideUp">
                      Tersalin!
                    </div>
                  )}
                  <button type='button' onClick={() => handleCopy(textCopy.email, "email")} className='cursor-pointer hover:bg-[#2b2b2b] p-2 rounded-full transition-all duration-300'>
                    {copied["email"] ? <IconCheck size={22}/> : <IconCopy size={22}/>}
                  </button>
                </div>
              </div>
            </div>
        </main>
    </div>
  )
}

export default Contact