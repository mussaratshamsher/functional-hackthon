'use client'

import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Slider from "react-slick";
import Link from 'next/link';

export default function BrowseRange() {
 
    //Carousel Settings
    const settings = {
        dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true,
                  arrows: false,
                }
              },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              arrows: false,
            }
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              arrows: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
              pauseOnHover: false,
            }
          }
        ]
      };

  return (
    <div className='container max-w-[1440px] mb-2 md:mb-5 mx-auto'>

      <h1 className='mytext text-center text-lg md:text-2xl lg:text-3xl font-extrabold mt-2 md:mt-5 lg:mt-10'>Browse the Range
      <hr className='border-[#bc9729] border-2 w-52 lg:w-80 mx-auto'/></h1>
      <h2 className='text-[#b88f14] text-center md:text-lg lg:text-xl mt-5'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quos dolore doloribus. </h2>

<div className='p-5 md:p-0 lg:pl-4 lg:py-10 md:mt-48 lg:mt-0 lg:ml-10 xl:ml-1'>

<Slider {...settings}>
        <Link href={'/browseByRange'}>
        <div className='1'>
        <Image src='/images/slider1.png' alt='slider1' 
        width={2000} height={2000} 
        className='max-w-80 h-80 rounded-md md:p-2 lg:p-0'/>
        <h1 className='font-bold text-xl '>Living</h1>
       </div></Link>
        <div className='2'>
        <Image src='/images/slider2.png' alt='slider2'
          width={500} height={500} className='max-w-80 h-80 rounded-md'/>
        <h1 className='font-bold text-xl '>Dining</h1>
        </div>
        <div className='3'>
        <Image src='/images/slider5.png' alt='slider5'
          width={500} height={500} className='max-w-80 h-80 rounded-md'/>
        <h1 className='font-bold text-xl '>Bed Room</h1>
        </div>
        <div className='4'>
        <Image src='/images/slider3.png' alt='slider3'
          width={500} height={500} className='max-w-80 h-80 rounded-md'/>
        <h1 className='font-bold text-xl '>Drawing Room</h1>
        </div>
        <div className='5'>
        <Image src='/images/slider4.png' alt='slider4'
          width={500} height={500} className='max-w-80 h-80 rounded-md'/>
        <h1 className='font-bold text-xl '>Room</h1>
        </div>
</Slider>


</div>

    </div>
  )
}
