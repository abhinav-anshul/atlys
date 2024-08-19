# Atlys Project

This is an Atlys assignment.

**Tech Stack** - Vite + TypeScript + React + Wouter + Tailwind
<br />
**External Dependencies** - I have kept the dependency to minimum as mentioned in the document, therefore it uses only 3 `external dependencies` - react, react-dom, wouter, the rest are `dev dependencies`

## Complete Walkthrough - please follow the video

Uploading Screen Recording 2024-08-19 at 5.36.33 PM.mov…





## Decisons Taken
- Vite : Small library with efficient bundling, better in terms of performance when compared to webpack/create-react-app.
- TypeScript : Goes well with modern-day JS development, good for catching errors even for smaller projects.
- React : Project requirement
- Wouter : This is a tiny ~2kb alternative to `react-router`. Although, `react-router` is much more powerful, `wouter` is perfect for smaller projects of this size.
- Tailwind : Best for Quick prototyping to full-scale frontend projects, saves time on classname with near zero compile time in prod.

## About the Project
- It has 3 routes
    - `/dashboard` : This is the feed dashboard from the figma design that consists of `CreatePost` and `Post` component.
    - `/login` : This will render the page with `login` component.
    - `/signup` : This will render the page with `signup` component.

- There are 2 `Modals` for signup and login. Since not a proper flow was provided in the Figma, I have triggered the Modal as follows 
    - Login Modal - It will be triggered whenever you click on the 'comments' from any post
    - Signup Modal - Similarly, it will be triggered when you click on 'Post' button

## Quirks
- I tried hosting it on vercel and on Netlify, but the slugs doesnt work, it likely a bug or I have exhaused my free tier. 
  - https://atlys-project.vercel.app/ - works
  - https://atlys-project.vercel.app/dashboard - or such slug throws an error, likely due to free tier account, same with Netlify



