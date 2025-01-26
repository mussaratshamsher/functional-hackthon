"use client"  
import React from 'react'  

import { zodResolver } from "@hookform/resolvers/zod"  
import { useForm } from "react-hook-form"  
import { z } from "zod"  
   
import { Button } from "@/components/ui/button"  
import {  
  Form,  
  FormControl,  
  FormField,  
  FormItem,  
  FormLabel,  
  FormMessage,  
} from "@/components/ui/form"  
import { Input } from "@/components/ui/input"  

const formSchema = z.object({  
       userName: z.string().min(3, {  //1
        message: "UserName must be at least 3 characters"  
    }).max(20, {  
        message: "Write a maximum of 20 characters"  
    }) ,   
    email: z.string().email(),      //2

    subject: z.string().min(5, {    //3
     message: "Subject must be atleast 5"
    }).max(20, {
      message: "Subject must not exceed from 20-characters!"  
    }),
    message: z.string().min(20, {   //4
        message: "Use 20words atleast!"
    }).max(200, {
        message: "You can use maximum 200 words"
    })
})  

type FormType = z.infer<typeof formSchema>  

export default function ContactForm() {  
    const form = useForm<FormType>({  
        resolver: zodResolver(formSchema),  
    })  

    function onSubmit(values: FormType) {   
        console.log(values);  
    }  

    return (  
        <div>  
            <Form {...form}>  
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">  
                    <FormField  
                        control={form.control}  
                        name="userName"  // Match the schema name here  
                        render={({ field }) => (  
                            <FormItem>  
                                <FormLabel>Username</FormLabel>  
                                <FormControl>  
                                    <Input className='border border-[#a9820f]' placeholder="Name here" {...field} />  
                                </FormControl>   
                                <FormMessage />  
                            </FormItem>  
                        )}  
                    />  
                    <FormField  
                        control={form.control}  
                        name="email"  // Match the schema name here  
                        render={({ field }) => (  
                            <FormItem>  
                                <FormLabel>E-mail</FormLabel>  
                                <FormControl>  
                                    <Input className='border border-[#a9820f]' placeholder="email@furniro.com" {...field} />  
                                </FormControl>   
                                <FormMessage />  
                            </FormItem>  
                        )}  
                    /> 
                    <FormField  
                        control={form.control}  
                        name="subject"  // Match the schema name here  
                        render={({ field }) => (  
                            <FormItem>  
                                <FormLabel>Subject</FormLabel>  
                                <FormControl>  
                                    <Input className='border border-[#a9820f]' placeholder="Subject here" {...field} />  
                                </FormControl>   
                                <FormMessage />  
                            </FormItem>  
                        )}  
                    /> 
                      <FormField  
                        control={form.control}  
                        name="message"  // Match the schema name here  
                        render={({ field }) => (  
                            <FormItem>  
                                <FormLabel>Message</FormLabel>  
                                <FormControl>  
                                    <Input className='border border-[#a9820f]' placeholder="Your message here" {...field} />  
                                </FormControl>   
                                <FormMessage />  
                            </FormItem>  
                        )}  
                    /> 
                    <Button className='bg-[#a9820f] hover:bg-[#c7a53f] duration-300 font-semibold' type="submit">Submit</Button>  
                </form>  
            </Form>  
        </div>  
    )  
}