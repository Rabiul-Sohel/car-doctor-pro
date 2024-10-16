"use client"
import { redirect } from 'next/dist/server/api-utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from 'next/navigation';
import SocialLogin from '../Components/Shared/SocialLogin';

const LoginPage = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const redirectPath = searchParams.get('redirect')
    // console.log();
    const handleLogin = async(event) =>{
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        const res = await signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: redirectPath ? redirectPath : '/'
        })
        // if(res.status === 200){
        //     searchParams ? router.push(redirectPath) : router.push('/')
        // }

    }
    return (
        <div className='container text-slate-900 mx-auto my-12 '>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                <div>
                    <Image width={400} height={500} alt='login image' className='items-end w-[80%]  mx-auto' src='/assets/images/login/login.svg' />
                </div>
                <div className='w-4/5 border p-10 rounded-lg my-12 '>
                    <h3 className='text-2xl font-semibold text-center mb-10'>Login</h3>
                    <form onSubmit={handleLogin} className='space-y-5' >
                        <div className='space-y-3'>
                            <label className='text-xl font-semibold' htmlFor="email">Email</label>
                            <input type="email" className='w-full p-2 border rounded-md' name='email' placeholder='Your Email' />
                        </div>
                        <div className='space-y-3'>
                            <label className='text-xl font-semibold' htmlFor="password">Password</label>
                            <input type="password" className='w-full p-2 rounded-md border' name='password' placeholder='Password' />
                        </div>

                        <button className='btn btn-primary w-full'>Login</button>

                    </form>
                    <div className=' text-center'>
                        <h4 className='text-xl mt-6 mb-3 '>Or Login with</h4>
                        <SocialLogin/>
                    </div>
                    <h4 className='text-lg text-center  mt-3 '>{`Don't have an account?`} <Link href='/signup' className='text-primary font-bold'>Sign Up</Link></h4> 
                </div>

            </div>
        </div>
    );
};

export default LoginPage;