import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const  POST = async(request) =>{
    const newUser = await request.json()
    try {
        const db =  await connectDB()
        const userCollection =  db.collection('users')
        const exist = await userCollection.findOne({email: newUser.email})
        if(exist){
            
            return NextResponse.json({message: "user exist", error}, {status: 304})  
        } 
        const hashedPass = bcrypt.hashSync(newUser.password, 14);
        const res = await userCollection.insertOne({...newUser, password: hashedPass})
        return NextResponse.json({message: "User created"}, {status: 200})
        
       
    } catch (error) {
        return NextResponse.json({message: "Something went wrong", error}, {status: 500})   
    }
   
}