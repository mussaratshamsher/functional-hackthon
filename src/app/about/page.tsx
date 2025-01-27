
import FurnitureCompo from '@/components/theme/FurnitureCompo'
import Services from '@/components/theme/Services'
import { client } from '@/sanity/lib/client';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default async function about() {

    const aboutQuery = `*[_type == "about"]{ title,
  para, buttonText}`;
  
       const sanityData = await client.fetch(aboutQuery)
       const[aboutData] = sanityData;

  return (

  <div className='container mx-auto max-w-[1440px]'>

      {/* Header */}  
      <div className='bg-[#f4dec6] w-full h-24 text-center py-7'>  
            <h1 className='text-xl lg:text-3xl'>Furniro</h1>  
            <p className='flex justify-center'> 

            <Link href='/' className='font-bold'> Home </Link><b> <ChevronRight/> </b>
            <span className='text-gray-700'><Link href='/about'> About </Link></span>  
            </p>  
        </div> 
        {/* main page  */}
     <h1 className='text-2xl md:text-3xl font-bold text-center py-5'> {aboutData.title}
     <hr className='border-[#bc9729] border-2 w-60 mx-auto'/></h1>

<div className='grid md:grid-cols-2 max-w-screen-lg md:gap-5 lg:gap-10 mx-auto'>
  
<video src="/videos/furniture.mp4" controls className='w-[350px] h-72'>
Your browser does not support video
</video>  

<p className='flex justify-center hyphens-none whitespace-break-spaces p-5 mx-auto'> {aboutData.para}
{aboutData.para}
</p>
  </div>

  <Services />

   <h1 className='text-2xl md:text-3xl font-bold text-center'>Some of Products & Style Decor
   <hr className='border-[#bc9729] border-2 w-60 mx-auto'/></h1>
  
  <FurnitureCompo />
    </div>
  )
}
