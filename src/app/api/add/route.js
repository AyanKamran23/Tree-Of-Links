import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
   const body = await request.json()

   console.log(body.handle);
   
    const client = await clientPromise;
    const db = client.db("linkstree")
    const collection = db.collection("links")

    const doc = await collection.findOne({handle: body.handle})
    if (doc) {
       return NextResponse.json({success: false, error:true, message:"This LinksTree is Already Exists!", result: null})
    }


   const result = await collection.insertOne(body)
   return NextResponse.json({success: true, error:false, message:"Your LinksTree has been Generated!.", result: result })

}