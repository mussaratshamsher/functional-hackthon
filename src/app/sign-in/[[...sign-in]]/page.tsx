import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <SignIn />
}

// # NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
// # NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up