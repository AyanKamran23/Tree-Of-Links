
import Link from "next/link";
import Image from "next/image";
import {connection} from "next/server"
import clientPromise from "../lib/mongodb";
import { notFound } from "next/navigation";

export const instant = false;

export default async function Page({ params }) {
    await connection();

    const handle = (await params).handle;

    const client = await clientPromise;
    const db = client.db("linkstree");
    const collection = db.collection("links");
    const item = await collection.findOne({ handle: handle });

     if (!item) {
    notFound();
  }


    return <>
          <div className="min-h-screen bg-linear-to-br from-indigo-100 via-purple-50 to-pink-100 flex justify-center items-start py-12 px-4 sm:px-6">
      <div className="max-w-md w-full mx-auto flex flex-col items-center space-y-6">
        
      
        <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-xl border-4 border-white">
          <Image
            src={(item.pic && item.pic.startsWith("http")) ? item.pic : "/defaultpfp.png"}     
            alt={item.handle || "profile"}
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-xl font-bold text-slate-800 tracking-wide">
          @{item.handle}
        </h1>

        <p className="text-sm text-slate-600 text-center max-w-xs overflow-hidden">
         {item.desc}
        </p>

        <div className="w-full flex flex-col space-y-4 mt-4 hover:scale-x-102 transition-transform duration-200 ">
          {item.links && item.links.map((item, index) => {
            
            if (!item.link || item.link.trim() === "") return null; 

           return(<Link
              key={index}
              href={item.link.startsWith("http") ? item.link : `https://${item.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/80 backdrop-blur-md hover:bg-white text-slate-800 font-medium py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center border border-white/40 flex items-center justify-center group"
            >
              <span className="group-hover:scale-109 transition-transform duration-200">
                {item.linktext} <span className="absolute right-5 text-slate-300 ">:</span>
              </span>
            </Link>)})}
        </div>
        <Link href={"/"}> 
            <div className="pt-8 text-xs text-slate-400 font-semibold tracking-wider uppercase">
              HomePage
            </div>
        </Link>
        
      </div>
    </div>
    </>
}

