## Description

This is sample code for Truss's new coding test written in React. The goal of this project is to test the new Truss coding test and also challenge myself to write code in React and test out different front end tools such as Truss's USWDS library.

### Instructions
Write a static webpage that loads data from https://swapi.dev/api/planets/, formats and displays that data in a table.
 
 
 
Name the entrypoint for your application index.html.

_NOTE: If the applicant is using create react app then this line should indicate that they don't need an index.html file as an entry point._ 


You may use additional files to organize your code. You may also use frameworks and build tools as long as clear, simple instructions are provided for how to run them. Please ensure your solution can be easily viewed in the browser. Be ready to answer questions about why you chose a given approach.

Don't worry about making the table look fancy; you can style it however you would like to alongside the requirements below. We will look at the markup you generate and any code you write to load or display the data.

For each planet in the dataset, please display:

The planet's name
The name should be a link that, when clicked, opens the planet's API URL in a new window
The planet's climate
How many residents the planet has
The terrains found on the planet
The population
The surface area covered by water
Assume that all planets are perfect spheres.
The radius of a sphere is half its diameter.
The value of surface_water from the API is a percentage, so a value of 50 means the planet is 50% covered in water.
Round these values to the nearest integer value.
Additionally, please satisfy these requirements:

Show a loading message while loading the data, and hide this message once the data is displayed.
Display an error message if the data load fails for some reason. We may test your code against an invalid URL to demonstrate this.
Sort the planets alphabetically
Any column that is unknown should be displayed as ?.
Format all numbers larger than 999 with spaces to group digits into groups of three. For example, ten thousand should be displayed as 10 000.
Cells in the table should be separated by 1 pixel gray lines.
Stretch goals (optional)
If you complete the above and still have additional time, you can choose to complete one or more of the following.

__Stretch Goals:__
This is absolutely not required for submitting the work sample and should not be worked on beyond the four hour time limit.

The API only returns the first page of data by default. Add a "load more" button that loads additional pages of data when clicked. Only show this button if there is more data to be loaded.
Sort the table by a column's values when that column's header is clicked.
Table has both an empty state and loading state (displayed when no data exists, and when data is loading respectively).
Spruce up your page with some extra styling & design elements!
Make sure your page is usable on mobile devices.
Include some tests.


------------------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
