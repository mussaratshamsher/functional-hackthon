
import React from 'react';  
import Designs from './Designs'; // Make sure to update this path based on your structure  
import { client } from '@/sanity/lib/client';  

export default async function DesignsServer() {  
    const designsQuery = `*[_type == "designs"][0]{  
        title, subtitle, button, image1, image2, image3, image4 }`;  

    const designsData = await client.fetch(designsQuery);  

    return <Designs designsData={designsData} />;  
}  

