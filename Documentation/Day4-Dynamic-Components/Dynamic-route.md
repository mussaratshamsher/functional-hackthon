


# Process for DYNAMIC ROUTING

//... I have implemented dynamic routing to handle product listings and individual product details using a unique identifier (id). Below are the key steps involved in the process:

1. Creating the Dynamic Route
Created a dynamic route for product details by adding a new directory named products in the pages folder. productdetails directory is created within pages(app) folder. within that created a file named [id].tsx. The square brackets indicate that this file will handle routes where the part of the URL represents a dynamic value—in this case, the product id.

2. Fetching Product Data
In [id].tsx, fetched product data either from Sanity. Used async/await with client method to retrieve details of a specific product based on the id parameter from Sanity. This enables our page to pre-render with the correct product details at build time.

3. State Management for add to cart
State managment is a client component so use client is used as nextjs supports server side component by default but this scenerio involves an error because nextjs does not allow async await to as use with client side rendering, to over this issue productlist is passed as a component in product page.

4. Product & Productdetails page testing
   By Runnig npm run dev command and pasting the generated url Localhost:3000 we can live view of nextjs app. To test product route /products is used next to BASEURL(localhost:3000) .To test dynamic route /productdetails is used next to baseurl. Result was successful without any error. 

5. Running the Application
With the dynamic routing set up, we can run our application using the command npm run dev. This starts the server, allowing users to navigate to /products to view the list of products and to visit /productdetails/[id] for individual product details.

# Conclusion
This setup not only enhances the user experience by providing clear navigation between product listings and details but also leverages Next.js's capabilities for static site generation, improving performance and SEO.


# product dynamic route

[Product-page](/Documentation/Day3-Data-Integration/images/3.%20Data-on-ui.PNG)

 # code

[Product-page-code](/Documentation/images/pro-detail.PNG) 

# single product detail page

[product-detail](/Documentation//images//single-detail.PNG)

[product-detail-code](/Documentation/images/detail-code.PNG)