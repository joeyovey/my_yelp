# Welcome to My Yelp
***
**LIVE URL:** https://dev.d1dj6sohhznznx.amplifyapp.com

This is a simple web application that allows users to manage a list of restaurants, including the ability to create and delete restaurant entries.
The application uses AWS Amplify to handle authentication and GraphQL for API interactions.

## Task
This project solves the problem of restaurant management by providing users with an intuitive interface to create, view, and delete restaurants from the system.

**Challenge:** The challenge was to integrate AWS Amplify for authentication and use GraphQL queries and mutations to manage restaurant data efficiently.

## Description
This project uses AWS Amplify as the backend for authentication and data management. The app fetches a list of restaurants from a GraphQL API and displays them. 
Users can add new restaurants by filling out a form and delete restaurants from the list. 
The application leverages React for the frontend and AWS Amplify for state management and GraphQL API integration.

## Features:
**Add Restaurant:** Users can add a restaurant with a name, description, and city.
**List Restaurants:** Displays a table of restaurants fetched from the API.
**Delete Restaurant:** Users can remove a restaurant from the list.

## Installation
**Clone this repository:** (https://github.com/joeyovey/my_yielp.git)
cd (change to your directory name: e.g, yelp_project)
**Install the dependencies:** (npm install)
**Start the project:** (npm start) 

**Configure Amplify** (An active AWS account needed to). 
**Create an account if you don't have one:** (https://signin.aws.amazon.com/signup?request_type=register)
Then run the following commands:
-- amplify init
-- npm install -g @aws-amplify/cli
-- amplify configure
-- amplify add auth
-- npm install aws-amplify @aws-amplify/ui-react
-- npm install aws-amplify@latest
-- amplify add api
-- amplify add hosting
-- amplify publish
-- amplify push
-- amplify status


## Usage
**Once the app is running, you can:**
-- Log in using Amplify’s built-in authentication (sign up if you don’t have an account).
-- Add a restaurant by filling in the form (name, description, city).
-- View the restaurant list which is displayed in a table format.
-- Delete a restaurant by clicking the delete button in the table.

**Technologies Us:**
-- React: For the frontend interface.
-- AWS Amplify: For authentication and GraphQL API.
-- GraphQL: For managing queries and mutations.
-- CSS: For styling the app interface.

**Contributing**
Feel free to contribute by opening issues or pull requests.

./my_project argument1 argument2

### The Core Team
**Joseph Ovey Akawu**
<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>
