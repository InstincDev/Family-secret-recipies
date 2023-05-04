# Family Secret Recipes

Family Secret Recipes is a recipe sharing web application that allows users to share and discover recipes. It is built using the MERN stack.

## Features

   - User authentication: Users can sign up, log in, and log out of the website.
   - Recipe submission: Users can submit recipes by filling out a form with recipe details and an image.
   - Recipe browsing: Users can browse all recipes on the homepage and view individual recipe details.
   - Recipe editing and deletion: Users can edit or delete their own recipes.
   - Like and comment functionality: Users can like and comment on recipes, and receive real-time updates when other users interact with their recipes.
   - Pagination: Recipes are displayed in pages to improve website performance and user experience.
   
 ## Technologies

    - Node.js and Express.js for server-side development
    - MongoDB for database management
    - Mongoose for data modeling and manipulation
    - React for front-end development
    - Passport.js for user authentication
    - Multer for handling file uploads
    - Socket.io for real-time updates
    - Jest for testing
    - Cyclic for deployment
    
  ## Architecture

This website uses the Model-View-Controller (MVC) architecture for organizing code and separating concerns. The server-side code is organized into the following folders:

    config: configuration files for the server, database, and authentication
    controllers: functions for handling HTTP requests and responses
    models: schemas for the recipe and user models
    routes: route definitions for the website's pages and API endpoints
    public: static assets such as images and stylesheets
    views: React components for rendering HTML pages on the server

The front-end code will be organized into the following folders:

    src: JavaScript code for the React components, Redux store, and API calls
    public: static assets such as images and stylesheets
    
   ## Database Schema

The database will have two collections: recipes and users.

The recipes collection will have the following schema:

```JavaScript

{
  _id: ObjectId,
  title: String,
  description: String,
  ingredients: [String],
  directions: [String],
  image: String,
  likes: Number,
  comments: [{
    author: ObjectId,
    text: String,
    createdAt: Date
  }],
  createdAt: Date,
  updatedAt: Date,
  author: ObjectId
}
```
```JavaScript
{
  _id: ObjectId,
  email: String,
  password: String,
  name: String,
  createdAt: Date,
  updatedAt: Date
}
```
## User Authentication

The website uses email and password authentication using the Passport.js library.

## Real-Time Updates

The website uses Socket.io to provide real-time updates for likes and comments on recipes. When a user likes or comments on a recipe, other users viewing the recipe will receive a real-time update without needing to refresh the page.

## Testing

The website will be tested using Jest. Unit tests will be written for individual React components and API functions, and integration tests will be written for the server and database.

## Deployment

The website will be deployed on Cyclic.
