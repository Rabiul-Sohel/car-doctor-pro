import Image from 'next/image';
import React from 'react';

const DetailsHelp = () => {
    return (
        <div className='bg-slate-950 text-white p-10 rounded-lg space-y-6 mt-5 pb-16'>
            <Image
                alt='logo'
                width={200}
                height={200}
                src='/assets/logo2.svg'
                className='w-36 mx-auto '
            />
            <h4 className='text-xl font-semibold text-center'>Need Help? We Are Here <br />
                To Help You</h4>
            <div className='text-center bg-white text-slate-950 px-12 py-10  space-y-2 rounded-lg relative'>
                <h6 className='text-xl font-semibold'> <span className='text-primary'>Car Doctor</span> Special</h6>
                <p className='font-semibold text-lg '>Save up to <span className='text-primary '> 60% off</span> </p>
                <div className='text-center absolute -bottom-8 w-full left-0  mx-auto'>
                    <button className=' btn btn-primary h-16 text-xl px-10 '>Get A Qoute</button>
                </div>
            </div>

        </div>
    );
};

export default DetailsHelp;