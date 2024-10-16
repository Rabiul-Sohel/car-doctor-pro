"use client"
import { getServices } from '@/Services/getServices';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ServicesMenus =  () => {
    const [services, setServices] = useState([])
    const pathName = usePathname()
    const pathArray = pathName.split('/')
    const id = pathArray[2]
    console.log(id);
    const gettingServices = async()=>{
        const services =  await getServices()
        setServices(services)
    }
    useEffect(()=>{

        gettingServices()
    },[])
    
    return (
        <div className='bg-gray-200 p-8  rounded-lg'>
                        <h3 className='text-3xl font-bold'> Services </h3>
                        <div className='flex flex-col space-y-4 mt-3 '>
                            {
                                services && services.map((item, idx) => (
                                    <Link key={idx} className={`${id === item._id ?  'bg-primary text-white' : 'bg-white'} w-full rounded-md font-semibold  px-6 py-4 hover:bg-primary duration-300 hover:text-white flex justify-between items-center`} href={`/services/${item._id}`}> <h3 > {item.title} </h3> <FaArrowRight/> </Link>
                                ))
                            }
                        </div>
                    </div>
    );
};

export default ServicesMenus;