import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb"

export const DELETE = async (request, {params}) =>{
    const db = await connectDB()
    const bookingCollection = db.collection('bookings')
    try {
        const res = await bookingCollection.deleteOne({_id: new ObjectId(params.id)})
        return Response.json(res)
    } catch (error) {
        return Response.json({message: 'something went wrong'})
    }
}
export const GET = async (request, {params}) =>{
    const db = await connectDB()
    const bookingCollection = db.collection('bookings')
    try {
        const res = await bookingCollection.findOne({_id: new ObjectId(params.id)})
        return Response.json(res)
    } catch (error) {
        return Response.json({message: 'something went wrong'})
    }
}
export const PATCH = async (request, {params}) =>{
    const updatedBooking = await request.json()
    const db = await connectDB()
    const bookingCollection = db.collection('bookings')
    try {
        const res = await bookingCollection.updateOne({_id: new ObjectId(params.id)},{
            $set: {
               ...updatedBooking
            }
        })
        return Response.json(res)
    } catch (error) {
        return Response.json({message: 'something went wrong'})
    }
}