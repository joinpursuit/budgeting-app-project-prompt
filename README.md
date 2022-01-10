# Full Stack Budgeting App

Create a backend API using Express that performs full CRUD on a single model, `transactions`. Then, using RESTful routes, connect it to a React app.

![](./assets/index-page.png)

![](./assets/new-page.png)

## Overview

- Use Express to build a back-end.
- Use `create-react-app` to build a front-end.
- Connect the back-end and the front-end.
- Deploy both apps so anyone can see them online.

## User Stories, Acceptance Criteria and Code Quality Rubric

You must implement all of the user stories and acceptance criteria below. After those are completed, look at and implement as many of the bonus features as you want to.

Be sure to build this out as a portfolio piece: Something you would be excited to show to a potential employer and be able to talk through the code with them. 

### User Stories

1. I can navigate to the Index page and New page from the navigation bar (and possibly the amount total).
1. I can see a list of income and expenditures with the date, the transaction name and the total amount on the Index page.
1. I can click on a "New" button that takes me to the New page, with a form that lets me create a new transaction.
1. After clicking the "Submit" button on the New page's form, I am taken back to the "Index" page and can see the new transaction.
1. I can click on an item in the "Index" and see a detailed view of the item.
1. I also see an "Edit", "Delete" and "Back" button that are functional. These buttons can either be on the Index page, Show page or both. 
1. I can click on an "Edit" button/link from the show page that takes me to the Edit Page,the form is pre-filled with the data from the item with a form that lets me edit a transaction. 
1. After clicking the "Submit" button on the Edit page's form, I am taken back to the "Show" page of the item I edited. 
1. I can use the delete button to delete an item, and then I am navigated back to the "Index" page, where the deleted item is no longer in the list, without having to refresh the page. 
1. I can visit the application via the internet.
1. Once the application is hosted, I can share the link to the New page and someone else will be able to see the form to create a new transaction.
1. I have some logic with the account total: The account CSS changes depending on the amount. The account should show green (or similar color) if the amount is above $1000. There should be neutral/white color between $0 - $1000. And it should show a red (or similar color) if the bank account value falls below $0. The changing color can be text, background, border, as long as it is in/near the account total and provides clarity with what it is showing.
1. UX/UI:  The user has ease using the app because the app styled. Forms are styled and properly labeled. The navigation is clear and easy to use, a color theme has been chosen and applied. At least one font has been chosen and applied. The app is responsive (readable/usable) across multiple screen sizes/widths.


### Acceptance Criteria

#### Back-end

For the back-end to be complete, the following must be true:

- The application uses `express`, `dotenv`, `cors`.
- The application is deployed on Heroku and can be accessed from your React front-end app and Postman.
- The application has the following routes and work as described below.
- The application handles common errors and has any necessary validations

|  #  | Action  |        URL        | HTTP Verb |    CRUD    |                  Description                   |
| :-: | :-----: | :---------------: | :-------: | :--------: | :--------------------------------------------: |
|  1  |  Index  |   /transactions   |    GET    |  **R**ead  |   Get a list (or index) of all transactions    |
|  2  |  Show   | /transactions/:id |    GET    |  **R**ead  | Get an individual view (show one transactions) |
|  3  | Create  |   /transactions   |   POST    | **C**reate |           Create a new transactions            |
|  4  | Destroy | /transactions/:id |  DELETE   | **D**elete |             Delete a transactions              |
|  5  | Update  | /transactions/:id |    PUT    | **U**pdate |             Update a transactions              |

> **Note:** All of the above routes should work both with an application like Postman and a front-end framework like React


**Model**

- There will be one model with at least these components
 - `item_name`- string - the name of the transaction (ie: income, savings, cat food, etc.)
 - `amount`  -number - the amount of the transaction
 - `date`- string - the date should be a simple string. As a bonus activity, use the date object and date input field and format it to be human-readable
 - `from` - string - who this transacton was with (ie. employer, bank, pet store, grocery store, etc)
 - `category` - string - what category does this fall into (income, savings, pets, food, etc) - bonus, make this an options list on the new/edit forms. 

#### Front-End

For the front-end to be complete, the following must be true:

1. The application is deployed.
1. The navigation bar allows the user to switch between the "Index" and "New" pages. Bonus: shows amount total. 
1. The following is present on the "Index" page:

   - The navigation bar.
   - A list of transactions that have the following properties visible:
     - `date` - a string, in any format.
     - `name` - a string, representing the name of the transactions.
     - `amount` - a number, representing the amount of the expenditure/income.
     - The bank account total somewhere near the top.
     - The bank account CSS changes depending on the amount in the bank account

1. The following is present on the "New" page:
   - The navigation bar.
   - The url will be `/transactions/new`.
   - The form to create new transactions, which has four fields.
     - `date` - a string, in any format.
     - `name` - a string, the name of the transactions.
     - `amount` - a number, the amount of the expenditure/income.
     - `from` - a string, where this expense/income has come from.
     - `category` - a string. As a bonus, this can be an options menu. 
  
1. The following is present on the "Show" page
     - `date` - a string, in any format.
     - `name` - a string, the name of the transactions.
     - `amount` - a number, the amount of the expenditure/income.
     - `from` - a string, where this expense/income has come from.
     - `category` - a string`


1. The following is present on the "Edit" page
   - The navigation bar.
   - The url will be `/transactions/new`.
   - The form to create new transactions, which has four fields.
     - `date` - a string, in any format.
     - `name` - a string, the name of the transactions.
     - `amount` - a number, the amount of the expenditure/income.
     - `from` - a string, where this expense/income has come from.
     - `category` - a string. As a bonus, this can be an options menu. 
  

## Deployment

- [Netlify Deployment for create-react-app](./netlify-cra.md)

- [Netlify Set Up Continuous Deployment](https://github.com/joinpursuit/Netlify-CRA-Cont-Deploy-Guide)

- [Deploy Express App to Heroku](./heroku-deployment.md)

## Bonus Ideas:

- Change favicon from default react app.
- Use [react-bootstrap](https://react-bootstrap.github.io) or similar, to help style your app.
- Show the amount in the nav bar, so it is visible on every view.
- Use the date object for the date, instead of just a string.
- Use the input type `date` for the date.
- Add a library like [chartjs](https://www.chartjs.org) or [D3](https://www.chartjs.org) to provide visualizations the budget app.

Be sure to confirm with your instructor which bonus idea you will implement.
