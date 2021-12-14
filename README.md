# Full Stack Budgeting App

Create a backend API using Express that performs full CRUD on a single model, `transactions`. Then, using RESTful routes, connect it to a React app.

![](./assets/index-page.png)

![](./assets/new-page.png)

## Overview

- Use Express to build a back-end.
- Use `create-react-app` to build a front-end.
- Connect the back-end and the front-end.

## User Stories, Acceptance Criteria and Code Quality Rubric

You must implement all of the user stories and acceptance criteria below. After those are completed, look at and implement as many of the bonus features as you want to.

### User Stories

1. I can navigate to the Index page and New page from the navigation bar.
1. I can see a list of income and expenditures with the date, the transaction name and the amount on the Index page.
1. I can click on a "New" button that takes me to the New page, with a form that lets me create a new transaction.
1. After clicking the "Submit" button on the New page's form, I am taken back to the "Index" page and can see the new transaction.
1. I can visit the application via the internet.
1. Once the application is hosted, I can share the link to the New page and someone else will be able to see the form to create a new transaction.

### Acceptance Criteria

#### Back-end

For the back-end to be complete, the following must be true:

- The application uses `express`, `dotenv`, `cors`.
- The application is deployed on Heroku and can be accessed from your React front-end app and Postman.
- The application has the following routes and work as described below.

|  #  | Action  |        URL        | HTTP Verb |    CRUD    |                  Description                   |
| :-: | :-----: | :---------------: | :-------: | :--------: | :--------------------------------------------: |
|  1  |  Index  |   /transactions   |    GET    |  **R**ead  |   Get a list (or index) of all transactions    |
|  2  |  Show   | /transactions/:id |    GET    |  **R**ead  | Get an individual view (show one transactions) |
|  3  | Create  |   /transactions   |   POST    | **C**reate |           Create a new transactions            |
|  4  | Destroy | /transactions/:id |  DELETE   | **D**elete |             Delete a transactions              |
|  5  | Update  | /transactions/:id |    PUT    | **U**pdate |             Update a transactions              |

> **Note:** All of the above routes should work, even though not all will be used via the front-end application.

#### Front-End

For the front-end to be complete, the following must be true:

1. The application is deployed.
1. The navigation bar allows the user to switch between the "Index" and "New" pages.
1. The following is present on the "Index" page:

   - The navigation bar.
   - A list of transactions that have the following properties visible:
     - `date` - a string, in any format.
     - `name` - a string, representing the name of the transactions.
     - `amount` - a number, representing the amount of the expenditure/income.
     - The bank account total somewhere near the top.

1. The following is present on the "New" page:

   - The url will be `/transactions/new`.
   - The navigation bar.
   - The form to create new transactions, which has four fields.
     - `date` - a string, in any format.
     - `name` - a string, the name of the transactions.
     - `amount` - a number, the amount of the expenditure/income.
     - `from` - a string, where this expense/income has come from.

## Deployment

- [Netlify Deployment for create-react-app](./netlify-cra.md)

- [Netlify Set Up Continuous Deployment](https://github.com/joinpursuit/Netlify-CRA-Cont-Deploy-Guide)

- [Deploy Express App to Heroku](./heroku-deployment.md)

## Bonuses

- Complete full CRUD on the front end.
- Change favicon from default react app.
- Use [react-bootstrap](https://react-bootstrap.github.io) to help style your app.
- Change the font color of the Bank account total to be a shade of red if it falls below 0 and to a shade of green if it goes above 1000.
- Use the date object for the date, instead of just a string.
- Use the input type `date` for the date.
- Add a library like [chartjs](https://www.chartjs.org) or [D3](https://www.chartjs.org) to provide visualizations the budget app.
