import { Heart, Logs, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
  
import logo from '../../../public/images/logo.png'
import ModeToggle from '../theme/ModeToggle'

export default function Header() {
  return (
    <div  className='max-w-[1440px] container mx-auto'>
    <header className='w-full h-20 flex justify-between md:justify-around py-5 md:p-10'>

   <div className='flex md:-mt-3 gap-2 hover:animate-pulse'>
   <Image src={logo}
    alt='logo' width={500} height={500} className='w-5 h-5 md:w-10 md:h-10'/>
    <h1 className='text-lg font-bold lg:text-4xl md:font-extrabold'>Furniro</h1> 
   </div>
  
      <div className='hidden md:flex md:gap-7 list-none'>
   
    <li className='text-[#b88f14] hover:underline'><Link href='/'>Home</Link> </li>
    <li className='hover:text-[#b88f14] hover:underline'><Link href='/products'>Shop</Link></li>
    <li className='hover:text-[#b88f14] hover:underline'><Link href='/about'>About</Link></li>
    <li className='hover:text-[#b88f14] hover:underline'><Link href='/contact'>Contact</Link></li>
     </div>

     <div className='flex py-5 w-28 gap-2 px-2 md:-mt-2 glowing-border rounded bg-[#efdaba]'>
    <Link href='/admin' className='-mt-3 hover:text-[#b3853b] text-black'><User/></Link>
    <Link href='/wishlist' className='-mt-3 hover:text-[#b3853b] text-black'> <Heart/></Link>
    <Link href='/cart' className='-mt-3 hover:text-[#b3853b] text-black'><ShoppingCart/></Link>
     </div>
     <ModeToggle/>

<Sheet >
  <SheetTrigger className=' md:hidden'><Logs /></SheetTrigger>
  <SheetContent>
    <ul>
  <li><Link href='/' className='hover:underline'>Home</Link> </li>
  <li><Link href='/products' className='hover:underline'>Shop</Link></li>
  <li><Link href='/about' className='hover:underline'>About</Link></li>
  <li><Link href='/contact' className='hover:underline'>Contact</Link></li>
  </ul>
  </SheetContent>
</Sheet>


</header>
    </div>
  )
}
