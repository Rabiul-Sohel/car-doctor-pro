"use client"
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    const router = useRouter()
    const session = useSession()
    const searchParams = useSearchParams()
    const redPath = searchParams.get('redirect')
    const handleSocialLogin = async(provider)=>{
       const res = await signIn(provider, {
        redirect: true,
        callbackUrl: redPath ? redPath : '/'
       }) 
       
      
    }
    if(session.status === 'authenticated'){
        router.push('/')
    }
    
    return (
        <div className='flex justify-center gap-8 items-center'>
                            <button onClick={()=>handleSocialLogin('github')}>
                                <FaGithub className='text-primary btn btn-circle bg-gray-200 p-2 ' />
                            </button>
                            <button onClick={()=>handleSocialLogin('google')}>
                                <FcGoogle className=' btn btn-circle bg-gray-200 p-2' />
                            </button>
                        </div>
    );
};

export default SocialLogin;