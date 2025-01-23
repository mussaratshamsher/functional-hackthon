import { client } from '@/sanity/lib/client';  
import { urlFor } from '@/sanity/lib/image';  
import Image from 'next/image';  
import React from 'react';  

export default async function FurnitureCompo() {  
    const furnitureQuery = `*[_type == "furniture"]`;  
    const sanityData = await client.fetch(furnitureQuery);  
    
    if (!sanityData.length) {  
        return <p>No furniture items found.</p>;  
    }  

    const [furnitureData] = sanityData;  

    return (  
        <div className='max-w-[1440px] container mx-auto'>  
            <p className='text-center'>Share your steps with</p>  
            <h1 className='text-center font-bold text-2xl lg:text-4xl'>#{furnitureData.title}
            <hr className='border-[#bc9729] border-2 w-60 mx-auto'/></h1>  

            <div className='grid grid-cols-5 px-2 lg:px-10 gap-1 md:gap-3 lg:gap-5'>  
                {/* grid 1 */}  
                <div className='col-span-2 '>  
                    <div className='grid grid-cols-6 grid-rows-2 gap-1 lg:gap-5'>  
                        <Image src={urlFor(furnitureData.image1).url()} alt={furnitureData.title} width={2000} height={2000} />  
                        <Image src={urlFor(furnitureData.image2).url()} alt={furnitureData.title} width={2000} height={2000} className='col-span-5 mt-2 lg:mt-12' />  
                        <Image src={urlFor(furnitureData.image3).url()} alt={furnitureData.title} width={2000} height={2000} className='col-span-2' />  
                        <Image src={urlFor(furnitureData.image4).url()} alt={furnitureData.title} width={2000} height={2000} className='col-span-4' />  
                    </div>  
                </div>  

                {/* grid 2 */}  
                <div>  
                    <Image src={urlFor(furnitureData.image5).url()} alt={furnitureData.title} width={2000} height={2000} className='mt-10 lg:mt-40' />  
                </div>  

                {/* grid 3 */}  
                <div className='col-span-2'>  
                    <div className='grid grid-cols-8 gap-1 lg:gap-5'>  
                        <Image src={urlFor(furnitureData.image6).url()} alt={furnitureData.title} width={2000} height={2000} className='col-span-3 mt-10 lg:mt-40' />  
                        <Image src={urlFor(furnitureData.image7).url()} alt={furnitureData.title} width={1000} height={1000} className='col-span-5 w-80 h-20 md:h-40 lg:h-80 xl:h-96' />  
                        <Image src={urlFor(furnitureData.image8).url()} alt={furnitureData.title} width={2000} height={2000} className='col-span-2' />  
                        <Image src={urlFor(furnitureData.image9).url()} alt={furnitureData.title} width={2000} height={2000} className='col-span-4' />  
                    </div>  
                </div>  
            </div>  
        </div>  
    );  
}