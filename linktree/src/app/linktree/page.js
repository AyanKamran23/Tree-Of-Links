"use client"

import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const linktree = () => {

  const [links, setlinks] = useState([{ link: "", linktext: "" }])
  const [handle, sethandle] = useState('')
  const [pic, setpic] = useState('')
  const [desc, setdesc] = useState('')
  const [success, setsuccess] = useState(false)



  const handlechange = (index, link, linktext) => {
    setlinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i == index) {
          return { link, linktext }
        }
        else {
          return item
        }
      })
    })
  }

  const addlink = () => {
    setlinks(links.concat([{ link: "", linktext: "" }]))
  }


  const submitLinks = async () => {
    const myHeader = new Headers()
    myHeader.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "links": links,
      "handle": handle,
      "pic": pic,
      "desc": desc,

    });

    const requestOptions = {
      method: "POST",
      headers: myHeader,
      body: raw,
      redirect: "follow"
    }
    try {
      const r = await fetch("http://localhost:3000/api/add", requestOptions)
      const result = await r.json()

      if (result.success) {
        setsuccess(true)
        toast.success(result.message)
        
        setlinks([{ link: "", linktext: "" }])
        setpic("")
        setdesc("")
       
        
      } else {
        toast.error(result.message)
      }


    }
    catch (error) {
      console.error("Error:", error);
      alert("Something Went Wrong")

    }

  }

  return (
    <>
      <ToastContainer />
      <main className=" mx-auto max-w-6xl px-4 sm:px-6 pt-6 sm:pt-12 pb-16 sm:pb-24 mt-30">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">


          <div className="space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl leading-tight">
                Create your LinksTree
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-700">
                Bring together your content, links, and social profiles in one simple link.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">

              <div className="space-y-1.5 sm:space-y-2">
                <label className="block text-xs sm:text-sm font-semibold text-slate-800">
                  Step 1: Claim your Handle
                </label>
                <div className="flex rounded-xl bg-white p-2 shadow-sm">
                  <input
                    type="text"
                    placeholder="Choose a Handle"
                    value={handle || ''}
                    onChange={e => { sethandle(e.target.value) }}
                    className="w-full bg-transparent px-2 sm:px-3 py-1.5 text-xs sm:text-sm outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label className="block text-xs sm:text-sm font-semibold text-slate-800">
                  Step 2: Add Links
                </label>
                {links && links.map((item, index) => {
                  return <div key={index} className="flex flex-col gap-2.5 sm:gap-3 rounded-xl bg-white p-3 shadow-sm sm:flex-row">
                    <input
                      type="text"
                      placeholder="Enter link text"
                      value={item.linktext || ''}
                      onChange={e => { handlechange(index, item.link, e.target.value) }}
                      className="w-full rounded-lg bg-slate-50 px-3 py-2 text-xs sm:text-sm outline-none border border-slate-200"
                    />
                    <input
                      type="text"
                      placeholder="Enter link"
                      value={item.link || ''}
                      onChange={e => { handlechange(index, e.target.value, item.linktext) }}
                      className="w-full rounded-lg bg-slate-50 px-3 py-2 text-xs sm:text-sm outline-none border border-slate-200"
                    />
                  </div>

                })}
                <button onClick={() => { addlink() }} className="disabled:opacity-10 w-full sm:w-auto rounded-lg bg-slate-900 px-4 py-2 text-xs sm:text-sm font-medium text-white hover:bg-slate-800 transition">
                  + Add Link
                </button>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label className="block text-xs sm:text-sm font-semibold text-slate-800">
                  Step 3: Add Picture and Description
                </label>
                <div className="rounded-xl bg-white p-2 shadow-sm">
                  <input
                    type="text"
                    placeholder="Enter link to your Picture"
                    value={pic || ''}
                    onChange={e => { setpic(e.target.value) }}
                    className="w-full rounded-lg bg-slate-50 px-3 py-2 text-xs sm:text-sm outline-none border border-slate-200"
                  />
                  <input
                    type="text"
                    placeholder="Enter Description"
                    value={desc || ''}
                    onChange={e => { setdesc(e.target.value) }}
                    className=" mt-3 w-full rounded-lg bg-slate-50 px-3 py-2 text-xs sm:text-sm outline-none border border-slate-200"
                  />
                </div>
              </div>


              <div className="pt-2 flex gap-10 flex-col md:flex-row ">
                <button
                  onClick={() => submitLinks()}
                  disabled={pic == "" || handle == "" || links[0].linktext == ""}
                  className="disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto rounded-full bg-slate-900 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:bg-slate-800 active:scale-95">
                  Create your LinksTree
                </button>
                {success && <Link href={`/${handle}`} onClick={()=>{sethandle("")}} disabled={pic == "" || handle == "" || links[0].linktext == ""} className='disabled:hidden px-6 py-3 bg-linear-to-r text-center from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer '>Check your Linkstree</Link>
                
                }
              </div>
            </div>
          </div>


          <div className="relative flex justify-center mt-4 lg:mt-0">
            <div className="relative h-85 sm:h-90 w-full max-w-85 sm:max-w-90 rounded-2xl bg-purple-900 p-6 shadow-2xl flex items-center justify-center overflow-hidden">

              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-white shadow-md text-xl sm:text-2xl">
                🎮
              </div>
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-sky-400 shadow-md text-white text-[10px] sm:text-xs font-bold">
                TikTok
              </div>
              <div className="absolute bottom-12 right-4 sm:bottom-16 sm:right-6 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-sky-500 shadow-md text-white text-[10px] sm:text-xs font-bold">
                Twitter
              </div>

              <div className="text-center text-purple-200">
                <div className="mx-auto mb-3 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-purple-800 text-2xl sm:text-3xl shadow-inner">
                  ✨
                </div>
                <p className="text-xs sm:text-sm font-medium">Your Profile Preview</p>
              </div>

              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 rounded-xl bg-white/90 backdrop-blur px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg">
                <p className="text-[11px] sm:text-xs font-bold text-slate-900">GAME OVER 🕹️</p>
                <p className="text-[9px] sm:text-[10px] text-slate-500">Active Link</p>
              </div>
            </div>
          </div>

        </div>
      </main>

    </>
  )
}

export default linktree



