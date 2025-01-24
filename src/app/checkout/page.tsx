"use client"; // This is a client-side component  

import React, { useEffect, useState } from "react";  
import Image from "next/image";  
import { urlFor } from "@/sanity/lib/image";  
import { Button } from "@/components/ui/button";  
import { useRouter } from "next/navigation";  
  
interface CartItem {  
  id: string;  
  name: string;  
  image: string | null;  
  price: number | null;  
  quantity: number;  
}  

export default function CheckoutPage() {  
  const [cartItems, setCartItems] = useState<CartItem[]>([]);  
  const [total, setTotal] = useState<number>(0);  
  const [name, setName] = useState<string>("");  
  const [email, setEmail] = useState<string>("");  
  const [phone, setPhone] = useState<string>(""); // Changed to string to capture all input  
  const [address, setAddress] = useState<string>("");  
  const [error, setError] = useState<string | null>(null); // State for error message  
  const router = useRouter();  

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
//    <.....total ....>
  const calculateTotal = (items: CartItem[]) => {  
    const totalPrice = items.reduce(  
      (acc, item) => acc + (item.price || 0) * (item.quantity || 1),  
      0  
    );  
    setTotal(totalPrice);  
  };  

  const validateInputs = () => {  
    // Check for empty fields  
    if (!name || !email || !phone || !address) {  
      return "Please fill in all fields";  
    }  

    // Validate name: minimum of 3 characters, only alphabetic characters and spaces  
  const nameRegex = /^[A-Za-z\s]{3,}$/; // Adjust regex for the name validation  
  if (!nameRegex.test(name)) {  
    return "Name must be at least 3 characters and contain only letters and spaces";  
  } 

    // Validate email format  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    if (!emailRegex.test(email)) {  
      return "Please enter a valid email address";  
    }  

    // Validate phone number (digits only, at least 10 digits)  
    const phoneRegex = /^\d{10,}$/;  
    if (!phoneRegex.test(phone)) {  
      return "Please enter a valid phone number (at least 10 digits)";  
    }  

    return null; // All validations passed  
  };  

  const handleCheckout = () => {  
    const validationError = validateInputs();  
    if (validationError) {  
      setError(validationError);  
      return;  
    }  

    // Clear error on successful validation  
    setError(null);  

    // Clear the cart data  
    localStorage.removeItem("cart");  
    setCartItems([]);  
    setTotal(0);  

    // Perform the navigation after checkout is complete  
    router.push("/confirmation"); // Ensure this confirmation page exists  
  };  

  return (  
    <div className="container mx-auto max-w-[1440px]">

    <div className="w-4/5 mx-auto p-1 lg:p-5">  
      <h2 className="text-2xl font-semibold text-gray-800 my-6 text-center">  
        Checkout <hr className="border-[#bc9729] border-2 w-32 mx-auto"/> 
    </h2>  
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">  
        <div className="lg:col-span-2">  
          <h3 className="text-xl font-semibold text-gray-800 mb-4"> Cart
          <hr className="border-[#bc9729] border-2 w-14"/></h3>  
          <div className="space-y-4">  
            {cartItems.length > 0 ? (  
              cartItems.map((item) => (  
                <div key={item.id} className="flex items-start border-b border-gray-200 pb-6">  
                  <div className="w-24 h-[150px] flex-shrink-0">  
                    {item.image ? (  
                      <Image  
                        src={urlFor(item.image).url()}  
                        alt={item.name || "Product Image"}  
                        width={100} height={100} className="rounded-md" />  
                    ) : (  
                      <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-md">  
                        <span className="text-gray-500 text-xs">No Image</span>  
                      </div>  
                    )}  
                  </div>  
                  <div className="flex-1 px-4">  
                    <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>  
                    <p className="text-gray-600">Quantity: {item.quantity}</p>  
                    <p className="text-gray-600">${(item.price || 0).toFixed(2)}</p>  
                  </div>  
                </div>  
              ))  
            ) : (  
              <p className="text-gray-600 text-center">Your cart is empty.</p>  
            )}  
          </div>  
          <div className="mt-6 border-t border-gray-200 pt-4">  
            <p className="text-lg font-medium text-gray-800">  
              Total: ${total.toFixed(2)}  
            </p>  
          </div>  
        </div>  

        <div className="p-6">  
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Shipping Information
          <hr className="border-[#bc9729] border-2 w-52"/></h3>  
          {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}  
          <div className="space-y-4">  
            <input  
              type="text" placeholder="Name" value={name}  
              onChange={(e) => setName(e.target.value)}  
              required className="border p-2 w-full"  
            />  
            <input type="text" placeholder="Email" value={email}  
              onChange={(e) => setEmail(e.target.value)}  
              required className="border p-2 w-full"  
            />  
            <input type="number" placeholder="Phone" value={phone}  
              onChange={(e) => setPhone(e.target.value)} // Store as string to handle empty field  
              required className="border p-2 w-full"  
            />  
            <input type="text" placeholder="Address" value={address}  
              onChange={(e) => setAddress(e.target.value)}  
              required className="border p-2 w-full"  
            />  
          </div>  
          <Button  
            className="w-full p-4 my-5 font-semibold border bg-[#bc9729] hover:bg-[#d8b447] text-white"  
            onClick={handleCheckout}  
          >  
            Complete Checkout  
          </Button>  
        </div>  
      </div>  
    </div> 
    </div> 
  );  
}