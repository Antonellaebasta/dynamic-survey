Dynamic survey realized with React, Redux, History API - to _route_ without React Router, just using pushState browser API -, Styled-Component, Jest and Enzyme for testing.

In the project directory, you can run:

### `yarn install`

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

## Folder Structure

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.js
    App.test.js
    constants.js
    index.js
    setupTests.js
    actions/
      surveyInit.js
      surveyUpdate.js
    components/
      Footer/
        components/
          Footer.js
        containers/
          Footer.js
          Footer.test.js
      MainContent/
        components/
          MainContent.js
          InputText.js
          Select.js
          RadioButton.js
          Summary.js
        containers/
          MainContent.js
          InputText.js
          Select.js
          RadioButton.js
          Summary.js
      Header.js
    store/
      constants.js
      reducers.js
```

## Supported Browsers

By default, the generated project supports all modern browsers.<br>


