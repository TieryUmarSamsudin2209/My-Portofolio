import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#000000]">
      <main className="flex flex-col justify-center items-center gap-3">
        <div className="logo flex justify-center items-center flex-col">
          <Image src={`/favicon-portofolio-website.svg`} alt='Portofolio Tiery Umar Samsudin' width={200} height={200} />
          <h1 className="font-bold text-[25px] text-[#00ED60]">TIERY UMAR SAMSUDIN</h1>
        </div>
        <div className="main-text text-center w-250 flex flex-col gap-2">
          <p>{`Welcome! I'm a junior programmer working in the website development field, working as a front-end developer. I'm proficient in HTML, CSS, and JavaScript. I also use React and NextJS as my frameworks, and Tailwind CSS for styling.`}</p>
          <p>For more about me, please click the button below.</p>
        </div>
        <div className="button-more-about-me mt-5">
          <a href="/home" className="px-5 py-2 bg-[#FFFFFF] rounded-full text-[#00ED60] font-bold hover:bg-[#EFEFEF] transition-all duration-300">More about me</a>
        </div>
      </main>
    </div>
  );
}
