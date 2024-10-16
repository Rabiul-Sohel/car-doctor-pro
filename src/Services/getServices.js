import axios from "axios"

export const getServices =async()=>{
    const res = await axios.get('http://localhost:3000/services/api/get-all')
    // const services = await res.json()
    
    // console.log(res.data, 'get api')
    return res.data.services 
}
export const getSingleService =async(id)=>{
    const res = await axios.get(`http://localhost:3000/services/api/${id}`)
    // console.log(res.data);
    return res.data
}