"use client"

import { Heart, Logs, Search, ShoppingCart, User } from 'lucide-react'  
import Image from 'next/image'  
import Link from 'next/link'  
import React, { useState } from 'react'  
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"  
import logo from '../../../public/images/logo.png'  
import ModeToggle from '../theme/ModeToggle'  

export default function Header() {  
  
  const [isOpen, setIsOpen] = useState(false);  
  // Function to handle opening & close the Sheet  
  const handleOpen = () => {  
    setIsOpen(true);  
  };    
  const handleClose = () => {  
    setIsOpen(false);  
  };  

  return (  
    <div className='max-w-[1440px] container mx-auto'>  
      <header className='w-full h-20 flex justify-between md:justify-around py-5 md:p-10'>  

        <div className='flex md:-mt-3 gap-2 hover:animate-pulse'>  
          <Image src={logo} alt='logo' width={500} height={500} className='w-5 h-5 md:w-10 md:h-10'/>  
          <h1 className='text-lg font-bold lg:text-4xl md:font-extrabold'>Furniro</h1>   
        </div>  

        <div className='hidden md:flex md:gap-7 list-none'>   
          <li className='text-[#b88f14] hover:underline'><Link href='/'>Home</Link></li>  
          <li className='hover:text-[#b88f14] hover:underline'><Link href='/products'>Shop</Link></li>  
          <li className='hover:text-[#b88f14] hover:underline'><Link href='/about'>About</Link></li>  
          <li className='hover:text-[#b88f14] hover:underline'><Link href='/contact'>Contact</Link></li>  
        </div>  

        <div className='flex w-28 gap-0 md:gap-2 px-0 md:px-2 -mt-1'>  
        <Link href='/category' className='bounce flex items-center justify-center p-2 transition duration-500
       hover:text-[#b3853b] hover:underline'><Search /></Link> 
      <Link href='/wishlist' className='bounce flex items-center justify-center p-2 transition duration-500
        hover:text-[#b3853b] hover:underline'><Heart /></Link>  
      <Link href='/cart' className='bounce flex items-center justify-center p-2 transition duration-500
       hover:text-[#b3853b] hover:underline'><ShoppingCart /></Link>  
        
        </div>  
        <div className='md:-mt-3'>
          <ModeToggle/>
         </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>  
          <SheetTrigger onClick={handleOpen} className='md:hidden'>  
            <Logs />  
          </SheetTrigger>  
          <SheetContent>  
            <ul>  
       <li><Link href='/' onClick={handleClose} className='hover:underline'>Home</Link></li>  
       <li><Link href='/products' onClick={handleClose} className='hover:underline'>Shop</Link></li>  
       <li><Link href='/about' onClick={handleClose} className='hover:underline'>About</Link></li>  
       <li><Link href='/contact' onClick={handleClose} className='hover:underline'>Contact</Link></li>  
            </ul>  
          </SheetContent>  
        </Sheet>  

      </header>  
    </div>  
  )  
}


