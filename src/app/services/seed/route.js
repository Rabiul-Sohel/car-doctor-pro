import { connectDB } from "@/lib/connectDB"
import { services } from "@/lib/services"
import { NextResponse } from "next/server"

export const GET = async () => {
    const db = await connectDB()
    const servicesCollection = db.collection('services')
    try {
        await servicesCollection.deleteMany()
        const res = servicesCollection.insertMany(services)
        return NextResponse.json({
            message: "services connected"
        })
    } catch (error) {
        return NextResponse.json({
            message: "No Data Found"
        })
    }
}