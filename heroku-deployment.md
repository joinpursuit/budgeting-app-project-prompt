# Heroku Deployment

## Lesson Objectives

1. Make a new github repository
1. Create a basic express app
1. set up environmental variables
1. Remove `node_modules`
1. Get started with Heroku
1. Create app on heroku
1. Push git to heroku

## How to Use this Build:

You may feel the urge to wait to deploy your app until it looks nice and works well. However, the more code you write, the more code you'll have to sift through and possibly debug. This will make deployment much harder.

We're going to build a basic `Hello World` app test it, and deploy it. Then you'll build your project on top of his app.

## New Github Repository

This is going to be a porfolio piece so you'll want it hosted on regular [github](https://github.com/).

Make a new repo! Click the + on the upper right navigation bar

![new repo](https://i.imgur.com/Y3IF2lF.png)

<br>

**Choose**

- a repository name
- public (let your instructors see your work)
- initialize with a README
- **VERY IMPORTANT** `Add .gitignore` scroll down and choose Node
- license - optional

Press the `Create Repository` button when you're ready!

## Clone Your New Repository to Your Computer

**In Terminal**

- check you are not already in a git repository

  - **GOOD** -

  ![not a repo](https://i.imgur.com/9wxsCNd.png)

  - **BAD** -

  find a new location for your project!

  ![already a repo](https://i.imgur.com/dAxjl7t.png)

**On Github**

- click the `Clone or Download` button
- check if you are grabbing the right url for `https` or `ssh`
- click the clipboard button

![clone or download](https://i.imgur.com/zeWKOXk.png)

**In Terminal**
type `git clone` and then paste the URL that you copied from github

Should look something like this

![clone command in terminal](https://i.imgur.com/u43zNsF.png)

- **Important!** Don't forget to cd into your new directory/repo!
- `ls -a` - you should see your `README.md` and `.gitignore` that you created on github

## Basic Express App

Let's build a basic express app

- `touch server.js`
- `npm init`
- `npm install express dotenv cors`
- `touch app.js`

Check out `package.json` make sure everything looks as expected

![package.json](./assets/package-json-example.png)

<hr>

## Set the Node Engine

[You should always specify a Node.js version that matches the runtime you're developing and testing with](https://devcenter.heroku.com/articles/nodejs-support). Without setting this, Heroku will 'guess' a version Node.js for you. One big gotcha is that some newer/updated npm packages just won't run on an older version of Node.js and vice versa.

So let's set the correct version:

**In Terminal**

```bash
node --version
```

The line returned is the version, currently, I have `v10.11.0`, but you should set it to whatever your version is.

In package.json, you can add `engines` anywhere, just make sure you don't break the JSON format. In this example we are putting it between the auto-generated version and description fields. Don't forget double quotes and a `,`

```json
  "version": "1.0.0",
  "engines": {
    "node": "10.11.0"
  },
  "description": "",
```

## Set Environmental Variables

We have to set specific to our local computer environment AND our heroku environment. Our variables should **NOT** be tracked by git and should **NOT** be on github.
This can keep things like passwords and api keys safer from hacking\*. There are a few ways to accomplish this. We're going to store our variables in our `.env` file which is a file that should NEVER end up on github (because we will ignore it in our `.gitignore` file) and we can easily export our variables and have access to them on our app.

- [Avoid bad things](https://www.theregister.com/2015/01/06/dev_blunder_shows_github_crawling_with_keyslurping_bots/)

We'll need to use the npm package [dotenv](https://www.npmjs.com/package/dotenv) to manage this file within our project for us

- `touch .env` (should be on the same level as `package.json`)

Add the following:

**IMPORTANT**
This file is NOT JavaScript, so the syntax is different

- comments start with a #
- variables go on the left (no spaces/tabs before it) then an `=` and then the value on the right:
  - Do not put extra spaces
  - Do not use semi-colons
  - Do not use quotes

<hr>

```bash
# Port for localhost
PORT=3000
```

**imporant** `PORT` must be all caps so heroku can automatically configure the port for you. If you make it `port` - you'll have to take extra steps to correct it.

<hr>

**in server.js**

```js
//Dependencies
const express = require("express");
const app = express();
const cors = cors();

require("dotenv").config();

//Port
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;

//___________________
//Middleware
//___________________

app.use(express.json()); // returns middleware that only parses JSON

// this allows any app/site from anywhere access your API. This is a great way to start to get things up and running. Later, add restrictions, as needed.
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Listen
app.listen(PORT, () => console.log("Listening on port:", PORT));
```

<hr>

## Test your app

- If your express app doesn't run locally it definitely won't run on Heroku!
- test it out and fix any bugs

## git add/git commit

- `git add .`
- `git commit -m 'first commit'`
- `git push origin master`

Check this step carefully! Make sure `node_modules` are **NOT** on github!! If they made it to github, that means they are not being ignored by `.gitignore`. If you don't properly ignore them now you'll have massive headaches with heroku later!

<hr>

## If You Need to Remove `node_modules`

In order for heroku to work properly, you can't have `node_modules` in your repo. Instead, heroku will add them itself.

1. go to local repo dir
1. `rm -r node_modules`
1. git: add, commit, push
1. `touch .gitignore`
1. `atom .gitignore`
1. add a line that says just `node_modules` to `.gitignore`
1. add a line that says just `.env` to `.gitignore`
1. save .gitignore
1. git: add, commit, push
1. to get it working locally again: `npm install`

<hr>

## Get started with Heroku

- [Sign up for Heroku](https://signup.heroku.com/)
  - You may need a CC at some point although you will not be charged
- [Install Heroku CLI Tools](https://toolbelt.heroku.com/)
  - Verify by typing `heroku login` anywhere in your terminal
  - Follow prompts to sync up your heroku credentials, DO NOT HEROKU CREATE yet.

<hr>

## Create an app on heroku

- Once you have Heroku CLI, you can access terminal commands to heroku.
- Let's start by creating an app on heroku. If you don't yet have a name for your app it's ok, you can change it later (just make sure you update your git remotes too)
  - `heroku create [unique name]` from your project's root directory where you first initialized git.
    This will check heroku to see if the app name exists, if so you'll get an error message and have to try again.
  - If you don't specify a name, heroku will generate a unique name for you. Their names are pretty cool and somewhat thematic so feel free to do either.
  - You can also do this step off their website if you want but since you'll be working in terminal anyway, might as well just do it through terminal.
  - Notice that if you successfully created a heroku app, you can see that the heroku remote was automatically added to your project's repo. Confirm this by typing `git remote -v`, you should see `origin` as well as `heroku`.

## Push Git

- First update your remote repo so you're code is up to date.
  - `git add -A`
  - `git commit -m "updating code for heroku"`
  - `git push origin master`
- Now also push to heroku
  - `git push heroku master`

Wait 1 minute then type `heroku open`. You should have your deployed app open up in your browser.

- If thing's don't work out, relax and try to find out the error.
- `heroku logs`

<hr>

# Congrats! You are Ready to Build Your app!

# Troubleshooting

You only need to follow this section **if you're having any of the following weird errors!**

---

#### Heroku Can't Figure Out Your Language

- the hidden folder `.git` and `package.json` MUST be on the same level in your directory (the root)
- if it is a Rails app, `.git` and `GemFile` MUST be on the same level in your directory (the root)
- move your files up to `.git` accordingly

<hr>

#### Check that your have ignored node modules

Your node modules should NOT appear on github

![no node modules](https://i.imgur.com/PVYeHAf.png)

If you have not ignored your node modules, follow the steps listed above to remove and ignore them

<hr>

#### Heroku recommends setting the proper node version

[scroll down for an example](https://devcenter.heroku.com/articles/deploying-nodejs)

<hr>

#### Check that your config variables match

In heroku, under your app and its settings, `Reveal Config Vars`

![reveal config vars](https://i.imgur.com/HyPWKAq.png)

Note: your the variable for the port is not listed, but it must be `PORT` all caps. It is accessed by `process.env.PORT`

<hr>

<hr>

#### You Need to Add More Config Variables

Using the NPM package `dotenv`? If you've added new variables, like `SECRET`, be sure to add those custom config variables

- In heroku, under your app and its settings, `Reveal Config Vars`

Otherwise you might be looking at a `Internal server error`

![reveal config vars](https://i.imgur.com/HyPWKAq.png)

You must make the variable names match.

#### You changed your heroku URL

If you changed your app name, you'll have to update the git remote url. Get the right url from heroku (see towards the bottom

![right url](https://i.imgur.com/gU905lY.png)

In terminal, in your repo

- `git remote -v` (should have origin and heroku)
- `git remote remove heroku`
- `git remote add heroku whateverURLherokuListed`

<hr>

### You changed your github project name

![changed github project name](https://i.imgur.com/NOZ16yV.png)

Go back to the main code view and grab the url from the clone or download button

![git clone](https://i.imgur.com/TDZAWNl.png)

- `git remote -v` (should have origin and heroku)
- `git remote remove origin`
- `git remote add origin whateverURLgithubListed`

<hr>

#### Cannot read filetype MIME re: CSS file

- your CSS file is not linked properly/cannot be found/named incorrectly (working locally? see next issue)
- you have a mismatch in opening/closing HTML tags

<hr>

#### Cannot find a file but it is there??? You think you might have changed it?

There is weirdness. If you had named your file `Index.html` and then changed it to `index.html` git, by default, will ignore this change.

Locally, you'll see `index.html` (your updated name). But if you go to github, you'll see it's still `Index.html`. This will 'confuse' heroku as well.

First try to use git to change the name:

```bash
git mv -f Index.html index.html
```

Success?

![changed file name](https://i.imgur.com/hvqvkTR.png)

go ahead and `git add .` `git commit -m 'file name changed'`

If that fails,

- `touch tempfile`,
- copy paste your code from the offending file in there
- `rm` the offending file
- `git add .` `git commit -m 'removed Index.html`
- `touch index.html`
- `git add .` `git commit -m 'added index.html`
