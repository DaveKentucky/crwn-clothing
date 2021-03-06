# My learning e-commerce project in React

### Welcome to my CRWN clothing project repository!

This is my first larger project in React. The app is an ecommerce platform for a little clothing shop. It simulates a real life scenario and enables all the basic functionalities such a platform should have, including: user authentication, managing the cart and processing payments.

### Live site

You can check out my app hosted at Heroku: [CRWN clothing site](https://davekentucky-crwn.herokuapp.com/)

# Tech stack

This chapter covers the most important frameworks and libraries I have used in the project.

### Table of contents

- [React](#react)
    - [Hooks](#react-hooks-api)
- [Redux](#redux)
    - [Reselect](#redux-reselect)
    - [Sagas](#redux-saga)
- [React Router](#react-router)
- [Styled Components](#styled-components)
- [Firebase](#firebase)
- [Stripe](#stripe)

## React

The app was built with Create React App, which You can read about below. I have used functional and class components so far and sticked to the fundamental practices of React framework.

Find out more: [React](https://pl.reactjs.org/)

### React Hooks API

While building the app I have tried to follow the modern patterns, which include usage of mostly functional components supported by hooks. I have used some of the common hooks provided by React, such as useState, useEffect, useCallback as well as built custom hooks for special needs that appeared in the project. The Hooks API makes processing components' state much easier and allows to remove confusing lifecycle methods from the code.

Find out more: [React Hooks API](https://reactjs.org/docs/hooks-intro.html)

## Redux

Large web apps tend to grow in their state objects that store data used inside components. Most of these data can however be stored outside the components theirselves and pulled from the outside when needed. Some of the state attributes do not need to be passed down the virtual DOM tree through many components, that do not need them. This is the reason I have used the Redux library in my app. The online shops are great examples of apps where state could be stored in a common object. The data requests and changes are applied through appropriate actions that affect only selected part of the state. The implementation includes useSelector and useDispatch hooks provided by Redux.

Find out more: [React Redux](https://react-redux.js.org/)

### Redux Reselect

The app implements memoized selectors created with Reselect library. The Reselct library helps to improve the efficiency of the Redux code. Redux selectors are functions that get triggered quite often but usually the called params are unchanged between distinct calls. Memoized selectors provided by Reselect library do not make unnecesarry calls to the Redux store if the params hadn't changed sinec last call.

Find out more: [Redux Reselct](https://github.com/reduxjs/reselect)

### Redux Saga

The asynchronous API requests have been implemented with usage of redux-saga library. The saga middleware allows to create listener generator functions that catch redux actions and perform the asynchronous calls and puts fetched data back into the redux flow without blocking it. This way we can move the async calls out of the components and even out of the redux selectors into its seperate async based code block.

Find out more: [Redux Saga](https://redux-saga.js.org/)

## React Router

React Router is the library providing routing in the SPA (Single Page Application) created with React. I have used the routing between main pages of the site as well as the specific collections overview pages. It makes the navigation in app more intuitive and enables usage of browser history and url params among other features. The library creators have also provided useful hooks, such as useHistory, useRouteMatch, useParams, which give easy access to the React Router DOM elements.

Find out more: [React Router](https://reactrouter.com/)

## Styled Components

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

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
