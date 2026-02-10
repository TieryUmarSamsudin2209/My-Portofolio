'use client'

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import Image from "next/image";
import { useEffect, useState } from "react";
import {FileUser, Instagram, Github, Linkedin, MapPinHouse, School, Menu, X} from "lucide-react"
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

const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" }
  }
}


export default function Home() {
  const {scrollY} = useScroll()
  const [activeSection, setActiveSection] = useState("home")
  const [isSending, setIsSending] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const sections = ["home", "about-me", "projects", "techstack", "contact"]

    for (const id of sections) {
      const el = document.getElementById(id)
      if (!el) continue

      const rect = el.getBoundingClientRect()
      if (rect.top <= 120 && rect.bottom >= 120) {
        setActiveSection(id)
        break
      }
    }
  })

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    console.log("Form submitted!");
    console.log("Form data:", {
      email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement)?.value || '',
      name: (e.currentTarget.elements.namedItem('name') as HTMLInputElement)?.value || '',
      company: (e.currentTarget.elements.namedItem('company') as HTMLInputElement)?.value || '',
      message: (e.currentTarget.elements.namedItem('message') as HTMLTextAreaElement)?.value || ''
    });

    // EmailJS Configuration
    const serviceId = "service_f92hnqq";
    const templateId = "template_w5kpnws";
    const publicKey = "WuTL1ADKpsyykslLw";

    console.log("Using EmailJS config:", { serviceId, templateId, publicKey });

    // Gunakan sendForm yang lebih reliable
    emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey)
      .then(
        (result) => {
          console.log("✅ Email sent successfully!");
          console.log("Result:", result);
          console.log("Status:", result.status);
          console.log("Text:", result.text);
          
          alert("🎉 Message sent successfully! I'll get back to you soon.");
          e.currentTarget.reset();
          setIsSending(false);
        },
        (error) => {
          console.error("❌ Email sending failed!");
          console.error("Full error:", error);
          console.error("Error text:", error.text);
          console.error("Error status:", error.status);
          console.error("Error message:", error.message);
          
          // Cek apakah ini error dari EmailJS atau network
          let errorMessage = "Failed to send message. ";
          
          if (error.text) {
            console.log("Error text contains:", error.text);
            
            // Parsing error message yang lebih spesifik
            if (error.text.includes("Invalid user ID") || error.text.includes("publicKey")) {
              errorMessage = "Invalid EmailJS API Key. Please check your public key.";
            } else if (error.text.includes("Template not found")) {
              errorMessage = "Template ID is incorrect. Check your template ID.";
            } else if (error.text.includes("Service not found")) {
              errorMessage = "Service ID is incorrect. Check your service ID.";
            } else if (error.text.includes("Forbidden")) {
              errorMessage = "Access forbidden. Your EmailJS account might need verification.";
            } else if (error.text.includes("Bad Request")) {
              errorMessage = "Bad request. Check if your template variables match the form fields.";
            } else {
              errorMessage += `Error: ${error.text}`;
            }
          } else if (error.status === 0) {
            errorMessage = "Network error. Please check your internet connection.";
          } else if (error.status) {
            errorMessage = `Server error (Status ${error.status}). Please try again.`;
          }
          
          alert(errorMessage);
          setIsSending(false);
          
          // Cek juga di dashboard EmailJS
          console.log("Please check:");
          console.log("1. EmailJS Dashboard: https://dashboard.emailjs.com/");
          console.log("2. Service ID matches: service_f92hnqq");
          console.log("3. Template ID matches: template_w5kpnws");
          console.log("4. Template variables match form field names");
        }
      );
  };

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
    // Inisialisasi EmailJS
    emailjs.init("WuTL1ADKpsyykslLw");
    console.log("EmailJS initialized with key: WuTL1ADKpsyykslLw");
    
    // Cek apakah EmailJS terinisialisasi
    console.log("EmailJS initialized successfully");
    
    // Scroll ke atas saat pertama kali load
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div className="container-body bg-linear-to-r from-[#000000] to-[#00698f8f] w-full flex justify-center flex-col">
      <motion.nav style={{backdropFilter: blur, backgroundColor: background}} className="flex justify-between px-4 py-2.5 items-center sticky top-0 z-50">
        <div className="logo">
          <h1 className="font-extrabold text-[24px] sm:text-[30px] text-[#00b7fa]">Portofolio</h1>
        </div>
        <div className="hidden md:flex menu-nav gap-3">
          <a
            href="#home"
            className={`text-[17px] font-[Fredoka] transition duration-300
              ${activeSection === "home"
                ? "text-[#00b7fa] border-b-2 border-[#00b7fa]"
                : "hover:text-[#00b7fa]"
              }
            `}
          >
            Home
          </a>
          <a
            href="#about-me"
            className={`text-[17px] font-[Fredoka] transition duration-300
              ${activeSection === "about-me"
                ? "text-[#00b7fa] border-b-2 border-[#00b7fa]"
                : "hover:text-[#00b7fa]"
              }
            `}
          >
            About Me
          </a>
          <a
            href="#projects"
            className={`text-[17px] font-[Fredoka] transition duration-300
              ${activeSection === "projects"
                ? "text-[#00b7fa] border-b-2 border-[#00b7fa]"
                : "hover:text-[#00b7fa]"
              }
            `}
          >
            Projects
          </a>
          <a
            href="#techstack"
            className={`text-[17px] font-[Fredoka] transition duration-300
              ${activeSection === "techstack"
                ? "text-[#00b7fa] border-b-2 border-[#00b7fa]"
                : "hover:text-[#00b7fa]"
              }
            `}
          >
            TechStack
          </a>
          <a
            href="#contact"
            className={`text-[17px] font-[Fredoka] transition duration-300
              ${activeSection === "contact"
                ? "text-[#00b7fa] border-b-2 border-[#00b7fa]"
                : "hover:text-[#00b7fa]"
              }
            `}
          >
            Contact
          </a>
        </div>
        <button
          className="md:hidden text-[#00b7fa]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black bg-opacity-90 md:hidden flex flex-col items-center py-4"
          >
            <a
              href="#home"
              className={`text-[17px] font-[Fredoka] transition duration-300 py-2
                ${activeSection === "home"
                  ? "text-[#00b7fa] border-b-2 border-[#00b7fa]"
                  : "hover:text-[#00b7fa]"
                }
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about-me"
              className={`text-[17px] font-[Fredoka] transition duration-300 py-2
                ${activeSection === "about-me"
                  ? "text-[#00b7fa] border-b-2 border-[#00b7fa]"
                  : "hover:text-[#00b7fa]"
                }
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </a>
            <a
              href="#projects"
              className={`text-[17px] font-[Fredoka] transition duration-300 py-2
                ${activeSection === "projects"
                  ? "text-[#00b7fa] border-b-2 border-[#00b7fa]"
                  : "hover:text-[#00b7fa]"
                }
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#techstack"
              className={`text-[17px] font-[Fredoka] transition duration-300 py-2
                ${activeSection === "techstack"
                  ? "text-[#00b7fa] border-b-2 border-[#00b7fa]"
                  : "hover:text-[#00b7fa]"
                }
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              TechStack
            </a>
            <a
              href="#contact"
              className={`text-[17px] font-[Fredoka] transition duration-300 py-2
                ${activeSection === "contact"
                  ? "text-[#00b7fa] border-b-2 border-[#00b7fa]"
                  : "hover:text-[#00b7fa]"
                }
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </motion.nav>
      <main>
        <motion.div id="home" className="first-page flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-16 lg:px-40 min-h-screen" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: "easeOut" }}>
          <div className="text-information flex flex-col gap-2.5 text-center md:text-left">
            <h4 className="text-[20px] sm:text-[22px] md:text-[25px] font-semibold">Hello!, Im Tiery Umar Samsudin</h4>
            <motion.h1 className="font-extrabold text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] text-[#00b7fa]">Front-end Developer</motion.h1>
            <p className="font-[Fredoka] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px]">Im focused on creating clean code, efficient systems, and meaningful digital experiences. <br />
              I build modern web applications using frameworks like Next.js and Laravel, with an emphasis <br />
               on performance, scalability, and maintainable code.
            </p>
            <div className="button-wrapper flex flex-col sm:flex-row gap-3 items-center mt-2">
              <div className="cv-downloader">
                <a href="/cv/Tiery-Umar-Samsudin-CV.pdf" download="Tiery-Umar-Samsudin-CV.pdf">
                  <button className="flex gap-1.5 border-2 border-[#00b7fa] text-[#00b7fa] p-2.5 rounded cursor-pointer hover:bg-[#008fb2] transition-all duration-700 hover:text-[#ffffff] text-[14px] sm:text-[16px]">Download CV <FileUser /></button>
                </a>
              </div>
              <div className="medsos-link flex gap-2">
                <a className="hover:text-[#00b7fa] transition-all duration-500" href="https://www.instagram.com/_tiery2207_?igsh=c2MzMnN5YWRycXp4" target="_blank"><Instagram /></a>
                <a className="hover:text-[#00b7fa] transition-all duration-500" href="https://github.com/TieryUmarSamsudin2209" target="_blank"><Github /></a>
              </div>
            </div>
          </div>
          <div className="image mt-8 md:mt-0">
            <Image src="/Image/Foto Profil Formal.png" alt="Image Profile" width={250} height={250} className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] rounded-[50%] border-4 border-[#00b7fa]" />
          </div>
        </motion.div>
        <motion.div id="about-me" className="about-me-page relative min-h-screen overflow-hidden">
        <motion.div className="absolute left-0 top-0 h-full w-full md:w-[40%] bg-cover bg-center" style={{backgroundImage: "url('/Image/Foto Profil Formal.png')"}} initial={{ opacity: 0, x: -70 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.5, ease: "easeOut" }}/>
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#000000] to-[#000000]" />
            <div className="relative z-10 min-h-screen flex items-end gap-5 justify-center px-4 sm:px-8 md:px-16 lg:px-40 text-white flex-col">
              <div className="max-w-xl text-center md:text-right">
                <h1 className="text-[30px] sm:text-[40px] md:text-[45px] font-extrabold text-[#00b7fa] mb-4">About Me</h1>
                <p className="font-[Fredoka] text-[16px] sm:text-[18px] leading-relaxed">
                  I am a vocational high school student majoring in Software and Game Development (PPLG), aspiring to become a software developer.
                  I understand the basics of programming languages like HTML, CSS, JavaScript, and modern frameworks like Laravel and NextJS.
                </p>
              </div>
              <div className="personal-information font-[Fredoka] flex gap-4 flex-wrap flex-col md:flex-row">
                <div className="card-information flex items-center gap-3 p-2.5 bg-[#0f0f0f] rounded border-2 border-[#00b7fa] w-full md:w-150">
                  <MapPinHouse className="size-12.5"/>
                  <div className="text-information">
                    <h5 className="font-[Orbitron] font-bold text-[#00b7fa] text-[18px] sm:text-[20px]">Address</h5>
                    <p className="text-[14px] sm:text-[16px]">Jl. Soekarno Hatta No. 11, Kota Bandung</p>
                  </div>
                </div>
                <div className="card-information flex items-center gap-3 p-2.5 bg-[#0f0f0f] rounded border-2 border-[#00b7fa] w-full md:w-150">
                  <School className="size-12.5"/>
                  <div className="text-information">
                    <h5 className="font-[Orbitron] font-bold text-[#00b7fa] text-[18px] sm:text-[20px]">School</h5>
                    <p className="text-[14px] sm:text-[16px]">SMK Prakarya Internasional</p>
                  </div>
                </div>
              </div>
            </div>
        </motion.div>
        <motion.div id="projects" className="bg-[#0e0e0e] flex flex-col gap-3 p-4 sm:p-6 md:p-8">
          <div className="title-page flex justify-center py-2.5">
             <h1 className="text-[30px] sm:text-[35px] md:text-[40px] font-extrabold text-[#00b7fa]">Projects</h1>
          </div>
          <div className="title-projects flex text-center justify-center my-4">
            <h3 className="font-bold text-[16px] sm:text-[18px] md:text-[20px]">~Web-based Library Application with Next.JS and Laravel~</h3>
          </div>
          <div className="image-projects">
            <div className="image-card grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center mx-auto max-w-full">
              <Image className="rounded-lg border-2 hover:border-2 hover:border-[#00b7fa] transition-all duration-300 w-full h-auto" src={`/Image/Laravel Library Page.png`} alt='Laravel Library Project' width={800} height={600} />
              <Image className="rounded-lg border-2 hover:border-2 hover:border-[#00b7fa] transition-all duration-300 w-full h-auto" src={`/Image/Next JS Library Page.png`} alt='Next.js Library Project' width={800} height={600} />
            </div>
          </div>
          <div className="project-description flex text-center font-[Fredoka] justify-center px-4">
            <p className="text-[16px] sm:text-[18px] md:text-[20px]">A full-stack web application developed using Next.js and Laravel, featuring RESTful APIs, complete CRUD operations, and a responsive UI built with Tailwind CSS. <br />
              The system is designed to be scalable, maintainable, and user-friendly.
            </p>
          </div>
        </motion.div>
        <motion.div id="techstack" className="bg-[#000000] min-h-screen px-4 sm:px-8 md:px-16 lg:px-40 py-16 flex flex-col" >
          <h1 className="text-[30px] sm:text-[35px] md:text-[40px] font-extrabold text-[#00b7fa] text-center mb-8 sm:mb-12">TechStack</h1>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
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
        <motion.div id="contact" className="bg-[#0b0b0b] min-h-screen px-4 sm:px-6 md:px-20 lg:px-40 py-20">
          <h1 className="text-[30px] sm:text-[35px] md:text-[40px] font-extrabold text-[#00b7fa] text-center mb-8 sm:mb-12">Contact Me</h1>
          <div className="flex justify-center">
            <form onSubmit={sendEmail} className="w-full max-w-xl bg-[#0f0f0f] p-4 sm:p-6 md:p-8 rounded-xl border-2 border-[#00b7fa] " id="contact-form">
              <div className="mb-4">
                <label className="block mb-1 text-sm text-[#00b7fa]">Email *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded bg-black border border-gray-600 focus:border-[#00b7fa] outline-none text-white text-sm sm:text-base"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-sm text-[#00b7fa]">Name *</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded bg-black border border-gray-600 focus:border-[#00b7fa] outline-none text-white text-sm sm:text-base"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-sm text-[#00b7fa]">Company (Optional)</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="w-full px-4 py-3 rounded bg-black border border-gray-600 focus:border-[#00b7fa] outline-none text-white text-sm sm:text-base"
                  placeholder="Enter your company name"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-sm text-[#00b7fa]">Message *</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded bg-black border border-gray-600 focus:border-[#00b7fa] outline-none resize-none text-white text-sm sm:text-base"
                  placeholder="Description"
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className={`w-full py-3 rounded-lg border-2 border-[#00b7fa] text-[#00b7fa] font-bold transition-all duration-300 text-sm sm:text-base ${isSending ? "opacity-50 cursor-not-allowed" : "hover:bg-[#00b7fa] hover:text-black"}`}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </main>
      <footer>
        <div className="footer-page bg-[#000000] p-3.5 text-center">
          <p className="text-xs md:text-sm font-[Fredoka]">&copy; 2025 TierySpace. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}