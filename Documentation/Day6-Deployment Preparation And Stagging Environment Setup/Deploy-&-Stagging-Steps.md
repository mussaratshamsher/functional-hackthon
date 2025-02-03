
# Project Setup & Detail

1. All the project details of are mentioned in Documention file.
2. Public folder contains assest having images and video folder relevent to project
3. src folder contains app & components folder
4. app contains all the routes of project
5. components contain all reuse-able chunks in form of components that are being imported on relevent route. 

# Deployment & Staging Steps

1. All features & functionalities are verified .
2. Project is fully responsive. Speed & responsiveness are tested using Lighthouse. 
3. Functiolities and components are tested using ZAP.
4. Security is implemented in input fields using regex & contact form validation is done through ZOD.
5. All the data is pushed in a gitHub repositery named 'functional-hackthon'.
6. Vercel is choosed as Hoisting Platform to deploy project.
7. Linked github repositery to vercel by importing project.
8. Set in environment variables. 
9. Deploid project.
10. Got result: Project deploid successfly.
11. Live Link: https://functional-hackthon-jet.vercel.app/

# Error Handling Envolved during Deployment

1. npm run build shows all errors.
2. eslint errors involved of linting and removed by linterrors entities off.
3. Server side rendering involves set page as client side so 'use client' is used.
4. 'use client' is not allowed to use with async function so to remove this error, server component is created , & passed on relvant page.
5.  All environment variables saved in project domain to remove internal server error. 


