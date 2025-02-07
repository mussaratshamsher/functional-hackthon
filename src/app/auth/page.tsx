
import React from 'react'
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { ChevronRight, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'


export default function Auth() {
  return (
    <div className='container max-w-[1440px] mx-auto'>
      
      {/* Header */}  
      <div className='bg-[#f4dec6] w-full h-24 text-center py-7'>  
            <h1 className='text-xl lg:text-3xl'>Furniro</h1>  
            <p className='flex justify-center'> 

            <Link href='/' className='font-bold'> Home </Link><b> <ChevronRight /> </b>
            <span className='text-gray-700'><Link href='/auth'> Account </Link></span>  
            </p>  
        </div> 
    <div className='flex max-w-md mx-auto bg-[#f4dec6] justify-center items-center my-5 md:my-10
    p-5 md:p-10 rounded-md shadow-lg'>

 <div className=' '>   
<ClerkProvider>
     <Button className='bg-[#bc9729] hover:animate-pulse'>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          </Button>

</ClerkProvider>

<h1 className=''></h1>
<h1 className='font-bold md:text-2xl lg:text-3xl text-1xl text-center py-2'>Welcome to Furniro
<hr className='border-[#bc9729] border-2 w-40 md:w-52 lg:w-80 mx-auto'/></h1>
<p className='py-2 md:py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia qui
   nihil similique, ratione commodi ipsa tempora doloremque consequuntur atque incidunt magnam blanditiis 
  recusandae, amet voluptas enim soluta! Neque, veniam asperiores?</p>
 <h2 className='font-serif underline text-center'>Email: email@furniro.com</h2>
 
        <div className='flex gap-2 mt-2 underline'> <p> Visit our social sites:</p>
          <Facebook className='hover:text-[#bc9729]'/> 
        <Twitter className='hover:text-[#bc9729]'/> 
        <Instagram className='hover:text-[#bc9729]'/> <Youtube className='hover:text-[#bc9729]'/>
        </div>
  </div>
      </div>
    </div>
  )
}
