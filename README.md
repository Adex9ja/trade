### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Prerequisites
To get a development environment running on your local machine, these softwares should be installed first:
1. Node.js (12+)
2. NPM (6+)
3. MongoDB (4+)


### Installing
To get this project installed, follow these steps:

On terminal, run:

- ```npm install``` to install dependencies and 
- ```npm start``` to start server

The server should start on the port 3000.

### Running the tests
To run tests, run ```npm test``` This would test all routes to ensure that valid responses are returned.

### Deployment
This project is hosted on Heroku

### Built With
- Javascript
- Express (Node.js Framework)
- Mocha (Test Framework)
- Chai (Assertion Library)

### How to run this code
1. Make sure MongoDB is running on your system
2. Clone this repository
3. Open terminal in the cloned folder,
   - To install dependencies, run ```  npm install  ``` on terminal
   - To run the application, run ```  npm start  ``` or ``` nodemon exec``` on terminal
4. Launch postman and send a GET request to [localhost:3000](http://localhost:3000/)

## Process Documentation
1. Design Architecture (REST and MVC)
    - The REST architecture was implemented in order to ease communication with other applications or microservices in the standard JSON format.
    - The MVC architecture was also implemented to ease source code organization and enhance sepration of concerns.
2. Webpack
    - The webpack bundling tool was used to bundle the source code into two js files to ease deployment.
        - server.generated.js
        - testBundle.js
3. Nodemon
    - Nodemon was used during the development process to monitor file changes in the ``` /server/ ``` directory and restart the express server on any js file change within directory.
4. Babel
    - Babel was used in order to transpile es5 code to es6+ code to ensure execution of js files in the Node.js runtime environment.
5. EsLint
    - The eslint linting tool was used to enforce a coding style (airbnb), avoid syntax errors and enhance overall code quality.
