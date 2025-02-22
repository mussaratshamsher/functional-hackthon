"use client"  

import React, { useState, FormEvent } from "react";  
import { Button } from "@/components/ui/button";  
import { Card, CardContent } from "@/components/ui/card";  
import Link from "next/link";  
import { ChevronRight, Loader, SearchIcon } from "lucide-react";  
import Image from "next/image";  

// Define the Product interface  
interface Product {  
    id: string;  
    title: string;  
    price: number;  
    tags: string[];  
    image: string;  
}  

// Example categories  
const tags = [  
    "vase", "vintage", "modern", "wooden", "furniture",  
    "luxury", "chair", "elegant", "living", "comfort"  
];  

export default function CategorySearch() {  
    const [category, setCategory] = useState<string>("");  
    const [products, setProducts] = useState<Product[]>([]);  
    const [loading, setLoading] = useState<boolean>(false);  
    const [searched, setSearched] = useState<boolean>(false);  

    // Function to handle the category selection  
    const handleSearch = async (event: FormEvent) => {  
        event.preventDefault();  
        setLoading(true);  
        setSearched(true);  
        setProducts([]);  

        try {  
            //  Used the selected category in the API call  
            const response = await fetch(`https://67aae21c65ab088ea7e7cba7.mockapi.io/tags?tags=${category}`);  // Modified line  
            const data = await response.json();   

            if (Array.isArray(data) && data.length > 0) {  
                setProducts(data);  
            } else {  
                console.warn("No products found for this category.");  
                setProducts([]); // Ensure products is empty when no data is found  
            }  
        } catch (error) {  
            console.error("Error fetching products:", error);  
        }  

        setLoading(false);  
    };  
    const handleAddToCart = (product: Product) => {  
      const cart = JSON.parse(localStorage.getItem('cart') || '{}');  
      if (cart[product.id]) {  
        cart[product.id].quantity += 1;  // Update quantity  
      } else {  
        cart[product.id] = { ...product, quantity: 1 }; // Add new product  
      }  
      localStorage.setItem('cart', JSON.stringify(cart));  
    };  
  
    // New Function to Add to Wishlist  
    const handleAddToWishlist = (product: Product) => {  
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '{}');  
      wishlist[product.id] = product; // Add or update the product in the wishlist  
      localStorage.setItem('wishlist', JSON.stringify(wishlist));  
      alert("Item added to wishlist!"); // Optional confirmation alert  
    };

    return (  
        <div className="container max-w-[1440px] mx-auto">  
            {/* Header */}  
            <div className='bg-[#f4dec6] w-full h-24 text-center py-7'>  
                <h1 className='text-xl lg:text-3xl'>Furniro</h1>  
                <p className='flex justify-center'>  

                    <Link href='/' className='font-bold'> Home </Link><b> <ChevronRight /> </b>  
                    <span className='text-gray-700'><Link href='/category'> Category </Link></span>  
                </p>  
            </div>  
            {/* main page  */}  
            <div className="flex flex-col h-full w-full max-w-6xl mx-auto p-4 md:p-6">  

                <header className="flex flex-col items-center mb-6">  
                    <h1 className="mytext text-base md:text-2xl font-bold mb-2">Search Products by Popular tags  
                        <hr className='border-[#bc9729] border-2 w-48 md:w-96 mx-auto' /></h1>  

                    <form className="relative w-full max-w-md mb-6 border border-[#a58629] p-2 md:mt-5 md:p-4 rounded-lg shadow-lg " onSubmit={handleSearch}>  
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className="pr-10">  
                            <option value="">Select a category</option>  
                            {tags.map((cat) => (  
                                <option key={cat} value={cat}>  
                                    {cat}  
                                </option>  
                            ))}  
                        </select>  
                        <Button type="submit" variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2">  
                            <SearchIcon className="w-5 h-5" />  
                        </Button>  
                    </form>  
                </header>  
                {loading ? (  
                    <div className="flex flex-col justify-center items-center w-full h-full">  
                        <Loader className="w-10 h-10 mb-4" />  
                        <p>Loading products, please wait...</p>  
                    </div>  
                ) : (  
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">  
                        {searched && products.length === 0 && (  
                            <p>No products found. Try selecting a different category.</p>  
                        )}  
                        {products.map((product) => (  
                            <Card className="group relative" key={product.id}>  
       <Image  src={product.image} alt={product.title} width={400} height={300}  
 className="rounded-t-lg object-cover w-full h-80 group-hover:opacity-50 transition-opacity p-2 md:p-5 rounded-lg" />  
                     <CardContent className="p-4">  
         <h2 className="text-xl font-bold mb-2">{product.title}</h2>  
         <p className="text-muted-foreground line-clamp-2">  
            {`Price: $${product.price}`} </p>  
            <Link href={`/productdetails/${product.id}`}  
            className="absolute inset-0 z-10" prefetch={false}>  
        <span className="sr-only">View product details</span>  
                                </Link>  
                  </CardContent>  
                                
                            </Card>  
                        ))}  
                    </div>  
                )}  
            </div>  

        </div>  
    );  
}