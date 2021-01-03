**Steps to follow to run the project:**

1. Clone the repo
2. create .env file following .env.example file. Update the values
3. run project: npm run start:local

**Dependencies**

1. express: To make the routing, request handling, and responding easier to write
2. mongoose: To interact with mongoDB
3. validator: To validate strings
4. is-empty: To check whether a value is empty
5. bcryptjs: To hash the password before storing it in your database
6. passport-jwt: A passport strategy for authenticating with a JSON web token
7. jsonwebtoken: An implemetation of JSON web tokens
8. passport: Authentication middleware for Node.js
9. dotenv: To setup environment variables

**Dev-Dependencies**

1. nodemon: It detects the code changes and automatically restarts the server