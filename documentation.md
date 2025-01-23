<style>
  li {list-style-type: none;} 
</style>

# MERN - STACK
## Backend - Terminal
`npm i express nodemon dotenv`
  > * **express** - server language for setting API
  > * **nodemon** - auto restarting *NODE*
  > * **dotenv** - storing const/variables when pushing to github -> hide sensitive data

 ## Setting Up `Express JS`
  Setting the middlewares, to receive the *requests* (with path and method), to then provide response

??

## Backend- API Routes
  for this specific project, we have API endpoints as follows : 
  >* `GET` */workouts* &nbsp; --> &nbsp; Gets all the workout documents.
  >* `POST` */workouts* &nbsp; --> &nbsp; Creates a new workout document.
  >* `GET` */workouts/:id* &nbsp; --> &nbsp; Get a single workout document.
  >* `DELETE` */workouts/:id* &nbsp; --> &nbsp; Delete a single workout document.
  >* `PATCH` */workouts/:id* &nbsp; --> &nbsp; Update a single workout document.


With `express Router`, we fire functions when we get into specific paths

## Backend - MongoDB & Mongoose
### Debut
  we will use **MongoDB**, a NoSQL database, with collections instead of tables.
  `npm i mongoose` for *Mongoose*, an *ODM (Object Data Modelling)* , wraps data in models and schemas, to use methods in a structured manner.
### Mongoose Schema
  Schema vs Model ?
  Controllers ?

> Backend is setup pretty much, we move to Frontend


## Frontend - Setup
`npx create-react-app` for the frontend
  - `web-vitals` added

### React Hooks
A hook is function that gives you access to React's internal Memory. You gain access to a value and a command to modify this value. A query and a command.\
React has no loop like a game engine, rather it's idle until state changes. You do this by calling the command from above.\

> In React 18 theres a hook called use-sync-external-store which kind of bends the above

When state changes React creates a new UI description from where the state changed. The places where a hook was placed, by you, allow React to query itself for the value needed to create a new UI description, and which items should be interactive by placing the command as event handler. 

### Div

For security reasons, *Frontend Dev server* in `localhost:3000` **can't** fetch from *Backend node server* in `localhost:4000` due to **CORS (Cross-Origin Resource Sharing)** policy
  > Opt 1 : Install package CORS in backend folder.
  > Opt 2 : add proxy field to `package.json` in frontend folder.

context has been wrapped onto `index.js` on `<App />`

[//]: <> "CTRL + SHIFT + V => to Preview .md" 
