
import Banner from '@/app/Components/SeviceDetails/Banner';
import DetailsHelp from '@/app/Components/SeviceDetails/DetailsHelp';
import ServiceDownload from '@/app/Components/SeviceDetails/ServiceDownload';
import ServicesMenus from '@/app/Components/SeviceDetails/ServicesMenus';
import { getServices, getSingleService } from '@/Services/getServices';
import Image from 'next/image';
import Link from 'next/link';
// import { getSingleService } from '@/Services/getSingleService';
// import { useParams } from 'next/navigation';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const page = async ({ params }) => {
    const services = await getServices()
    // const params = useParams()
    const singleService = await getSingleService(params.id)
    // const singleService = data.singleService


    const { title, img, description, price, facility, _id } = singleService
    console.log(singleService);
    return (
        <div className='container mx-auto text-slate-800 mb-20'>
            <Banner
                title='Service Details'
                path='Home/Service Details'
                img='/assets/images/banner/4.jpg'
            ></Banner>
            <div className='flex gap-10 mt-20'>
                <div className='w-2/3'>
                    <Image
                        className='w-full h-[50vh] rounded-lg'
                        src={img}
                        alt={title}
                        width={600}
                        height={200}

                    />
                    <div className='my-8 space-y-4'>
                        <h3 className='text-3xl font-bold'> {title} </h3>
                        <p> {description} </p>
                    </div>

                    <div className='grid grid-cols-2 gap-5'>
                        {
                            facility?.map((item, idx) => (
                                <div className=' bg-gray-200 rounded-lg px-8 py-10 space-y-2 border-t-4 border-primary tracking-wider leading-7' key={idx}>
                                    <h3 className='text-xl font-semibold'> {item.name} </h3>
                                    <p>{item.details} </p>

                                </div>
                            ))
                        }
                    </div>
                    <p className='my-8'> {description} </p>
                </div>
                <div className='w-1/3'>
                    <ServicesMenus></ServicesMenus>
                    <ServiceDownload></ServiceDownload>
                    <DetailsHelp></DetailsHelp>
                    <h4 className='my-4 text-3xl font-bold'>Price: ${price}</h4>
                    <Link href={`/checkout/${_id}`}><button className='btn btn-primary w-full'>Proceed Checkout</button></Link>
                </div>
            </div>
        </div>

    );
};

export default page;