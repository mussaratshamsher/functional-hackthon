import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

import './globals.css'
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  
  title: "Furniro",
  description: "Elegant, Stylish Décor, Trendy Designs, Handcrafted Quality, Premium Materials,Customizable Options, Affordable Luxury, Eco-Friendly Choices",
  icons: {  
    icon:"/images/logo.png",   
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <ClerkProvider>
    <html>
      <head>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <div className="container max-w-[1440px] mx-auto">
         <header className="flex justify-between items-center p-4 text-[#bc9729] bg-white">
            
              <h1 className="text-1xl md:text-3xl font-bold hover:animate-pulse"><span className="text-black text-4xl">W</span>elcome</h1>
            
            <div className="font-bold text-1xl md:text-2xl hover:animate-pulse">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header> 
          <hr className='mx-10'/> <hr className='mx-10'/>
        <Header />
        </div>
        {children}

        <Footer />

        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
