// This module declaration file tells TypeScript how to handle imports for image files.
// By declaring modules for '*.png', '*.jpg', and '*.jpeg' file extensions, 
// we inform TypeScript that importing these file types is valid.
// This approach enables us to import images directly in our TypeScript files,
// allowing for better integration with tools that process or reference these images,
// such as when using images in React components.


declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'