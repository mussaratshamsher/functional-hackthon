
import { Button } from '@/components/ui/button';  
import { client } from '@/sanity/lib/client';  
import { urlFor } from '@/sanity/lib/image';
import { Facebook, Instagram, Twitter } from 'lucide-react';  
import Image from 'next/image';  
import Link from 'next/link';  
import { notFound } from 'next/navigation';  
import { FaStar, FaRegStar, FaHeart } from 'react-icons/fa';  
import { FaCartShopping } from 'react-icons/fa6';  

interface Product {  
    title: string;  
    name: string;  
    id: string;  
    image: string;  
    description: string;  
    price: number;  
    yellowstars: number;  
    graystars: number;  
    details: string;  
    category: string;  
    tags: string;  
    reviews: string;  
}  

const productDetails = async (id: string): Promise<Product | null> => {  
    const query = `*[_type == "product" && id == $id][0] {  
        title, name, id, image, description, price, details, yellowstars, graystars,   
        reviews, tags, category   
    }`;  
    return await client.fetch(query, { id });  
};  

const ProductDetails = async ({ params }: { params: { id: string } }) => {  
    const product = await productDetails(params.id);  

    if (!product) {  
        console.error("Product not found for ID:", params.id);  
        notFound();  
    }   


    return (  
        <div className="text-gray-600 body-font overflow-hidden">  
            <div className="max-w-[1440px] mb-2 md:mb-5 container mx-auto">  
<div className='grid grid-cols-2 mx-2 md:mx-10 lg:mx-20 my-5 md:my-10'>
         {/* image Gallery  */}
                <div className="grid grid-cols-4">  
                    {/* Products Gallery */}  
                <div className='col-span-1 gap-2 '>           
                <Image  src={urlFor(product.image).url()} alt={product.title}  width={500} height={500}   
                className='rounded-md w-24 h-24'/> 
                <Image  src={urlFor(product.image).url()} alt={product.title}  width={500} height={500}   
                className='rounded-md w-24 h-24 mt-2 lg:mt-5'/> 
                <Image  src={urlFor(product.image).url()} alt={product.title}  width={500} height={500}   
                className='rounded-md w-24 h-24 mt-2 lg:mt-5'/> 
                <Image  src={urlFor(product.image).url()} alt={product.title}  width={500} height={500}   
                className='rounded-md w-24 h-24 mt-2 lg:mt-5'/> 
            </div>   
             
        <div className='col-span-3'>  
        <Image src={urlFor(product.image).url()}   
        alt={product.title} width={500} height={500} className='rounded-md' />   
            </div>

           </div>
                 
                {/* Details */}  
                <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">  
                    <h1 className="text-gray-900 text-3xl title-font font-bold mb-1">{product.title}</h1>  
                    <h2 className="text-base title-font text-gray-500 tracking-widest">{product.category}</h2>  
                    <h2 className="text-base title-font tracking-widest">{product.tags}</h2>  

                    <div className="flex py-2">  
                        <div className='flex'>  
                            {Array.from({ length: product.yellowstars }, (_, i) => (  
                                <FaStar key={i} className='text-yellow-400' />  
                            ))}  
                            {Array.from({ length: product.graystars }, (_, i) => (  
                                <FaRegStar key={i} className='text-gray-400' />  
                            ))}  
                        </div>   
                        <span className="text-gray-600 ml-3">{product.reviews} Reviews</span>  
                        
                        <div className='flex'>   
                            <Facebook className='hover:text-[#b88f14]' />  
                            <Twitter className='hover:text-[#b88f14]' />  
                            <Instagram className='hover:text-[#b88f14]' />   
                        </div>  
                    </div>  
                    <p className="leading-relaxed">{product.description}</p>  
                    
                    {/* Color and Size Selection */}  
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">  
                        <div className="flex">  
                            <span className="mr-3">Color</span>  
                            {['#744c1d', '#d2aa33', '#000000'].map(color => (  
                                <button key={color} className={`border-2 border-gray-300 ml-1 bg-[${color}] rounded-full w-6 h-6 focus:outline-none`} />  
                            ))}  
                        </div>  
                        <div className="flex ml-6 items-center">  
                            <span className="mr-3">Size</span>  
                            <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">  
                                {['SM', 'M', 'L', 'XL'].map(size => (  
                                    <option key={size}>{size}</option>  
                                ))}  
                            </select>  
                        </div>  
                    </div>  

                    {/* Price and Buttons */}  
                    <div className="flex flex-col md:flex-row gap-3 lg:gap-5">  
                        <span className="title-font font-medium text-2xl text-gray-900"> Rs.{product.price} </span>                            
                        <div className='flex mb-1 md:mb-2 gap-3 lg:gap-5'>   
                           <Link href='/cart'>
                         <Button ><FaCartShopping className='hover:bg-black/60 hover:animate-pulse'/>   
                                Add to Cart</Button> 
                          </Link> 
                          <Link href='/checkout'></Link>
                        <Button><FaHeart className='hover:bg-black/60 hover:animate-pulse'/>   
                                Shop Now</Button>  
                        </div>  
                    </div>  

                    
                    
                </div>  
                </div> 
            </div>  
            </div> 
    );  
};  

export default ProductDetails;