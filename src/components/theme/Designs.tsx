
 
"use client"  

import { urlFor } from '@/sanity/lib/image';  
import Link from 'next/link';  
import React from 'react';  
import { Button } from '../ui/button';  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Image from 'next/image';  
import Slider from "react-slick";  

interface DesignData {  
    title: string;  
    subtitle: string;  
    button: string;  
    image1: string;  
    image2: string;  
    image3: string;  
    image4: string;  
}  

interface DesignsProps {  
    designsData: DesignData;  
}  

export default function Designs({ designsData }: DesignsProps) {  
    const settings = {  
        dots: true,  
        fade: true,  
        infinite: true,  
        speed: 500,  
        slidesToShow: 1,  
        slidesToScroll: 1,  
        waitForAnimate: false,  
    };  

    return (  
        <div className='max-w-[1440px] container mx-auto'>   
            <div className='bg-[#f4dec6] h-auto grid grid-cols-1 md:grid-cols-3 px-5 py-10'>  
                <div className='grid1 md:col-span-2 mt-2 md:mt-32 lg:mt-0 px-10 lg:pt-20'>  
                    <h1 className='font-semibold lg:font-extrabold font-xl md:text-2xl lg:text-5xl lg:mt-10 text-center md:text-start'>
                        {designsData.title} </h1>  
                    <h2 className='mt-2 lg:mt-14 text-center md:text-start'>{designsData.subtitle}</h2>  
                    <Link href='/products'>  
                        <Button className='bg-[#b88f14] hover:animate-pulse mt-2 lg:mt-10 ml-10 md:ml-0'>{designsData.button}</Button>  
                    </Link>  
                </div>  

                <div className='grid2 slider md:ml-20 lg:ml-0 pr-5'>  
                    <Slider {...settings}>  
                        <div>  
                            <Image src={urlFor(designsData.image1).url()} alt={designsData.title} width={2000} height={2000} className='w-60 md:w-72 lg:w-96' />  
                        </div>  
                        <div>  
                            <Image src={urlFor(designsData.image2).url()} alt={designsData.title} width={2000} height={2000} className='w-60 md:w-72 lg:w-96' />  
                        </div>  
                        <div>  
                            <Image src={urlFor(designsData.image3).url()} alt={designsData.title} width={2000} height={2000} className='w-60 md:w-72 lg:w-96' />  
                        </div>  
                        <div>  
                            <Image src={urlFor(designsData.image4).url()} alt={designsData.title} width={2000} height={2000} className='w-60 md:w-72 lg:w-96' />  
                        </div>  
                    </Slider>  
                </div>  
            </div>  
        </div>  
    );  
}  


