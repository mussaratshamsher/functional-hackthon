import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export default async function Hero() {

    const heroQuery = `*[_type == "hero"]{
  image, title, subtitle, buttonText}`;

    const sanityData = await client.fetch(heroQuery)
     const[heroData] = sanityData;

  return (
    <div className='max-w-[1440px] container mx-auto'>
        <div> 
        
<Image src={urlFor(heroData.image).url()} 
       alt={heroData.title} width={2000} 
       height={2000} className="w-full md:h-[520px]"
      /> 
<div className='md:absolute bg-[#f4dec6] text-[#917214] lg:w-[500px] lg:h-72 lg:ml-[500px] xl:ml-[650px] lg:-mt-[400px] lg:p-10
p-4'>

<h1 className='text-lg md:text-3xl md:font-extrabold'>{heroData.title}</h1>
<h1 className='md:mt-5 indent-5 text-justify whitespace-break-spaces'>{heroData.subtitle}</h1>
<Link href='/product'> 
<Button className='bg-[#917214] hover:animate-pulse hover:bg-white text-white hover:text-[#917214] mt-2'>
    {heroData.buttonText}</Button>
</Link>
      </div>

    </div>
    </div>
  )
}