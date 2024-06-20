User Management Microservice with Caching and Search

Features:

CRUD operations for user data
Search users by username and/or age range
Block and unblock users
Exclude blocked users from search results

Installation and Setup
Prerequisites
Node.js (v14 or later)
MongoDB (Use MongoDB Atlas or local instance)


Install dependencies:
npm install

Start the application
npm run start

API Endpoints
User API


Create User
Endpoint: /users
Method: POST
Request Body:
{
  "name": "John",
  "surname": "Doe",
  "username": "johndoe",
  "birthdate": "1990-01-01"
}


Get All Users
Endpoint: /users
Method: GET


Get User by ID
Endpoint: /users/:id
Method: GET

Update User
Endpoint: /users/:id
Method: PUT

Request Body:
{
  "name": "John",
  "surname": "Doe",
  "username": "johndoe",
  "birthdate": "1990-01-01"
}



Delete User
Endpoint: /users/:id
Method: DELETE



Search Users API
Endpoint: /users/search
Method: GET
Query Parameters
username (optional): Filter by username (partial match).
minAge (optional): Filter by minimum age.
maxAge (optional): Filter by maximum age.


Block User API
Endpoint: /block
Method: POST

Request Body
{
  "userId": "60c72b2f9fd3c7001c7b92a0",
  "blockedUserId": "60c72b2f9fd3c7001c7b92a1"
}


Unblock User API
Endpoint: /block/unblock
Method: POST

{
  "userId": "60c72b2f9fd3c7001c7b92a0",
  "blockedUserId": "60c72b2f9fd3c7001c7b92a1"
}



