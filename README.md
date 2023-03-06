# News Summary Challenge

### Task

You'll test-drive a single page application in React that send requests to the Guardian API to get Headline and Article data and display them. 

### Serving your app

You'll use React's toolchain to take care of serving your HTML, CSS and JavaScript files.  

## User Stories

Some of these stories will need decomposing if they seem too large.

### Standard DONE!
```
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
```

```
As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines
```

### Extended DONE!

```
As a busy politician
So that I can get an in depth understanding of a very important story
I can click a news headline to see a summary and a photo of the news article
```

```
As a busy politician
So I can get a few more details about an important story
I can see click a news article summary title which links to the original article
```

```
As a busy politician
Just in case my laptop breaks
I can read the site comfortably on my phone
```

## Mockups DONE!

### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup-updated.png)

### Article summary page

![Article page mockup](/images/news-summary-project-article-page-mockup-updated.png)

# Getting Started to run the Application

You need to install all the dependencies:
### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. In this mode The Guardian's API is used through .env.development file.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.In this mode a mock server is used through .env.test file.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
If no tests have been run, press letter a. This will trigger all the tests to run.

### `npm run build`

Builds the app for production to the `build` folder. In this mode The Guardian's API is used through .env.production file.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
