import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const DELETE = async (request, {params}) =>{
    const db = await connectDB()
    const bookingCollection = db.collection('bookings')
    try {
        const res = await bookingCollection.deleteOne({_id: new ObjectId(params.id)})
        return NextResponse.json(res)
    } catch (error) {
        return NextResponse.json({message: 'something went wrong'})
    }
}
export const GET = async (request, {params}) =>{
    const db = await connectDB()
    const bookingCollection = db.collection('bookings')
    try {
        const res = await bookingCollection.findOne({_id: new ObjectId(params.id)})
        return NextResponse.json(res)
    } catch (error) {
        return NextResponse.json({message: 'something went wrong'})
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
        return NextResponse.json(res)
    } catch (error) {
        return NextResponse.json({message: 'something went wrong'})
    }
}