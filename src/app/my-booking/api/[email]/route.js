import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET = async(request, {params})=>{
   
    const db = await connectDB()
    const bookingCollection =  db.collection("bookings")
    try {
        const res = await bookingCollection.find({email: params.email}).toArray()
        return NextResponse.json(res)
      } catch (error) {
      return NextResponse.json({message: 'No Data Found'})
      
    }

}