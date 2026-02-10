'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image";
import { useEffect } from "react";
import {FileUser, Instagram, Github, Linkedin, MapPinHouse, School} from "lucide-react"
import emailjs from "@emailjs/browser";

type SkillBarProps = {
  icon: string
  name: string
  percent: number
}

function SkillBar({ icon, name, percent }: SkillBarProps) {
  return (
    <div className="bg-[#ffffff] border-2 border-[#00b7fa] rounded-lg p-5 flex gap-4 items-center">
      <Image src={icon} alt={name} width={55} height={55} />
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <h3 className="font-bold text-[#000000]">{name}</h3>
          <span className="text-sm text-[#00b7fa] font-semibold">
            {percent}%
          </span>
        </div>
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-2 bg-[#00b7fa] rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${percent}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.currentTarget,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.currentTarget.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.error(error);
        }
      );
  };

  const {scrollY} = useScroll()
  const background = useTransform(
    scrollY,
    [0, 80],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,0.50)']
  )
  const blur = useTransform(
    scrollY,
    [0, 80],
    ['blur(0px)', 'blur(12px)']
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container-body bg-linear-to-r from-[#000000] to-[#00698f8f] w-full flex justify-center flex-col">
      <motion.nav style={{backdropFilter: blur, backgroundColor: background}} className="flex justify-between px-4 py-2.5 items-center sticky top-0 z-50">
        <div className="logo">
          <h1 className="font-extrabold text-[30px] text-[#00b7fa]">Portofolio</h1>
        </div>
        <div className="menu-nav flex gap-3">
          <a href="#home" className="text-[17px] hover:text-[#00b7fa] transition duration-300 font-[Fredoka]">Home</a>
          <a href="#about-me" className="text-[17px] hover:text-[#00b7fa] transition duration-300 font-[Fredoka]">About Me</a>
          <a href="#projects" className="text-[17px] hover:text-[#00b7fa] transition duration-300 font-[Fredoka]">Projects</a>
          <a href="#techstack" className="text-[17px] hover:text-[#00b7fa] transition duration-300 font-[Fredoka]">TechStack</a>
          <a href="#contact" className="text-[17px] hover:text-[#00b7fa] transition duration-300 font-[Fredoka]">Contact</a>
        </div>
      </motion.nav>
      <main>
        <motion.div id="home" className="first-page flex justify-between items-center px-40 min-h-screen" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 2, y: 0 }} transition={{ duration: 1.5, ease: "easeOut" }}>
          <div className="text-information flex flex-col gap-2.5">
            <h4 className="text-[25px] font-semibold">Hello!, Im Tiery Umar Samsudin</h4>
            <motion.h1 className="font-extrabold text-[50px] text-[#00b7fa]">Front-end Developer</motion.h1>
            <p className="font-[Fredoka] text-[19px]">Im focused on creating clean code, efficient systems, and meaningful digital experiences. <br />
              I build modern web applications using frameworks like Next.js and Laravel, with an emphasis <br />
               on performance, scalability, and maintainable code.
            </p>
            <div className="button-wrapper flex gap-3 items-center mt-2">
              <div className="cv-downloader">
                <a href="/cv/Tiery-Umar-Samsudin-CV.pdf" download="Tiery-Umar-Samsudin-CV.pdf">
                  <button className="flex gap-1.5 border-2 border-[#00b7fa] text-[#00b7fa] p-2.5 rounded cursor-pointer hover:bg-[#008fb2] transition-all duration-700 hover:text-[#ffffff]">Download CV <FileUser /></button>
                </a>
              </div>
              <div className="medsos-link flex gap-2">
                <a className="hover:text-[#00b7fa] transition-all duration-500" href="https://www.instagram.com/_tiery2207_?igsh=c2MzMnN5YWRycXp4" target="_blank"><Instagram /></a>
                <a className="hover:text-[#00b7fa] transition-all duration-500" href="https://github.com/TieryUmarSamsudin2209" target="_blank"><Github /></a>
                <a className="hover:text-[#00b7fa] transition-all duration-500" href="#"><Linkedin /></a>
              </div>
            </div>
          </div>
          <div className="image">
            <Image src="/Image/Foto Profil Formal.png" alt="Image Profile" width={300} height={300} className="rounded-[50%] border-4 border-[#00b7fa]" />
          </div>
        </motion.div>
        <motion.div id="about-me" className="about-me-page relative min-h-screen overflow-hidden">
        <motion.div className="absolute left-0 top-0 h-full w-[40%] bg-cover bg-center" style={{backgroundImage: "url('/Image/Foto Profil Formal.png')"}} initial={{ opacity: 0, x: -70 }} animate={{ opacity: 8, x: 0 }} transition={{ duration: 1.5, ease: "easeOut" }}/>
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#000000] to-[#000000]" />
            <div className="relative z-10 min-h-screen flex items-end gap-5 justify-center px-40 text-white flex-col">
              <div className="max-w-xl text-right">
                <h1 className="text-[45px] font-extrabold text-[#00b7fa] mb-4">About Me</h1>
                <p className="font-[Fredoka] text-[18px] leading-relaxed">
                  I am a vocational high school student majoring in Software and Game Development (PPLG), aspiring to become a software developer.
                  I understand the basics of programming languages like HTML, CSS, JavaScript, and modern frameworks like Laravel and NextJS.
                </p>
              </div>
              <div className="personal-information font-[Fredoka] flex gap-4 flex-wrap flex-col">
                <div className="card-information flex items-center gap-3 p-2.5 bg-[#0f0f0f] rounded border-2 border-[#00b7fa] w-150">
                  <MapPinHouse className="size-12.5"/>
                  <div className="text-information">
                    <h5 className="font-[Orbitron] font-bold text-[#00b7fa] text-[20px]">Address</h5>
                    <p>Jl. Soekarno Hatta No. 11, Kota Bandung</p>
                  </div>
                </div>
                <div className="card-information flex items-center gap-3 p-2.5 bg-[#0f0f0f] rounded border-2 border-[#00b7fa] w-150">
                  <School className="size-12.5"/>
                  <div className="text-information">
                    <h5 className="font-[Orbitron] font-bold text-[#00b7fa] text-[20px]">School</h5>
                    <p>SMK Prakarya Internasional</p>
                  </div>
                </div>
              </div>
            </div>
        </motion.div>
        <motion.div id="projects" className="bg-[#0e0e0e] flex flex-col gap-3 p-3.5">
          <div className="title-page flex justify-center py-2.5">
             <h1 className="text-[40px] font-extrabold text-[#00b7fa]">Projects</h1>
          </div>
          <div className="title-projects flex text-center justify-center my-4">
            <h3 className="font-bold">~Web-based Library Application with Next.JS and Laravel~</h3>
          </div>
          <div className="image-projects">
            <div className="image-card grid grid-cols-2 gap-4 justify-items-center mx-auto max-w-375">
              <Image className="rounded-lg border-2 hover:border-2 hover:border-[#00b7fa] transition-all duration-300" src={`/Image/Laravel Library Page.png`} alt='' width={800} height={600} />
              <Image className="rounded-lg border-2 hover:border-2 hover:border-[#00b7fa] transition-all duration-300" src={`/Image/Next JS Library Page.png`} alt='' width={800} height={600} />
            </div>
          </div>
          <div className="project-description flex text-center font-[Fredoka] justify-center">
            <p className="text-[20px]">A full-stack web application developed using Next.js and Laravel, featuring RESTful APIs, complete CRUD operations, and a responsive UI built with Tailwind CSS. <br />
              The system is designed to be scalable, maintainable, and user-friendly.
            </p>
          </div>
        </motion.div>
        <motion.div id="techstack" className="bg-[#000000] min-h-screen px-40 py-16" >
          <h1 className="text-[40px] font-extrabold text-[#00b7fa] text-center mb-12">TechStack</h1>
          <motion.div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <SkillBar icon="/Image/Html-Logo.png" name="HTML" percent={98}/>
            <SkillBar icon="/Image/CSS-Logo.png" name="CSS" percent={75}/>
            <SkillBar icon="/Image/JavaScript-Logo.png" name="JavaScript" percent={5}/>
            <SkillBar icon="/Image/PHP-Logo.png" name="PHP" percent={62}/>
            <SkillBar icon="/Image/MySQL-Logo.png" name="MySQL" percent={80}/>
            <SkillBar icon="/Image/Laravel-Logo.png" name="Laravel" percent={90}/>
            <SkillBar icon="next.svg" name="Next.JS" percent={85} />
            <SkillBar icon="/Image/Tailwind-CSS-Logo.png" name="Tailwind CSS" percent={70}/>
          </motion.div>
        </motion.div>
        <motion.div id="contact" className="bg-[#0b0b0b] min-h-screen px-40 py-20">
          <h1 className="text-[40px] font-extrabold text-[#00b7fa] text-center mb-12">Contact Me</h1>
          <div className="flex justify-center">
            <form onSubmit={sendEmail} className="bg-[#0f0f0f] p-8 rounded-xl border-2 border-[#00b7fa] flex flex-col gap-5 w-150"id="contact-form">
              <div>
                <label className="block mb-1 text-sm text-[#00b7fa]">Email</label>
                <input type="email" name="email" required className="w-full px-4 py-2 rounded bg-black border border-gray-600 focus:border-[#00b7fa] outline-none" placeholder="example@email.com"/>
              </div>
              <div>
                <label className="block mb-1 text-sm text-[#00b7fa]">Name</label>
                <input type="text" name="name" required className="w-full px-4 py-2 rounded bg-black border border-gray-600 focus:border-[#00b7fa] outline-none" placeholder="Your full name"/>
              </div>
              <div>
                <label className="block mb-1 text-sm text-[#00b7fa]">Company (Optional)</label>
                <input type="text" name="company" className="w-full px-4 py-2 rounded bg-black border border-gray-600 focus:border-[#00b7fa] outline-none" placeholder="Company name"/>
              </div>
              <div>
                <label className="block mb-1 text-sm text-[#00b7fa]">Message</label>
                <textarea name="message" rows={5} required className="w-full px-4 py-2 rounded bg-black border border-gray-600 focus:border-[#00b7fa] outline-none resize-none" placeholder="Write your message here..."/>
              </div>
              <button type="submit" className="mt-3 py-2 rounded-lg border-2 border-[#00b7fa] text-[#00b7fa] font-bold hover:bg-[#00b7fa] hover:text-black transition-all duration-300">Send Message</button>
            </form>
          </div>
        </motion.div>
      </main>
      <footer>
        <div className="footer-page">
          <div className="top-footer">
            <div className="logo">
              <Image src={`/Image/Logo Web Porto.png`} alt='TierySpace' width={100} height={100} className="rounded-[50%]"/>
              <h4>TierySpace</h4>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
