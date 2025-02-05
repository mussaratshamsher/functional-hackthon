
import Hero from '@/components/hero/Hero'
import BrowseRange from '@/components/theme/BrowseRange'
import DesignsServer from '@/components/theme/DesignsServer'
import FurnitureCompo from '@/components/theme/FurnitureCompo'
import Services from '@/components/theme/Services'

import React from 'react'

export default function Home() {
  return (
    <div>

   {/* hero  */}
 
    <Hero />
      
{/* Carousel Component  */}

     <BrowseRange />

     {/* Room designs   */}

    <DesignsServer />
    
    {/* products  */}
     


    {/* services  */}
      
    <Services/>

     {/* Furiniro Furniture  */}

     <FurnitureCompo />

    </div>
  )
}
