import Image from 'next/image';
import React from 'react';
import { MdOutlineArrowForward, MdOutlineArrowBack } from "react-icons/md";

const Banner = () => {
    const arrayLength = 6
    const bannerArray = Array.from({ length: arrayLength }, (_, i) => 1 + i)
    // console.log(bannerArray);
    return (
        <div className='container mx-auto mt-8'>
            <div className="carousel rounded-lg h-[90vh] ">

                {
                    bannerArray.map(item => (
                        <div key={item} id={`slide${item}`} className="carousel-item relative w-full ">
                            <div className='absolute h-full w-full bg-cover bg-gradient-to-r from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.0)] ' >

                            </div>
                            
                            <div className=' text-black absolute  w-full  flex items-center h-full ml-16'>
                                <div className='w-2/5 text-white space-y-3'>
                                    <h2 className=' text-5xl font-bold leading-[50px] tracking-wide '>Affordable <br /> Price For Car <br /> Servicing  </h2>
                                    <p className='tracking-wide'>There are many variations of passages of  available, but the majority have suffered alteration in some form  </p>
                                    <div className='flex gap-4'>
                                        <button className='btn btn-primary'>Discover More</button>
                                        <button className='btn btn-white btn-outline '>Latest Project</button>
                                    </div>
                                </div>

                            </div>

                            <Image width={400} height={100} alt='banner image'
                                src={`/assets/images/banner/${item}.jpg`}
                                className="w-full" />
                            <div className="absolute gap-5 right-10 bottom-5 flex -translate-y-1/2 transform justify-end">
                                <a href={`#slide${item === 1 ? arrayLength : item - 1}`} className="btn btn-circle bg-gray-400 border-none text-white hover:btn-primary bg-opacity-70"><MdOutlineArrowBack className='text-3xl'  /></a>
                                <a href={`#slide${item < arrayLength ? item + 1 : "1"}`} className="btn bg-gray-400 bg-opacity-70 border-none btn-circle text-white hover:btn-primary"><MdOutlineArrowForward className='text-3xl '/></a>
                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    );
};

export default Banner;