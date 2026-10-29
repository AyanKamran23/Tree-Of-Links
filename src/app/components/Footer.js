"use client"

import Link from 'next/link';

export default function Footer() {
  
  return (
    <footer className="w-full bg-slate-950 border-t border-purple-900/30 text-slate-400 py-6 px-4 md:px-8 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-white tracking-wide bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text ">
            Linkstree
          </span>
          <span className="text-xs text-slate-600">|</span>
          <p className="text-xs text-slate-400">
            &copy;  2026 All rights reserved.
          </p>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex items-center gap-6 text-xs md:text-sm">
          <Link href="/" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link href="#" className="hover:text-purple-400 transition-colors">
            Privacy
          </Link>
          <Link href="#" className="hover:text-purple-400 transition-colors">
            Terms
          </Link>
          <Link href="#" className="hover:text-purple-400 transition-colors">
            Support
          </Link>
        </div>

      </div>
    </footer>
  );
}