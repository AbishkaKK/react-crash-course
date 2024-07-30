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

## Library vs Framework

### Library

- A tool that provides specific functionality. React is a library.
- Think of Library as a plumber's tool
- React is only concerned about creating dynamic UI. It does not work around routing, making HTTP calls, managing app state, internationalization, form validation or animations.
- Other tools should be used for all the things React does not work with as mentioned above.

### Framework

- A set of tools and guidelines for building apps
- Think of framework as a plumber's toolset with all the different tools in it

## Building Components

### Creating a ListGroup Component

- Install Bootstrap - CSS library
  `npm install bootstrap@latest`
- Import the installed bootstrap into one of the CSS files in the src folder
  - Delete everything in App.css
  - Deleted the whole index.css file
  - Go to main.tsx and change the import of index.css to:
    `import 'bootstrap/dist/css/bootstrap.css'`
- Open in dev to see if Bootstrap is working:
  - The Hello World should have moved from the middle of the page to the top of the page
- Create a new folder in the src folder: components
- Create a new file: listGroup.tsx in the components folder
- Create a new component ListGroup and fill it up
- Export the component and import it in the Message.tsx to display ListGroup
- Create a list item using the HTML ul tag like:
  ```js
  <ul class="list-group">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
    <li class="list-group-item">A fourth item</li>
    <li class="list-group-item">And a fifth one</li>
  </ul>
  ```

### Fragments

- js can only return once. We cannot have more than 1 return statement.
- To return more than once, we can wrap all the return statements in a "div" tag or in a "Fragment" tag (we will have to import Fragment from react) or just use angle brackets <> </> like:
  ```js
  <>
    <h1>List Group</h1>
    <ul className="list-group">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </>
  ```

### Rendering Lists

- There is not loops in jsx, so we cannot print an array by looping through them.
- Thats where we use "Mapping"
- Mapping converts each item in an array to an item of a different type.
- Syntax:
  `arrayName.map();`
  - like:
  ```js
  {
    items.map((item) => <li key={item}>{item}</li>);
  }
  ```

### Conditional Rendering

```js
let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
items = [];

if (items.length === 0)
  return (
    <>
      <h1>List Group</h1>
      <p>No items found</p>
    </>
  );
return (
  <>
    <h1>List Group</h1>
    <ul className="list-group">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </>
);
```

- In the return statement, we cannot include conditional statements like if...else. But it is possible to use them if we include them in {} like:

```js
{
  items.length === 0 ? <p>No items found</p> : null;
}
```

- Another form of if statement:

`js {items.length === 0 && <p>No items founds</p>}`

## Handling Events

- Handling an onClick event like:

`js const handleClick = (event: MouseEvent) => console.log(event);`

- we will import MouseEvent from react, because otherwise React wouldn't know what the event is

### Managing State

- Useing useState to manage the state of the items when clicked

```js
const [selectedIndex, setSelectedIndex] = useState(-1);
onClick={() => {
  setSelectedIndex(index);
}}
```
