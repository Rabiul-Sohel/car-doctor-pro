import { connectDB } from "@/lib/connectDB";

export const POST = async(request, {params})=>{
    const booking = await request.json()
    console.log(booking, 'from booking post api');
    const db = await connectDB()
    console.log(booking);
    const bookingCollection =  db.collection("bookings")
   
    try {
      const newBooking = await bookingCollection.insertOne(booking)
        return Response.json({message: 'Booking posted successfully', newBooking})
    } catch (error) {
      console.log(error);  
    }

}