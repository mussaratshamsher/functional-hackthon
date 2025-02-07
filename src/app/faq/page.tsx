import Link from 'next/link'
import React from 'react'
import { ChevronRight } from 'lucide-react'

export default function page() {
  return (
    <div className='container max-w-[1440px] mx-auto'>

        {/* Header */}  
     <div className='bg-[#f4dec6] w-full h-24 text-center py-7'>  
            <h1 className='text-xl lg:text-3xl'>Furniro</h1>  
            <p className='flex justify-center'>  
            <Link href='/' className='font-bold'>Home</Link><b> <ChevronRight/> </b>
            <span className='text-gray-700'><Link href='/faq'> FAQ's</Link></span>  
            </p>  
        </div> 

<h1 className='text-center text-base text-bold md:text-4xl mt-5 md:mt-20 font-bold' id='myfont'>
    Questions! Look Here..<hr className='border-[#bc9729] border-2 w-40 md:w-96 mx-auto'/></h1>
<p className='text-center md:mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

<div className='grid grid-cols-2 mt-3 md:mt-10 md:m-10 gap-2 md:gap-5'>
   
    {/* grid 1  */}
    <div className=' bg-[#f4dec6]'>
        <h1 className='p-2 text-[#bc9729]'> <b>How we serve food? </b></h1>
<p className='p-2'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
a type specimen book. It has survived not only five centuries, 
</p>
    </div>
      {/* grid 2  */}

      <div className=' bg-[#f4dec6]'>
        <h1 className='p-2 text-[#bc9729]'> <b>How can get in touch with you? </b></h1>
<p className='p-2'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
a type specimen book. It has survived not only five centuries, 
</p>
    </div>

{/* grid 3  */}
<div className=' bg-[#f4dec6]'>
        <h1 className='p-2 text-[#bc9729]'> <b>How is our food quality? </b></h1>
<p className='p-2'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
a type specimen book. It has survived not only five centuries, 
</p>
    </div>

{/* grid 4  */}
<div className='bg-[#f4dec6] '>
        <h1 className='p-2 text-[#bc9729]'> <b>What will be delivered? And When? </b></h1>
<p className='p-2'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
a type specimen book. It has survived not only five centuries, 
</p>
    </div>

    {/* grid 5  */}
<div className='bg-[#f4dec6] '>
        <h1 className='p-2 text-[#bc9729]'> <b>How do we give home delivery? </b></h1>
<p className='p-2'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
a type specimen book. It has survived not only five centuries, 
</p>
    </div>

    {/* grid 6 */}
<div className='bg-[#f4dec6] '>
        <h1 className='p-2 text-[#bc9729]'> <b>Is this resturant 24 hours open? </b></h1>
<p className='p-2'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
a type specimen book. It has survived not only five centuries, 
</p>
    </div>


</div>
    </div>
  )
}
