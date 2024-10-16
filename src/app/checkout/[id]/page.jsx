"use client"
import Banner from '@/app/Components/SeviceDetails/Banner';
import { getSingleService } from '@/Services/getServices';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
// import React from 'react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CheckoutPage = ({params}) => {
    
    const {data} = useSession()
    const router = useRouter()
    const [service, setService] = useState({}) 
    const loadingService = async(id)=>{
        const res = await getSingleService(id)
        
         setService(res)

    }
    
    useEffect(()=>{
        loadingService(params.id)
    },[params])
    // console.log(service);
    const handleBooking = async(event) =>{
        event.preventDefault()
        const booking = {
            email: data?.user?.email,
            name: data?.user?.name,
            date: event.target.date.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
            price: service?.price,
            serviceId: service._id,
            serviceTitle: service.title
        }
        const res = await fetch(`http://localhost:3000/checkout/api/new-booking`,{
            method: "POST",
            body: JSON.stringify(booking),
            headers:{
                "content-type": "application/json"
            }
        })
        const resData = await res.json()
        console.log(resData);
        
        if(resData.newBooking.insertedId){
            toast.success("Service Booked successfully")
            router.push(`/my-booking/${data?.user?.email}`)
        }

    }

    // console.log(new Date().getDate(), 'from checkout page');
    return (
        <div className='container mx-auto'>
            <Banner
            title='Checkout'
            path='Home/Checkout'
            img='/assets/images/checkout/checkout.png'
            />

            <div className='bg-gray-200 p-16 my-20 text-slate-900 rounded-md'>
                <form onSubmit = {handleBooking} className='grid grid-cols-2 gap-5' >
                    <input readOnly className='px-4 py-3 col-span-1 rounded-lg' type="text" name='name'
                    defaultValue={data?.user?.name} placeholder='Your Name'/>
                    <input placeholder={ new Date().getDate()} className='px-4 py-3 col-span-1 rounded-lg' type="date" name='date' />
                    <input className='px-4 py-3 col-span-1 rounded-lg' type="text" name='phone' placeholder='Your Phone' />
                    <input readOnly className='px-4 py-3 col-span-1 rounded-lg' defaultValue={data?.user?.email} type="email" name='email' placeholder='Your Email' />
                    <input readOnly type='text' defaultValue={service?.price} className='px-4 py-3 col-span-1 rounded-lg' name="price" placeholder='Price'/>
                    <input type='text' className='px-4 py-3 col-span-1  rounded-lg' name="address" placeholder='Address'/>
                    <input type="submit" value='Order Confirm' className='btn btn-primary w-full col-span-2' />
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;