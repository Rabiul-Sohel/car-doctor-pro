import Image from 'next/image';
import React from 'react';

const Banner = ({title, path, img}) => {
    return (
        <div  className="relative text-white ">
        <Image
            className='w-full h-[60vh] rounded-lg relative'
            src={img}
            width={800}
            height={200}
            alt='banner Image'
        />
        <div className=' rounded-lg  top-0 bg-gradient-to-r from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)] absolute h-full w-full'>

        </div>
        <div className='flex top-0 left-36 h-full absolute items-center  '>
            <h3 className=' text-white text-5xl font-bold'> {title} </h3>
        </div>
        <div className='text-center w-full  flex absolute bottom-0 justify-center' >
            <p style={{ "clip-path": "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)" }} className='block   bg-primary w-64 py-2'> {path} </p>

        </div>
    </div>
    );
};

export default Banner;