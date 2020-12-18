# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Dependencies:

- @reduxjs/toolkit: The official, opinionated, batteries-included toolset for efficient Redux development.
- eslint-config-strict-react: ESLint sharable config for strict linting on React code.

## Technical decision:

**How did you implement styling? What are the pros and cons? Why did you chose this approach?**

Sass (which stands for 'Syntactically awesome style sheets') is an extension of CSS that enables me to use things like variables, nested rules, inline imports and more. It also helps to keep things organised and allows me to create style sheets faster. Create React App has built-in support for Sass, no need complicated integration.

**How did you share state between components? What are the pros and cons? Why did you chose this approach?**

I use Redux for application state management.

**Pros:**

- One store to manage all the state of the application
- Easy to maintain
- Good organization
- Can track easily using developer tools
- Huge community for support

**Cons:**

- No encapsulation. Any component can access the data which can cause security issues.
- Difficult to get acquainted for newbies

**Did you use React hooks? Why or why not?**

Using React Hook will reduce the number of concepts i need to juggle when writing React applications. Hooks let me always use functions instead of having to constantly switch between functions, classes, higher-order components, and render props.

**What would you improve?**

- Find a better way to organize project structure
- Stop eslint running on production instead of disable it when deploy with Heroku
- Find a better way to manage classname instead of trying to find unique name for each component
- Make the UI look more fancy

**How did you prevent wasted renders?**

- Use handle functions instead of inline function when passing a function to a component to advoid creating new function every time the parent component is rendered.
- Use selectors rather than bloating mapStateToProps: A selector is not recomputed unless one of its arguments changes, avoiding useless render caused by strict comparisons.
- Use shouldComponentUpdate method with normal React component.
- Use PureComponent instead of Component because PureComponent handles the shouldComponentUpdate automatically.

**How did you handle side-effects (e.g. data fetching)? What are the pros and cons? Why did you chose this approach?**
I use redux thunks to handle side-effects

**Reason**

- Thunks allow us to write reusable logic that interacts with a Redux store, but without needing to reference a specific store instance.
- Thunks enable us to move more complex logic outside of our components
- From a component's point of view, it doesn't care whether it's dispatching a plain action or kicking off some async logic - it just calls dispatch(doSomething()) and moves on.
- Thunks can return values like promises, allowing logic inside the component to wait for something else to finish.
- Redux toolkit has buit-in method for Thunks, detail guideline for implementation
- Redux Saga is a good choice but most apps do not need the power and capabilities they provide. So, thunks are the default recommended approach for writing async logic with Redux.
