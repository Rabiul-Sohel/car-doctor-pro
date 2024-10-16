"use client"
import React, { useEffect, useState } from 'react';
import Banner from '../../Components/SeviceDetails/Banner';
import Link from 'next/link';
import toast from 'react-hot-toast';
// import { useState } from 'react/cjs/react.production.min';
const MyBookingPage = ({ params }) => {
    const [bookings, setBookings] = useState([])
   
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/my-booking/api/${params.email}`)
            const loadedBookings = await res.json()
            setBookings(loadedBookings);
            // console.log(loadedBookings);
        }
        loadData()
        
    }, [params.email])
    const handleBookingDelete = async (id) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/my-booking/api/booking/${id}`, {
            method: "DELETE"
        })
        const data = await res.json()
        if (data?.deletedCount > 0) {
            toast.success('Booking Deleted successfully', {
                position: 'top-right'
            })
            loadData()
        }
        // console.log(data);

    }
    return (
        <div className="container mx-auto text-slate-900">
            <Banner
                title='My Booking'
                path='Home/My Booking'
                img='/assets/images/services/5.jpg'
            />
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Service Title</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                bookings?.map(({ _id, serviceTitle, price, date }, idx) => (
                                    <tr key={_id} className="bg-base-200">
                                        <th> {idx + 1} </th>
                                        <td> {serviceTitle} </td>
                                        <td> {price} </td>
                                        <td> {date} </td>
                                        <td>
                                            <Link href={`/my-booking/update/${_id}`}>
                                                <button className='btn btn-sm'>Update</button>
                                            </Link>
                                            <button onClick={() => handleBookingDelete(_id)} className='btn btn-primary btn-sm'>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBookingPage;