Updated 07/28/21

## Inclusive Guide Front End (app)
Repo: *https://github.com/inclusiveguide/app*

## Overview

The Inclusive Guide front-end is a Javascript (node.js) application that uses React to manage the user interface, Redux Toolkit (RTK) to manage application state 
and Redux-Saga to manage side effects. ES6 & ES2020 are the preferred syntax


## Key Dependencies
There are several important npm packages that compose this app. This is a non-exhaustive list of all the packages
used, however, those listed below are critical to the app. 

**React**: https://www.npmjs.com/package/react
<br />
**Redux Toolkit**: https://www.npmjs.com/package/@reduxjs/toolkit
<br />
**Redux Saga**: https://redux-saga.js.org/
<br />
<br />
**Algolia**: https://www.npmjs.com/package/algoliasearch
<br />
**CKEditor**: https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic
<br />
**Fortawesome**: https://www.npmjs.com/package/@fortawesome/react-fontawesome
<br />
**Formik**: https://www.npmjs.com/package/formik
<br />
**Framer Motion**: https://www.npmjs.com/package/framer-motion
<br />
**Mapbox GL**: https://www.npmjs.com/package/mapbox-gl
<br />
**React Helmet Async**: https://www.npmjs.com/package/react-helmet-async
<br />
**Twilio**: https://www.npmjs.com/package/twilio
<br />
**TypeScript**: https://www.npmjs.com/package/typescript
<br />
**Yup**: https://www.npmjs.com/package/yup
<br />
**Braintree**: https://www.npmjs.com/package/braintree-web




## Structure (app)
**build** <br />
**node_modules**<br />
**public**<br />
**src**<br />

## Structure (src)
**assets: (/src/assets)**<br />
This directory contains favicon and tab icon .png/.svg files along with the application header logo. 
No other files should be saved here.
---
**config: (/src/config)**<br/>
This directory contains application scoped variables, style definitions, menu configuration and icons.
---
**features**<br />

---
**shared**<br />

---
**utils**<br />

---

## Structure (features)
The features directory contains a child directory (feature) for each "slice" in the Redux "store".
Each feature contains 4 child directories and 1 slice.js file. 
<br/>
<br/>
**1. slice.js** - contains Redux Toolkit's createSlice function that initializes this feature's state
in the store. It also contains reducers which listen for dispatched actions.
<br />
**2. views** - contains React components that compose user interface elements specific to its parent feature.
<br />
**3. services** - contains fetch (Fetch API) calls to the Inclusive Guide API or external 3rd party APIs specific to its parent feature.
<br />
**4. sagas** - contains watcher functions that listen for dispatched Redux actions specific to that feature and generator functions which are called by those watchers.
The generator functions handle all side-effects from the app.
<br />
<br />
**5. admin** - contains up to 4 directories. 
<br />
**5a. fields** - contains .js files which define field types and validation objects (using Yup) for Forms specific to its parent feature.
<br />
**5b. sagas** - contains watcher functions that listen for dispatched Redux actions  specific to the admin (cms) side of that feature and generator functions which are called by those watchers.
The generator functions handle all side-effects from the app.
<br />
**5c. views** - contains React components that compose the user interface for the admin (cms) side of the app.
<br />
<br />
**5d. taxonomy** - contains a directory (taxonomy) for each taxonomy type associated with its parent feature.
Each taxonomy directory contains 7 .js files.
<br />
**5d.1 Create.js** - the form that creates the entity defined by the parent directory.
<br />
**5d.2 fields.js** -the field definitions and validation object for the fields that compose the forms specific to its parent directory.
<br />
**5d.3 Manage.js** - the view to edit or create or search existing entities.
<br />
**5d.4 reducers.js** - reducer functions that are imported to the parent directories slice.
<br />
**5d.5 sagas.js** - watcher functions that listen for dispatched Redux actions specific to that feature and generator functions which are called by those watchers.
The generator functions handle all side-effects from the app.
<br />
**5d.6 services.js** - fetch (Fetch API) calls to the Inclusive Guide API.
<br />
**5d.7 Update.js** -the form that manages (updates/deletes) the entity defined by the parent directory.
<br />
## Overview
