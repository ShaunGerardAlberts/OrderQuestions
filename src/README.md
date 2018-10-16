# Shaun Alberts Youi Challenge
## Prerequisites
Node

## Running the application
1. Open a terminal
2. Change to shaunfeedback directory shaunfeedback
3. Run the command: npm install
4. Run the command: npm start.  The page should run in localhost:300

## Technologies used
1. Using react, redux and bootstrap
2. React Router
3. Axios to perform asynchronous get request
4. Mocha and chai for unit testing

## Assumption
1. view_count determines the importance of a question

## Project Structure
src folder contains the reducers, components and actions.
The get request is made in action/questionsActions.js

## Running the unit tests
run the command: mocha src/unit-tests in the shaunfeedback directory
If it says that it can find the module chai, run npm install and try again.
