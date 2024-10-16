import { connectDB } from "@/lib/connectDB"

export const GET = async()=>{
    const db = await connectDB()
    const serviceCollection = db.collection("services")
    try {
        const res = await serviceCollection.find().toArray()
        return Response.json({services: res})
      } catch (error) {
      return Response.json({message: 'something went wrong'})
      
    }

}