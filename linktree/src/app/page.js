"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [handle, sethandle] = useState("")
  const router = useRouter();

  const handleclaim = () => {
    router.push(`/${handle}`)
  }
  return (
    <main>
      
      <main className="bg-green-950 min-h-[110vh] flex items-center justify-center pt-28 pb-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-10  md:mt-0">

         
          <div className="flex flex-col text-center md:text-start items-start gap-6 text-[#d2e823]">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight  mr-0 md:mr-25">
              A link in bio build for you.
            </h1>
            <p className="text-base sm:text-lg font-medium opacity-90 leading-relaxed">
              Join 50M+ people using LinkTree for their bio. One you there Everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
            </p>

           
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-xl mt-5">
              <div className="flex items-center bg-white rounded-lg shadow-md px-5 py-3.5 sm:py-5  border border-transparent focus-within:border-slate-800">
                <span className="text-slate-400 text-sm sm:text-base font-medium mr-1">linkstree/</span>
                <input
                  value={handle}
                  onChange={(e) => sethandle(e.target.value)}
                  type="text"
                  placeholder=""
                  className="bg-transparent focus:outline-none  text-slate-900 text-sm sm:text-base w-full font-medium"
                />
              </div>
              <button
                onClick={handleclaim}
                className="bg-[#d2e823] text-slate-950 font-bold px-16 py-5 rounded-full hover:bg-lime-400 shadow-lg text-base sm:py-5 transition-all sm:text-base whitespace-nowrap cursor-pointer"
              >
                Claim your Linktree
              </button>
            </div>
          </div>

      
          <div className="flex justify-center items-center w-full">
            <div className="w-full max-w-md md:max-w-lg">
              <img
                src="/home.avif"
                alt="Linktree Hero Illustration"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>

        </div>
      </main>

      <section className="bg-blue-600 min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 md:px-12">
  <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    <div className="flex justify-center items-center w-full order-3  md:order-1">
      <div className="w-full max-w-sm md:max-w-lg">
        <img 
          src="/home2.avif" 
          alt="Create and customize your Linktree" 
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>
    </div>

    <div className="flex flex-col items-start justify-center gap-6 text-white order-2 md:order-2">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight  text-center md:text-left w-full">
        Create and customize your Linktree in minutes.
      </h2>
      <p className="text-sm sm:text-lg font-medium opacity-90 leading-relaxed text-center md:text-left w-full">
        Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let Linktree automatically enhance it to match your brand and drive more clicks.
      </p>

      <div className="w-full flex justify-center md:justify-start mt-2">
        <Link href="/linktree">
          <button className="bg-[#d2e823] text-slate-950 font-bold px-16 py-5 rounded-full hover:bg-lime-400 transition shadow-lg text-base cursor-pointer">
            Get started for free
          </button>
        </Link>
      </div>
    </div>

  </div>
</section>
    </main>
  );
}
