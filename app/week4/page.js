"use client"
import React from 'react'
import Form from './form';

export default function page() {
   
  return (

<main className="min-h-screen flex flex-col items-center justify-center relative">
    <div className="backdrop-blur-md bg-orange-50 bg-opacity-40 p-4 rounded-lg shadow-lg z-0 relative">
         <Form className="z-10" />

    </div>
</main>



    
  )
}
