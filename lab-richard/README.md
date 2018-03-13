<h1>Code: 41-oauth</h1>

Author: Richard Montgomery

github: montgomeryrd

Version: 1.0.0

<hr>

<h2>Before Use</h2>

Navigate to backend directory and "npm i" dependencies.

Create an env file on the backend and input:

```
GOOGLE_OAUTH_ID=[YOUR GOOGLE OAUTH ID GOES HERE]

GOOGLE_OAUTH_SECRET=[YOUR GOOGLE OAUTH SECRET GOES HERE]

PORT=3000

CLIENT_URL=http://localhost:8080

API_URL=http://localhost:3000
```

We're not currently using an env file on the frontend.

<hr>

<h2>Using oauth</h2>

On the backend, run server "node index.js"

On the frontend, run "live-server"

In browser, navigate to localhost:8080

Click on Login / SignUp with Google

Login with your Google Account

That's all it do!

Look in your terminal where your server is running and there's some sweet info from your Google Account compliments of OpenID Connect!

<hr>

<h2>Lab Assignment</h2>
![cf](http://i.imgur.com/7v5ASc8.png) 41: OAuth
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas 
  
## Learning Objectives  
* Students will learn to add Google OAuth to an express/mongo app

## Requirements  
#### Configuration  
* make a copy of a previous backend project (not sluggram) that uses authorization in the `/lab-<yourname>/something-backend` directory
* make a copy of a previous frontend project (not sluggram) in the `/lab-<yourname>/something-frontend` directory

#### Feature Tasks  

#### backend
* create an app on the google dev console
 * configure oauth credentials to support a client app on `http://localhost`
 * configure oauth credentials to support a server redirect uri to `http://localhost:3000/oauth/google/code`
* create a backend route `GET /oauth/google/code` for handling google oauth 

#### frontend 
* create an index.html with an anchor tag pointing to the google authorization page 
* configure the query string with correct key value pairs

####  Documentation  
Write a description of the project in your README.md, including detailed instructions for how to build your app. In your frontend README.md add a code block with your frontend .env vars, and in your backend README.md add a code block with your backend .env vars. 
