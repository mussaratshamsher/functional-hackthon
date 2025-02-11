"use client";

import CheckoutPage from "@/components/theme/CheckoutPage"
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react"; 

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) { //Validate that the public Stripe key is defined 
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
interface CartItem {  
    id: string;  
    name: string;  
    image: string | null;  
    price: number | null;  
    quantity: number;  
  } 
// main function 
export default function CheckOut() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);  
  const [total, setTotal] = useState<number>(0);
  // const price = 49.99;
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
  //<.....total ....>
    const calculateTotal = (items: CartItem[]) => {  
      const totalPrice = items.reduce(  
        (acc, item) => acc + (item.price || 0) * (item.quantity || 1),  
        0  
      );  
      setTotal(totalPrice);  
    }; 
  return (
  
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md 
    bg-gradient-to-tr from-[#f4dec6] to-[#bc9729]">
      
      {/* A header section to display requested payment and amount */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">User</h1>
        <h2 className="text-2xl">
          has requested
          <span className="font-bold"> Total: ${total.toFixed(2)}</span>
        </h2>
      </div>

      {/* Wrap the checkout page in Stripe's Elements component, which provides context 
          for Stripe Elements within this part of the application. */}
      <Elements
        stripe={stripePromise}      
        options={{
          mode: "payment",          
          amount: convertToSubcurrency(total),  
          currency: "usd",     
        }}
      >
        <CheckoutPage amount={total} />
      </Elements>
    </main>
  );
}
