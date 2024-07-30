# react-crash-course

This is a project I made with the help of a [[YouTube video](https://youtu.be/SqcY0GlETPk?si=v7QHHvWtcMI8dY-U)]

- started this project on 7/30/2024.

## Pre-requisites

- HTML
- CSS
- JavaScript

## Notes from the video

- Uses a little bit of TypeScript too.
- React is a JS library for building dynamic, interactive library.
- DOM - Document Object Model
- React components to help us write reusable, modular, and better organized code.
- Essentially, React application is a tree of components that work together to form the App.

## Setting up the Development Environment

- Check Node version > 16.0.0
  - Can check by:
    `node -v`
- Should have a code editor
- Check React Vite version, and update to latest by:
  - `npm create vite@latest`
  - Install everything needed: npm install, npm run dev
    - `npm install`
    - Open the installed folder:
      `code .`
    - In the new code editor window's terminal, install npm run dev by:
      `npm run dev`
    - Open the local host link provided in the terminal. This is your first React application. Congratulations on creating your first React application!!!

## Creating a React Component

- Create a new file in the src folder: Message.tsx
  - Meaning of the extension:
    - .ts: plain TypeScript file
    - .tsx: React Component
- Create a new component: Message
- Fill up the component
- Export the component by:
  `export default Message;`
- Go to the app.tsx component, delete everything and create a new component: App
- Fill up the App component by importing Message.tsx
- Export the App component by:
  `export default App;`
