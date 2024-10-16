import axios from "axios"

export const getServices =async()=>{
   try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/services/api/get-all`)
   
    return res.data.services 
   } catch (error) {
    console.log(error);
    return [] 
   }
}
export const getSingleService =async(id)=>{
   try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/services/api/${id}`)
    // console.log(res.data);
    return res.data
   } catch (error) {
    console.log(error);
    return {}
   }
}