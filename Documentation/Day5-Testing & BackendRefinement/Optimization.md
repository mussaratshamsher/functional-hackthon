
# Optimization

# Image Optimization
Next.js Image Component: Used the next/image component for
 automatic image optimization, including responsive sizes and formats.

 # Props: Static Site Generation (SSG) and Incremental Static Regeneration (ISR)
Pre-rendering: Used props for pages that can be rendered at build time.

# Sanity
Used routs for data fetching instead of client-side data fetching where it makes sense. 
This minimizes the client-side bundle size and offloads processing to the server.

# Prefetching and Linking
Utilized the Link component to prefetch pages, which helps speed up navigation.

# Reducing JavaScript Bundle Size
Remove Unused Dependencies: Audit dependencies and eliminate that are not essential.
Tree Shaking: Used light weight libraries that support tree shaking, enabling to only import what's necessary.

# Environment Variables
Managed sensitive information securely pushing .env in gitignore file.

# Additional optimization
Nextjs allows command for image optimation using npm i sharp, used that for optimization.



