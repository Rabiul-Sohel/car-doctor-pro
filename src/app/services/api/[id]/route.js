import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET = async(request, {params})=>{
   
    const db = await connectDB()
    const serviceCollection =  db.collection("services")
    try {
        const res = await serviceCollection.findOne({_id: params.id})
        return NextResponse.json(res)
    } catch (error) {
      return NextResponse.json({message: 'Something went wrong'})
    }

}