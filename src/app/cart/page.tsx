"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  image: string | null;
  price: number | null;
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      try {
        const parsedCart: Record<string, CartItem> = JSON.parse(cartData);
        const validItems = Object.values(parsedCart).filter(
          (item) => item && item.image && item.price !== null
        );
        setCartItems(validItems);
        calculateTotal(validItems);
      } catch (error) {
        console.error("Error parsing cart data:", error);
        setCartItems([]);
      }
    }
  }, []);

  const calculateTotal = (items: CartItem[]) => {
    const totalPrice = items.reduce(
      (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
      0
    );
    setTotal(totalPrice);
  };

  const updateQuantity = (id: string, increase: boolean) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: increase ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(Object.fromEntries(updatedCart.map(item => [item.id, item]))));
    calculateTotal(updatedCart);
  };

  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(Object.fromEntries(updatedCart.map(item => [item.id, item]))));
    calculateTotal(updatedCart);
  };

  return (
    <div className="container mx-auto max-w-[1440px]">
      {/* Header */}  
      <div className='bg-[#f4dec6] w-full h-24 text-center py-7'>  
            <h1 className='text-xl lg:text-3xl'>Furniro</h1>  
            <p className='flex justify-center'> 

            <Link href='/' className='font-bold'> Home </Link><b> <ChevronRight /> </b>
            <span className='text-gray-700'><Link href='/cart'> Cart </Link></span>  
            </p>  
        </div> 
      <div className="flex justify-center items-center py-5 lg:py-20 h-auto mx-5 lg:mx-auto lg:w-3/5 w-4/5">
        {/*----===== CART =====----*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8">
          {/*----===== PRODUCTS =====----*/}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Cart 
            <hr className='border-[#bc9729] border-2 w-14'/></h2>
            <div className="space-y-6">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id} className="flex items-start border-b border-gray-200 pb-6">
                    {/*----===== IMAGE =====----*/}
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

                    {/*----===== QUANTITY & NAME =====----*/}
                    <div className="flex-1 px-4">
                      <h3 className="text-[12px] sm:text-lg font-medium text-gray-800">{item.name}</h3>
                      <div className="mb-[10px]">
                        <div className="text-sm text-gray-500 flex gap-[5px]">
                          <p>Quantity:</p>
                          <div className="flex gap-[5px]">
                            <p className="cursor-pointer mt-[-2px] text-[25px]" onClick={() => updateQuantity(item.id, false)}>-</p>
                            <p>{item.quantity}</p>
                            <p className="cursor-pointer text-[15px]" onClick={() => updateQuantity(item.id, true)}>+</p>
                          </div>
                        </div>
                      </div>
                          {/*----===== DELETE =====----*/}
                      <div className="flex gap-[10px] text-red-600 text-2xl">
                        <i className="bx bx-trash cursor-pointer" onClick={() => removeItem(item.id)}></i>
                      </div>
                    </div>

                    {/*----===== PRICE =====----*/}
                    <div className="text-right">
                      <p className="text-[10px] sm:text-sm font-medium text-gray-800">${item.price?.toFixed(2)}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 text-center">Your cart is empty.</p>
              )}
            </div>
          </div>

          {/*----===== TOTAL SUMMARY =====----*/}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Summary
            <hr className='border-[#bc9729] border-2 w-24 '/> </h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm text-gray-600">
                <p>Subtotal</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <div className="flex flex-col justify-between text-sm text-gray-600">
                <p>Estimated Delivery & Handling</p>
                <p>Free</p>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-medium text-gray-800">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>
            </div>
            <Link href='/checkout'>
            <Button className="w-60 p-5 my-5 font-semibold border bg-[#bc9729] hover:bg-[#d8b447] text-white ">
               Checkout
            </Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}