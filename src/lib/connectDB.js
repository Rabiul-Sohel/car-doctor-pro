import { MongoClient, ServerApiVersion } from "mongodb";

export const connectDB = async() =>{
    let db;
    if(db) return db;
    try {
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
        const client = new MongoClient(uri,  {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        },
    )
    db = client.db('car-doctor')
    return db;
    } catch (error) {
        console.log(error);
    }


}