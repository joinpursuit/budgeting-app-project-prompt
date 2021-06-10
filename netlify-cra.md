# Deploying a React App (Frontend) to Netlify

Netlify is a service that make it painless to deploy static websites. It's much easier to work with, and supports a lot of predefined projects, like create-react-app.

### Sign up for a Netlify Account

Go to https://app.netlify.com/signup and sign up for an account using your GitHub account.

### Install `netlify-cli`

Once you have an account and are logged in. Lets install `netlify-cli` globally

```
npm install -g netlify-cli
```

This will gives the `netlify` command that we will use to deploy our app.

### Lets bundle/compile our React App

```
npm run build
```

This will take some time. This command will compile our App into a few files and put them in a folder called `build/`
Our compiled app has all the code we wrote for our app but it is often uglified/minified to save space and protect our code of being inspected.
Once building its is done we can inspect the build folder.

### Login in netlify with `netlify-cli`

```
netlify login
```

### Continuous Deployment

To deploy though the Netlify Website follow

- Our notes: https://github.com/joinpursuit/Netlify-CRA-Cont-Deploy-Guide

- External Tutorial: [this tutorial](https://dev.to/easybuoy/deploying-react-app-from-github-to-netlify-3a9j)

<details><summary>Set Up API Key for Continuous Deployment</summary>

Don't forget to add your API Key

Using the Netlify website, go to the `Build and deploy` tab. Under the Environment section select `edit variables` - make sure that the name of your environment variables matches exactly what you have in your app. In the previous instructions, we said to name it `REACT_APP_API_KEY`. Then add your key from the Chrome Developer Console for the YouTube app as the value.

Be sure to start your environmental values with `REACT_APP_`. [See create-react-app documentation for more details](https://create-react-app.dev/docs/adding-custom-environment-variables/#adding-development-environment-variables-in-env)

 <hr />

</details>

<hr />

### Alternative Deploy step by steps

While in your react app:

```
netlify deploy
```

Follow the prompts in the terminal. This will take some time but by the end your app should be deployed. For further detail keep reading:

Choose "Create & configure a new site". You can use your arrow keys to cycle through the options and press enter to make your selection.

When asked with directory type `build`. This will give a sample URL to check your site. When you're ready to deploy to production run: `netlify deploy —prod`

Again type "build" when asked which directory.

Congrats! Your site should now be deployed.

### Set Up Redirects, So that Links to Specific Views like About or an Individual Video work

In your `create-react-app`, go to the `public` folder

- create a file called `_redirects` (exact, no extensions)
- add

```
/* /index.html 200
```

Be sure to add, commit, push and test it.

<hr />

[Original Creator: Corey Ladovsky](https://github.com/joinpursuit/Pursuit-Core-Web/blob/master/react/react_deployment/README.md)
