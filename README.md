# My learning e-commerce project in React

### Welcome to my CRWN clothing project repository!

This is my first larger project in React. The app is an ecommerce platform for a little clothing shop. It simulates a real life scenario and enables all the basic functionalities such a platform should have, including: user authentication, managing the cart and processing payments.

### Live site

You can check out my app hosted at Heroku: [CRWN clothing site](https://davekentucky-crwn.herokuapp.com/)

# Tech Stack

## React

The app was built with Create React App, which You can read about below. I have used functional and class components so far and sticked to the fundamental practices of React framework.

Find out more: [React](https://pl.reactjs.org/)

## Redux

The app state is controlled with the React Redux library and appropirate reducers for shop items and users data. The state is managed with selectors implemented using the redux-reselct library.

Find out more: [React Redux](https://react-redux.js.org/)

## Redux Reselect

The app implements store selectors created with Reselect library. This is a Redux additional library that covers memoization of selector functions. This way the components won't have to rerender everytime a selector is fired with the exact same params. The Reselct library helps to improve the efficiency of the Redux code.

Find out more: [Redux Reselct](https://github.com/reduxjs/reselect)

## React Router

React Router is the library providing routing in the SPA (Single Page Application) created with React. I have used the routing between main pages of the site as well as the specific collections overview pages.

Find out more: [React Router](https://reactrouter.com/)

## styled-components

The styling of elements was implemented in the styled-components library pattern. The CSS rules (strictly SCSS) are implemented inside proper JS files instead of seperate SCSS files. The benefit of such approach is that every component has its own styling all written in JS, which is easier to read (no unnecesarry nesting of SASS instructions) and more convenient to inject JS properties or functions (no need of using SASS mixins).

Find out more: [styled-components](https://styled-components.com/)

## Firebase

The Firebase connection handles user authentication and data storage in the nonSQL Firestore database that Google Firebase provides. The shop items data are fetched from the Firebase and the users' data are stored there as well.

Find out more: [Firebase](https://firebase.google.com/)

## Stripe

The app includes Stripe payments integration. The backend for processing payments is not implemented yet, but payments can be tested with provided test card data.

Find out more: [Stripe](https://stripe.com/)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
