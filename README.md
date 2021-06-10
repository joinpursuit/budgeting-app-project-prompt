# Full Stack Budgeting App

Create a backend API using express that performs full CRUD on one model: `transactions`, using RESTful routes.

## Overview

- Use express to build a back-end
- Use create-react-app to build a front-end
- Connect the back-end and front-end

## User Stories, Acceptance Criteria and Code Quality Rubric

You must implement all of the user stories and acceptance criteria below. After those are completed, look at and implement as many of the stretch features as you want to.

### User Stories

1. I can navigate to the index page and new page from the nav bar
1. I can see a list of income and expenditures with the date, the transactions and the value on the index page
1. I can click on the new button that takes me to a new form that lets me create a new transactions
1. After clicking the submit button on the new form, it takes me back to the index page
1. I can visit this app on the Internet
1. I can share the link to the new page (once my apps are hosted online) and someone else will be able to see the form to create a new transaction

### Acceptance Criteria

#### Back-end

- An app that uses `express`, `dotenv`, `cors`
- The app is deployed on heroku and can be accessed from your React front-end app and Postman

Other files and folders required for full functionality of your app

|  #  | Action  |        URL        | HTTP Verb |    CRUD    |                  Description                   |
| :-: | :-----: | :---------------: | :-------: | :--------: | :--------------------------------------------: |
|  1  |  Index  |   /transactions   |    GET    |  **R**ead  |   Get a list (or index) of all transactions    |
|  2  |  Show   | /transactions/:id |    GET    |  **R**ead  | Get an individual view (show one transactions) |
|  3  | Create  |   /transactions   |   POST    | **C**reate |           Create a new transactions            |
|  4  | Destroy | /transactions/:id |  DELETE   | **D**elete |             Delete a transactions              |
|  5  | Update  | /transactions/:id |    PUT    | **U**pdate |             Update a transactions              |

<br />

**Note:** Even though your front-end will not need to consume every route. The routes should work and be readily tested with Postman.

#### Front-End

1. Is deployed online (ie on Netlify)
1. I can use the nav bar to navigate between the `index`page and the `new` page
1. I can see the `index` page which has

   - the nav bar
   - a list of transactions that have the following properties visible:
   - `date` - a string: In any format (bonus will be to use the date object)
   - `name` - a string: The name of the transactions
   - `amount` - a number: The amount of the expenditure/income
   - The bank account total somewhere near the top

1. I can see the new page for a budget transactions. The url will be `/transactionss/new`
   - the nav bar
   - the form to create a new transactions that has the following fields
     - `date` - a string: In any format (bonus will be to use the date object)
     - `name` - a string: The name of the transactions
     - `amount` - a number: The amount of the expenditure/income
     - `from` - a string: Where this expense/income has come from

### Code Quality Rubric

#### Back-end

- The following folders (with the appropriately named files inside)
  - `models`
  - `controllers`
- The following files

  - `package.json`
  - `app.js`
  - `server.js`
  - `.gitignore`
  - `.env`

  **Note:** Even though your front-end will not need to consume every route. The routes should work and be readily tested with Postman.

#### Front-end

- Use JSX to create components
- Use react hooks
- Use `create-react-app` to build a React app
- Use `axios` to make an API call
- Use `react-router-dom` to create different views
- Use CSS to make a responsive and attractive app with decent UX/UI

## Deployment

[Netlify Deployment for create-react-app](./netlify-cra.md)

[Netlify Set Up Continuous Deployment](https://github.com/joinpursuit/Netlify-CRA-Cont-Deploy-Guide)

[Deploy Express App to Heroku](./heroku-deployment.md)

## Bonuses

- Complete full CRUD on the front end
- Change favicon from default react app
- Use [react-bootstrap](https://react-bootstrap.github.io) to help style your app
- Change the font color of the Bank account total to be a shade of red if it falls below 0 and to a shade of green if it goes above 1000
- Use the date object for the date, instead of just a string
- Use the input type `date` for the date
- Add a library like [chatjs](https://www.chartjs.org) or [D3](https://www.chartjs.org) to provide visualizations the budget app

## Example Screenshots

![](./assets/index-page.png)

<br />
<hr />
<br />

![](./assets/new-page.png)
