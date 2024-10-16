"use client"
import { SessionProvider } from 'next-auth/react';
import React, { Suspense } from 'react';

const AuthProviders = ({ children }) => {
    return (
        <SessionProvider>
            <Suspense fallback={null}>
                {children}
            </Suspense>

        </SessionProvider>
    );
};

export default AuthProviders;