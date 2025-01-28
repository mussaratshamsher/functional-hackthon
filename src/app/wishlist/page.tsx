"use client";  

import React, { useEffect, useState } from "react";  
import Image from "next/image";  
import { urlFor } from "@/sanity/lib/image";  
import { Button } from "@/components/ui/button";  
import Link from "next/link";  

interface WishlistItem {  
  id: string;  
  name: string;  
  image: string | null;  
  price: number | null;  
  quantity: number;  
}  

export default function Wishlist() {  
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);  

  useEffect(() => {  
    const wishlistData = localStorage.getItem("wishlist");  
    if (wishlistData) {  
      try {  
        const parsedWishlist: Record<string, WishlistItem> = JSON.parse(wishlistData);  
        const validItems = Object.values(parsedWishlist).filter((item) => item && item.image && item.price !== null);  
        setWishlistItems(validItems);  
      } catch (error) {  
        console.error("Error parsing wishlist data:", error);  
        setWishlistItems([]);  
      }  
    }  
  }, []);  

  const addToCart = (item: WishlistItem) => {  
    const existingCartData = localStorage.getItem("cart");  
    const cartItems: Record<string, WishlistItem> = existingCartData ? JSON.parse(existingCartData) : {};  
    
    if (cartItems[item.id]) {  
      // Increment quantity if item already exists in cart  
      cartItems[item.id].quantity += 1;  
    } else {  
      cartItems[item.id] = { ...item, quantity: 1 }; // Initialize item quantity to 1  
    }  
    localStorage.setItem("cart", JSON.stringify(cartItems));  
  };  

  const removeItem = (id: string) => {  
    const updatedWishlist = wishlistItems.filter((item) => item.id !== id);  
    setWishlistItems(updatedWishlist);  
    localStorage.setItem("wishlist", JSON.stringify(Object.fromEntries(updatedWishlist.map(item => [item.id, item]))));  
  };  

  const updateQuantity = (id: string, increase: boolean) => {  
    const updatedWishlist = wishlistItems.map((item) =>  
      item.id === id  
        ? { ...item, quantity: increase ? item.quantity + 1 : Math.max(1, item.quantity - 1) }  
        : item  
    );  
    setWishlistItems(updatedWishlist);  
    localStorage.setItem("wishlist", JSON.stringify(Object.fromEntries(updatedWishlist.map(item => [item.id, item]))));  
  };  

  return (  
    <div className="container mx-auto max-w-[1440px]">  
      <div className="flex justify-center items-center py-5 lg:py-20 h-auto mx-5 lg:mx-auto lg:w-3/5 w-4/5">  
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8">  
          <div className="lg:col-span-2">  
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Wishlist   
              <hr className='border-[#bc9729] border-2 w-24 '/>  
            </h2>  
            <div className="space-y-6">  
              {wishlistItems.length > 0 ? (  
                wishlistItems.map((item) => (  
                  <div key={item.id} className="flex items-start border-b border-gray-200 pb-6">  
                    <div className="w-24 h-[150px] flex-shrink-0">  
                      {item.image ? (  
                        <Image  
                          src={urlFor(item.image).url()}  
                          alt={item.name || "Product Image"}   
                          width={100} height={100} className="rounded-md " />  
                      ) : (  
                        <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-md">  
                          <span className="text-gray-500 text-xs">No Image</span>  
                        </div>  
                      )}  
                    </div>  

                    <div className="flex-1 px-4">  
                      <h3 className="text-[12px] sm:text-lg font-medium text-gray-800">{item.name}</h3>  
                      <div className="flex gap-2 mt-2">  
                        <Link href='/cart'>  
                          <Button onClick={() => { addToCart(item); }}>Add to Cart</Button>  
                        </Link>  
                        <Button   
                          className="text-white bg-red-600 hover:bg-red-500"  
                          onClick={() => removeItem(item.id)}>  
                          Remove  
                        </Button>   
                      </div>  
                      <div className="flex gap-2 mt-2">  
                        <p>Quantity:</p>  
                        <button   
                          className="text-lg"   
                          onClick={() => updateQuantity(item.id, false)}>-</button>  
                        <p>{item.quantity}</p>  
                        <button   
                          className="text-lg"   
                          onClick={() => updateQuantity(item.id, true)}>+</button>  
                      </div>  
                    </div>  

                    <div className="text-right">  
                      <p className="text-[10px] sm:text-sm font-medium text-gray-800">${item.price?.toFixed(2)}</p>  
                    </div>  
                  </div>  
                ))  
              ) : (  
                <p className="text-gray-600 text-center">Your wishlist is empty.</p>  
              )}  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
}