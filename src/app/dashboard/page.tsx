
import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Dashboard() {
  return (
    <div className='flex flex-col justify-center items-center max-w-md border mx-auto bg-[#f4dec6] h-auto 
    my-2 md:my-5 lg:my-10 py-5 lg:py-10 rounded-md shadow-md'>
     <div className='hover:animate-pulse'><UserButton /></div>
     
     <br />
     <h1 className='text-xl md:text-2xl lg:text-4xl md:font-bold'> Welcome to Furniro
     <hr className='border-[#bc9729] border-2 w-40 md:w-56 lg:w-80 mx-auto'/></h1>
     

     <p className='p-5 md:p-10 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sit libero expedita recusandae officia veritatis vitae a doloremque mollitia temporibus quibusdam ipsam, maxime facere consequatur, 
        voluptatum magni consequuntur ex amet.</p>

        <h2><b> Visit our official site @furniro.com </b></h2>
    </div>
  )
}

export default Dashboard
