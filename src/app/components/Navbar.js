"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const showNavbar = ["/linktree","/"].includes(pathname);

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!showNavbar) return null;

  return (
    <header className="absolute top-8 md:top-18 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-white text-slate-800 flex items-center justify-between h-18 w-full max-w-7xl px-6 rounded-full shadow-lg border border-slate-200/50 relative">
        
        <div className="flex items-center">
          <Link href="/" className="font-extrabold text-xl tracking-tight text-slate-900 flex items-center">
            <span className="text-slate-700 text-2xl">LinksTree</span><span className="text-slate-600"><img width={35} src="/tree.gif" alt="tree" /></span>
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium absolute left-50">
          
          <li 
            className="relative"
            onMouseEnter={() => setActiveDropdown('solutions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-1">
              Solutions
            </button>
            {activeDropdown === 'solutions' && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 grid gap-2 animate-in fade-in slide-in-from-top-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">Linktree For</span>
                <Link href="#" className="p-2 hover:bg-gray-50 rounded-xl transition flex items-center gap-3 text-slate-700 font-medium text-xs">
                  🎵 Musicians
                </Link>
                <Link href="#" className="p-2 hover:bg-gray-50 rounded-xl transition flex items-center gap-3 text-slate-700 font-medium text-xs">
                  🎥 YouTubers
                </Link>
                <Link href="#" className="p-2 hover:bg-gray-50 rounded-xl transition flex items-center gap-3 text-slate-700 font-medium text-xs">
                  🎙️ Podcasters
                </Link>
                <Link href="#" className="p-2 hover:bg-gray-50 rounded-xl transition flex items-center gap-3 text-slate-700 font-medium text-xs">
                  ✨ Creators
                </Link>
              </div>
            )}
          </li>

          <li 
            className="relative"
            onMouseEnter={() => setActiveDropdown('features')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-1">
              Features
            </button>
            {activeDropdown === 'features' && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 grid gap-2 animate-in fade-in slide-in-from-top-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">Core Features</span>
                <Link href="#" className="p-2 hover:bg-gray-50 rounded-xl transition text-slate-700 font-medium text-xs">
                  🔗 Link in Bio Builder
                </Link>
                <Link href="#" className="p-2 hover:bg-gray-50 rounded-xl transition text-slate-700 font-medium text-xs">
                  ⚡ Short Links & QR Codes
                </Link>
                <Link href="#" className="p-2 hover:bg-gray-50 rounded-xl transition text-slate-700 font-medium text-xs">
                  📊 Social Analytics
                </Link>
              </div>
            )}
          </li>

          <li 
            className="relative"
            onMouseEnter={() => setActiveDropdown('integrations')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-1">
              Integrations
            </button>
            {activeDropdown === 'integrations' && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 grid gap-2 animate-in fade-in slide-in-from-top-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">Popular Apps</span>
                <Link href="#" className="p-2 hover:bg-gray-50 rounded-xl transition text-slate-700 font-medium text-xs">
                  🛍️ Shopify & E-commerce
                </Link>
                <Link href="#" className="p-2 hover:bg-gray-50 rounded-xl transition text-slate-700 font-medium text-xs">
                  🎧 Spotify Music Embeds
                </Link>
                <Link href="#" className="p-2 hover:bg-gray-50 rounded-xl transition text-slate-700 font-medium text-xs">
                  📅 Calendly Booking
                </Link>
              </div>
            )}
          </li>

          <li 
            className="relative"
            onMouseEnter={() => setActiveDropdown('resources')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-1">
              Resources
            </button>
            {activeDropdown === 'resources' && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 grid gap-2 animate-in fade-in slide-in-from-top-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">Learn & Help</span>
                <Link href="#" className="p-2 hover:bg-gray-50 rounded-xl transition text-slate-700 font-medium text-xs">
                  💡 Help Centre & Guides
                </Link>
                <Link href="#" className="p-2 hover:bg-gray-50 rounded-xl transition text-slate-700 font-medium text-xs">
                  📝 Blog & Success Stories
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link href="#" className="px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors block">
              Pricing
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="px-5 py-4 rounded-xl font-semibold text-sm hover:bg-gray-100 transition">
            Log in
          </Link>
          <Link href="/signup" className="px-6 py-4 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition shadow-md">
            Sign in Free
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-gray-100 transition text-slate-800 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </nav>

      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 flex flex-col gap-4 md:hidden z-50 animate-in fade-in slide-in-from-top-4">
          <Link href="#" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-xl hover:bg-gray-100 font-medium text-slate-700">Solutions</Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-xl hover:bg-gray-100 font-medium text-slate-700">Features</Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-xl hover:bg-gray-100 font-medium text-slate-700">Integrations</Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-xl hover:bg-gray-100 font-medium text-slate-700">Resources</Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-xl hover:bg-gray-100 font-medium text-slate-700">Pricing</Link>
          <div className="border-t border-slate-100 pt-4 flex flex-col gap-2">
            <Link href="/login" className="w-full py-3 text-center rounded-xl font-semibold bg-gray-200 text-slate-800">Log in</Link>
            <Link href="/signup" className="w-full py-3 text-center rounded-xl bg-slate-900 text-white font-semibold shadow-md">Sign in Free</Link>
          </div>
        </div>
      )}
    </header>
  );
}



// "use client"
// import React from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

// export const instant = false;

// const navbar = () => {
//   const pathname = usePathname();
//   const showNavbar = ["/","/linktree"].includes(pathname)
//   return (<>{showNavbar &&
//     <nav className='bg-white flex items-center justify-between h-18 w-[80%] mx-[10%] absolute top-15 rounded-full gap-20 md:gap-35 border-black 
//     border-2  ' >
//       <div className="logo ml-8 mt-1 ">
//         <Link href={"/"}><img width={110} src="/logos.jpg" alt="logo" /></Link>
//       </div>
//       <ul className='md:flex gap-5 absolute left-45 hidden '>
//         <Link href={"/"}><li className='hover:bg-gray-100 p-2 rounded-lg font-bold text-gray-600 text-sm'>Solutions</li></Link>
//         <Link href={"/"}><li className='hover:bg-gray-100 p-2 rounded-lg font-bold text-gray-600 text-sm'>Features</li></Link>
//         <Link href={"/"}><li className='hover:bg-gray-100 p-2 rounded-lg font-bold text-gray-600 text-sm'>Integrations</li></Link>
//         <Link href={"/"}><li className='hover:bg-gray-100 p-2 rounded-lg font-bold text-gray-600 text-sm'>Resourses</li></Link>
//         <Link href={"/"}><li className='hover:bg-gray-100 p-2 rounded-lg font-bold text-gray-600 text-sm'>Pricing</li></Link>
//       </ul>
//       <div className="mr-3 flex gap-3 ">
//         <button className='hover:bg-gray-100 py-3 px-6 rounded-xl font-semibold cursor-pointer'>Log in</button>
//         <button className='bg-black text-gray-50 py-3 px-6 rounded-full font-semibold cursor-pointer'>Sign in Free</button>
//       </div>
//     </nav>
//  } </>
//   )
// }

// export default navbar
