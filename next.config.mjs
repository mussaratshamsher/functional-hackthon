// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


const nextConfig = {  
    images: {  
      remotePatterns: [  
        {  
          // This matches the structure of the URLs for images from cdn.sanity.io and fakestoreapi.com  
          protocol: 'https',  
          hostname: 'cdn.sanity.io',  // Updated to a single string  
          port: '',  // No port specified, you can omit this line or keep it empty  
          pathname: '/**',  // Allows any path, so all images can be accessed  
        },  
        {  
          protocol: 'https',  
          hostname: 'fakestoreapi.com',  // Added another pattern for fakestoreapi.com  
          port: '',  // No port specified  
          pathname: '/**',  // Allows any path  
        },  
      ],  
    },  
  };  
  
  export default nextConfig;