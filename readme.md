Create and test your API in Postman:

POST /api/users/register: Register a new user with username, email, and password

POST /api/users/login: Login with email and password to get a JWT token.

GET /api/users/me: Get user information (requires a valid JWT in the Authorization header).

Request Header: Authorization: Bearer <your_jwt_token>

# JWT Authentication Example

## Setup

1. Clone the repository.
2. Install dependencies: `npm install`.
3. add .env file according to your requirement
4. Run the server: `npm start`.

## API Endpoints

- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Login and get a JWT token.
- `GET /api/users/me`: Get user information (protected, requires token).

## Postman Collection

[Postman Collection Link](https://www.postman.com/)
[renderapi](https://jwt-authentication-dyhn.onrender.com/api/users/me)