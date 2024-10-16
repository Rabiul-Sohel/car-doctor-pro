"use client"
import Banner from '@/app/Components/SeviceDetails/Banner';
// import { getSingleService } from '@/Services/getServices';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
// import React from 'react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const BookingUpdatePage = ({params}) => {
    
    // const {data} = useSession()
    const router = useRouter()
    const [booking, setBooking] = useState({}) 
   
    
    useEffect(()=>{
        const loadingBooking = async()=>{
            const res = await fetch(`http://localhost:3000/my-booking/api/booking/${params.id}`,{
                headers: {
                    'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' 
                }
            })
            const data = await res.json()
            setBooking(data);
    
        }
        loadingBooking()
    },[params.id])
    
    const handleUpdateBooking = async(event) =>{
        event.preventDefault()
        const updatedBooking = {
           
            date: event.target.date.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
    
        }
        const res = await fetch(`${prcess.env.NEXT_PUBLIC_BASE_URL}/my-booking/api/booking/${params.id}`,{
            method: "PATCH",
            body: JSON.stringify(updatedBooking),
            headers:{
                "content-type": "application/json"
            }
        })
        const resData = await res.json()
        if(resData.modifiedCount > 0){
            toast('Booking updated successfully')
            // event.target.reset()
        }
        console.log(resData);
        
        // if(resData.newBooking.insertedId){
        //     router.push(`/my-booking/${data?.user?.email}`)
        // }

    }

    // console.log(new Date().getDate(), 'from checkout page');
    return (
        <div className='container mx-auto'>
            <Banner
            title='Update Booking'
            path='Home/Update Booking'
            img='/assets/images/checkout/checkout.png'
            />

            <div className='bg-gray-200 p-16 my-20 text-slate-900 rounded-md'>
                <form onSubmit={handleUpdateBooking}  className='grid grid-cols-2 gap-5' >
                    <input readOnly className='px-4 py-3 col-span-1 rounded-lg' type="text" name='name'
                    defaultValue={booking.name} placeholder='Your Name'/>
                    <input defaultValue={booking?.date} className='px-4 py-3 col-span-1 rounded-lg' type="date" name='date' />
                    <input className='px-4 py-3 col-span-1 rounded-lg' type="text" name='phone' defaultValue={booking?.phone} placeholder='Your Phone' />

                    <input className='px-4 py-3 col-span-1 rounded-lg' defaultValue={booking.email} readOnly type="email" name='email' placeholder='Your Email' />
                    <input readOnly type='text' defaultValue={booking?.price} className='px-4 py-3 col-span-1 rounded-lg' name="price" placeholder='Price'/>
                    <input type='text' className='px-4 py-3 col-span-1  rounded-lg' name="address" defaultValue={booking?.address}/>
                    <input type="submit" value='Update Confirm' className='btn btn-primary w-full col-span-2' />
                </form>
            </div>
        </div>
    );
};

export default BookingUpdatePage;