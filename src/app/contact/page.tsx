import ContactForm from '@/components/theme/ContactForm'
import { ChevronRight, Clock, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Contact() {



  return (
    <div className='container mx-auto max-w-[1440px]'>

      {/* Header */}  
      <div className='bg-[#f4dec6] w-full h-24 text-center py-7'>  
            <h1 className='text-xl lg:text-3xl'>Furniro</h1>  
            <p className='flex justify-center'> 

            <Link href='/' className='font-bold'> Home </Link><b> <ChevronRight/> </b>
            <span className='text-gray-700'><Link href='/contact'> Contact </Link></span>  
            </p>  
        </div> 
 <h1 className='font-bold text-2xl text-center p-2 md:p-5'>Get In Touch
 <hr className='border-[#bc9729] border-2 w-60 mx-auto'/></h1>
 <p className='text-gray-500 max-w-md text-center mx-5 md:mx-auto my-2 md:my-5'>For More inforamtion About our products & services please feel free to Drop us 
an Email. Our staff always be there to help you out. Do not Hesitate!</p>
<div className='contianer mx-auto md:w-4/5 bg-[#f4dec6] grid md:grid-cols-2 pb-2 md:pb-5 border shadow-lg 
rounded py-5 px-10 lg:px-20 mb-5 lg:mb-10'>

{/* Grid One  */}
<div className='grid'>
<div className='py-2 md:py-3'>
<h1 className='text-xl font-bold p-3'><u className='flex'><MapPin className='mr-5'/> Address</u></h1>
<p>236 5th SE Avenue, New <br /> York NY10000, United States</p>
<hr className='border border-[#bc9729] w-52'/>
</div>
<div className='py-2 md:py-3'>
<h1 className='text-xl font-bold p-3'><u className='flex'><Phone className='mr-5'/> Phone</u></h1>
<p>Mobile: +(84) 546-74897</p>
<p>Hotline: +(84) 546-74897</p>
<hr className='border border-[#bc9729] w-52'/>
</div>
<div className='py-2 md:py-3'>
<h1 className='text-xl font-bold p-3'><u className='flex'><Clock className='mr-5'/> Working Time</u></h1> 
<p>Monday-Friday: 9:00-22:00</p>
<p>Saturday-Sunday: 9:00-21:00</p>
<hr className='border border-[#bc9729] w-52'/>
</div>
</div>
{/* Grid Two  */}
<div>

<ContactForm />

</div>
</div>
    </div>
  )
}

