import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='text-slate-900  container mx-auto my-24'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 '>
                <div className='relative h-screen flex '>
                    <Image className='w-4/5 h-[450px] rounded-md relative shadow-2xl' src='/assets/images/about_us/person.jpg' width={600} height={800} alt='About image' />
                    <Image className='w-[400px] h-[400px] top-1/3 border-[10px] border-white left-1/3  rounded-md absolute shadow-xl ' src='/assets/images/about_us/parts.jpg' width={600} height={800} alt='About image' />

                </div>
                <div className='space-y-5'>
                    <h4 className='text-primary font-bold text-2xl'>About Us</h4>
                    <h5 className='w-2/3 text-5xl font-bold leading-[60px]  '>We are qualified & of experience in this field</h5>
                    <div className='leading-10 tracking-wider space-y-4 '>
                        <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    </div>
                    <button className='btn btn-primary px-8'>Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;