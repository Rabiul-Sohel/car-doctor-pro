import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async(request, {params})=>{
    const booking = await request.json()
    console.log(booking, 'from booking post api');
    const db = await connectDB()
    console.log(booking);
    const bookingCollection =  db.collection("bookings")
   
    try {
      const newBooking = await bookingCollection.insertOne(booking)
        return NextResponse.json({message: 'Booking posted successfully', newBooking})
    } catch (error) {
      return NextResponse.json({message: 'No Data Found'})  
    }

}