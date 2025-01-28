import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return(
    <div className='container max-w-[1440px] mx-auto'>
        <div className='flex justify-center items-center h-screen'>
            <SignIn />
        </div>
        
    </div>
  )
   
}