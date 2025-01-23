import ContactForm from '@/components/theme/ContactForm'
import { Clock, MapPin, Phone } from 'lucide-react'
import React from 'react'

export default function Contact() {



  return (
    <div className='container mx-auto max-w-[1440px]'>
 <h1 className='font-bold text-2xl text-center'>Get In Touch</h1>
 <p className='text-gray-500 max-w-md text-center mx-auto'>For More inforamtion About our products & services please feel free to Drop us 
an Email. Our staff always be there to help you out. Do not Hesitate!</p>
<div className='contianer mx-auto w-4/5 grid md:grid-cols-2 pb-2 md:pb-5'>

{/* Grid One  */}
<div className='grid'>
<div className='py-2 md:py-3'>
<h1 className='text-xl flex font-bold'><MapPin className='mr-5'/> Address</h1>
<p>236 5th SE Avenue, New <br /> York NY10000, United States</p>
</div>
<div className='py-2 md:py-3'>
<h1 className='text-xl flex font-bold'><Phone className='mr-5'/> Phone</h1>
<p>Mobile: +(84) 546-74897</p>
<p>Hotline: +(84) 546-74897</p>
</div>
<div className='py-2 md:py-3'>
<h1 className='text-xl flex font-bold'><Clock className='mr-5'/> Working Time</h1> 
<p>Monday-Friday: 9:00-22:00</p>
<p>Saturday-Sunday: 9:00-21:00</p>
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

