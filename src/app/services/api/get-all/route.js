import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET = async()=>{
    const db = await connectDB()
    const serviceCollection = db.collection("services")
    try {
        const res = await serviceCollection.find().toArray()
        return NextResponse.json({services: res})
      } catch (error) {
      return NextResponse.json({message: 'something went wrong'}, error)
      
    }

}