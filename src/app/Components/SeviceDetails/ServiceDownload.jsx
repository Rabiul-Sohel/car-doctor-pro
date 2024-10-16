import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { AiFillFileText } from "react-icons/ai";

const ServiceDownload = () => {
    return (
        <div className='bg-slate-950 text-white p-10 rounded-lg space-y-4 mt-5'>
            <h4 className='font-bold text-2xl '>Download</h4>
            <div className='space-y-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-2'>
                        <AiFillFileText className='text-3xl' />
                        <div>
                            <h5 className='font-semibold'>Our Brochure</h5>
                            <p>Download</p>
                        </div>
                    </div>
                    <div className='btn-primary btn'>
                        <FaArrowRight className='text-2xl' />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-2'>
                        <AiFillFileText className='text-3xl' />
                        <div>
                            <h5 className='font-semibold'>Company Details</h5>
                            <p>Download</p>
                        </div>
                    </div>
                    <div className='btn-primary btn'>
                        <FaArrowRight className='text-2xl' />
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ServiceDownload;