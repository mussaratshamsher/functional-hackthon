



import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'

const CartCompo = (
    {src, title, size,price}:
       {src:string, 
        title:string, 
        size:string,
         price:string}) => {
  return (
    <div className='grid grid-cols-3 p-1 md:p-10'>
        {/* image  */}
   <Image src={src} alt={title}
    width={100} height={100}
    className=' w-32 h-32 md:w-[100px] md:h-[100px]'/>

 {/* info  */}
 <div className='flex px-5 justify-between items-center w-full'>
 <div className=''>
{/* title  */}
<h2 className='text-sm font-semibold line-clamp-1'>
    {title}
</h2>
{/* size  */}
<p className='mt-2 text-sm line-clamp-1'>
{size} </p>
{/* quantity  */}
<div className='mt-2 flex items-center'>
    <Button className='w-fit h-fit rounded-lg text-xs duration-300'>
        <FaMinus className='md:w-2 md:h-2'/>
    </Button>
    <div className='mx-3 scroll-m-20 text-sm font-semibold tracking-tight'>
        1
    </div>
    <Button className='w-fit h-fit rounded-lg text-xs duration-300'>
        <FaPlus className='md:w-2 md:h-2'/>
    </Button>

</div>
</div>


 </div>
 {/* price & delete  */}
 <div className='flex flex-col items-end gap-5 mt-5 md-mt-2 lg:mt-0'>
 <h3 className='text-sm font-semibold leading-none line-clamp-1 '>
    Price: {price}
 </h3>
 <FaTrash className='text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer'/>
 </div>
    </div>
  )
}

export default CartCompo