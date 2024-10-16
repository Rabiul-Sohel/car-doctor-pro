"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import SocialLogin from '../Components/Shared/SocialLogin';

const page = () => {
    const handleSignUp = async(event) =>{
        event.preventDefault()
        const newUser ={
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
        }
        const res = await fetch("http://localhost:3000/signup/api", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "content-type" : "application/json"
            }
        })
        if(res.status === 200){
            event.target.reset()
        }
    }
    return (
        <div className='container text-slate-900 mx-auto my-12 '>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                <div>
                    <Image width={400} height={500} alt='login image' className='items-end w-[80%]  mx-auto' src='/assets/images/login/login.svg' />
                </div>
                <div className='w-4/5 border p-10 rounded-lg my-12 '>
                    <h3 className='text-2xl font-semibold text-center mb-10'>Sign Up</h3>
                    <form onSubmit={handleSignUp} className='space-y-5' >
                        <div className=''>
                            <label className='text-xl font-semibold' htmlFor="name">Name</label>
                            <input type="text" className='w-full border p-2 rounded-md' name='name' placeholder='Your Name' />
                        </div>
                        <div className='space-y-3'>
                            <label className='text-xl font-semibold' htmlFor="email">Email</label>
                            <input type="email" className='w-full p-2 border rounded-md' name='email' placeholder='Your Email' />
                        </div>
                        <div className='space-y-3'>
                            <label className='text-xl font-semibold' htmlFor="password">Password</label>
                            <input type="password" className='w-full p-2 rounded-md border' name='password' placeholder='Password' />
                        </div>

                        <button className='btn btn-primary w-full'>Sign Up</button>

                    </form>
                    <div className=' text-center'>
                        <h4 className='text-xl mt-6 mb-3 '>Or Sign Up with</h4>
                        <SocialLogin></SocialLogin>
                    </div>
                    <h4 className='text-lg text-center  mt-3 '>Already have an account? <Link href='/login' className='text-primary font-bold'>Login</Link></h4> 
                </div>

            </div>
        </div>
    );
};

export default page;