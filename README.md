# NETFLIX-GPT

This project focuses on building a Netflix-like UI with the GPT integration.

## Configuring the Project

1. Go to the parent folder where you have to create netflix-gpt project in VS Code.
2. Run `npm create vite@latest`\
   Provide project name, framework etc. Project folder will be created at the end.
3. Run - \
   `cd netflix-gpt` \
   `npm install`
4. Optional step - initialize the git repo for the project and link it to the github repository. You can do an initial commit as well.
5. Install **Tailwind CSS** - Follow the exact steps mentioned (For Vite) in official Tailwind CSS documentation.
6. Install React Router - `npm install react-router-dom@6`
7. Install redux and configure the store.

## Firebase Configuration

1. Login to google firebase and create a project.
2. Once the project is created, choose the Web option and start registering the application.
3. We can choose firebase hosting as well
4. Do `npm install firebase` in our local project.
5. Copy the firebase SDK from website and paste it in `firebase.js` file. It is better not to push this file into github. So add this in `.gitignore` file. While recreating the project, don't forget to add below code in `firebase.js` -
   ```js
   import { getAuth } from "firebase/auth";
   export const auth = getAuth();
   ```
6. To host the app in firebase, we need to install firebase CLI - `npm install -g firebase-tools`
7. Enable the type of authentication that you want in your project, by clicking Authentication in firebase page.
8. Login to firebase in local by - `firebase login`
9. Configure firebase with `firebase init`
10. Build the project in local - `npm run build`
11. Deploy in firebase with - `firebase deploy`

## Setting Up Redux

1. Install the required packages via npm -

   ```js
   npm install @reduxjs/toolkit
   npm install react-redux
   ```

2. Create userSlice with `createSlice`.
3. Create appStore with `configureStore` and add user reducer in it.
4. Wrap the app component in `<Provider></Provider>` and then pass the appStore to Provider.

## Important Points Regarding Path in Vite

- Resources in `public` folder can be directly accessed inside the project -
  ```html
  <img src="/my-image.png" alt="..." />
  ```
  This will work both in dev and prod (after the build and deploy).
- We can keep the resources in `src/assets` as well. But it should be imported before using it -\

  ❌ - Will not work in prod; in dev it may work -

  ```html
  <img src="/src/assets/images/login-page-bg.jpg" />
  ```

  ✅ Will work in both dev and prod -

  ```js
  import loginBg from "../assets/images/login-page-bg.jpg";
  <img src={loginBg} alt="login-page-background" />;
  ```

## Features in the Project

1. Sign In/Sign Up Page
2. Form Validation with `useRef`
3. Authentication with firebase & deployment in firebase
4. TMDB APIs to get movie details

## `useRef` vs `useState`

```react
function FormWithState() {
 const [name, setName] = useState('');

 const handleSubmit = (e) => {
   e.preventDefault();
   alert(`Name: ${name}`);
 };

 return (
   <form onSubmit={handleSubmit}>
     <input
       value={name}
       onChange={(e) => setName(e.target.value)}
       placeholder="Name"
     />
     <button type="submit">Submit</button>
   </form>
 );
}
```

When we use `useState` for form fields, we are linking the state variable to the form's input field (name, in the above example). Whenever we type anything in the field, it will trigger a re-render of the component. \

**NOTE:** If we don't use the `onChange` attribute in the input, we won't be able to type anything in the input field.\

**NOTE:** Without the `e.preventDefault()`, the form will be submitted once we click on the button and page will reload.

The `useRef` hook in React is used to persist a mutable value across renders without causing a re-render when the value changes. It returns a `ref` object: `{ current: ... }`. You can store any value in `.current`. We can see the same in the below example -

```react
function FormWithRef() {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${nameRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} placeholder="Name" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## `StrictMode` in React

- When we create a React Vite project, our main component gets wrapped in `<StrictMode></StrictMode>`.
- `React.StrictMode` is a development-only tool in React that helps you identify potential problems in your application early. It doesn’t render any visible UI and has no effect in production builds.
- In development, we can see APIs calls happening twice. This is the work of `StrictMode`, which checks for potemtial errors.
- Example -

  ```react
  import { useEffect, useState } from "react";

  function TimerComponent() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        console.log("Tick");
        setSeconds((s) => s + 1);
      }, 1000);

      // ❌ Oops! Forgot to clean up the interval!
      // return () => clearInterval(interval);
    }, []);

    return <h1>Seconds: {seconds}</h1>;
  }
  ```

  `setInterval` will not be automatically removed when a component unmounts.
  If you don’t manually call `clearInterval()`, it keeps running even after the component is gone.

  `setInterval` is a **browser API** — once you call it, it runs on its own schedule until you:

      a. Call clearInterval(id) Or
      b. the page is refreshed

  React has no built-in way to stop it for you. So when a component using `setInterval` is unmounted, the interval continues in the background unless you clean it up in useEffect's return.

  In `StrictMode`, React will:

  1. Mount the component
  2. Unmount it immediately
  3. Re-mount it again

  If you forget to clearInterval, the first one sticks around.
  Then the second one starts.
  You now have multiple intervals running at once — a bug.
  This is how StrictMode helps you spot and fix these issues early.

## Pro Tips

- If the Project has lot for form fields, we can use external library like [Formik](https://formik.org/), which makes form validations easier.
