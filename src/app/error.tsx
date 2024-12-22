"use client"
import Link from "next/link";
import React from "react";

const ErrorPage = () => {
    return(
        <div className='h-screen flex flex-col justify-center items-center bf-slate-50 text-grat-900'>
        <h1 className='text-8xl font-bold'>Error</h1>
        <p className='text-4xl font-medium'>Unexpected Erro occured</p>
        <Link href='/' className='mt-4 text-xl text-blue-600 hover:under-line'>Go Back Page</Link>
        </div>
    )

}

export default ErrorPage;