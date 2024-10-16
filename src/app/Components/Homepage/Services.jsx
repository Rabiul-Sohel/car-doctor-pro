import React from 'react';
import SectionHeader from './SectionHeader';
import ServiceCard from '../Cards/ServiceCard';
import { getServices } from '@/Services/getServices';

const Services = async() => {
   
    const services = await getServices()
    // console.log(services);
    return (
        <div className='text-slate-900 container mx-auto'>
            <SectionHeader
                header='Our Service Area'
                subHeader='Service'
                text="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            ></SectionHeader>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                {
                  services &&  services?.map((service)=>(
                        <ServiceCard service={service} key={service._id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;