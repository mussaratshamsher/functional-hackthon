

# MANUALLY SANITY DATA INTEGRATION:

Data integeration is done maually form sanity so that it would help in future to upgrade my old products
as well as products can be added without any limit.

# STEPS INVOLVED:

1. Prepared Schema for products according to project need.
2. Imported Schema in index.ts file of sanity.
3. Maunually Integerated data in sanity.
4. Fetched product data through GROQ Query in vision tab to test Schema.
5. Result Generated Successfully.
6. Fetched data Through client & GROQ Queury on Product page to display on ui.
7. Image Fetching involved two errors. 
   a. to fetch image UrlFor(product.image).url() applied to remove image fetching error
   b. to resolve path error remote path name "sanity.io" inserted in config.mjs file
8. Data displayed on UI.
   
   # Images
 [Sanity-Integration](/Documentation/images/1.%20sanity-integration.PNG)

[Sanity-Integration](/Documentation/images/2.%20Fetching-Data.PNG)

[Sanity-Integration](/Documentation/images/3.%20Data-on-ui.PNG)
