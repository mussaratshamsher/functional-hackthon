

//import Product from '@/types/prdouct';
import { ChevronRight } from 'lucide-react';  
import Link from 'next/link';  
import React from 'react';  
import { client } from '@/sanity/lib/client';
import ProductList from '@/components/theme/ProductList';

export default async function Products() { 

  interface Product {  
    title: string;  
    category: string;  
    id: string;  
    image: string; 
    description: string;  
    price: number ;
    quantity: number;
} 
     
    const query = `*[_type == "product"]{  
        title, name, id, image, description, price  
    }`;   

    const Data:Product[] = await client.fetch(query);   
      return ( 
         
        <div className='container mx-auto max-w-[1440px]'>  
        {/* Header */}  
        <div className='bg-[#f4dec6] w-full h-24 text-center py-7'>  
            <h1 className='text-xl lg:text-3xl'>Furniro</h1>  
            <p className='flex justify-center'>  
            <Link href='/' className='font-bold'>Home</Link><b> <ChevronRight/> </b>
            <span className='text-gray-700'><Link href='/products'> Shop</Link></span>  
            </p>  
        </div>  

        {/* Products List */}  
          <ProductList Data={Data}/>
          
 </div>  
);  
}