# REST API for User Registration, Login, and Authentication

This project is a REST API designed to handle user registration, login, and authentication using Node.js (Express) and MySQL as the database. It ensures secure data handling, robust validation, middleware integration, and proper error handling.

---

## Features

- **User Registration**: Create new user accounts with secure password storage.
- **User Login**: Authenticate existing users and generate access tokens.
- **Authentication Middleware**: Protect private routes with JWT authentication.
- **Password Hashing**: Uses bcrypt for secure password storage.
- **Error Handling**: Centralized error handling with descriptive messages.
- **Validation**: Input validation for all endpoints to ensure data integrity.
- **MySQL Database Integration**: Stores user data in a secure and scalable relational database.

---

## Technologies Used

- **Backend Framework**: Node.js (Express)
- **Database**: MySQL
- **Authentication**: JSON Web Tokens (JWT) for secure user authentication
- **Password Hashing**: bcrypt
- **Validation**: Joi or similar library

---

## File Structure

```
project-root/
|-- controllers/
|   |-- authController.js        # Handles registration and login logic
|-- middlewares/
|   |-- authMiddleware.js        # Protects private routes
|   |-- errorHandler.js          # Centralized error handling middleware
|-- models/
|   |-- User.js                  # User model and database interactions
|-- routes/
|   |-- authRoutes.js            # Routes for authentication (register, login)
|-- validations/
|   |-- authValidation.js        # Validation logic for user input
|-- config/
|   |-- db.js                    # Database connection logic
|-- app.js                       # Main app configuration
|-- server.js                    # Starts the server
```

---

## Database Schema

### Users Table

| Column      | Data Type       | Constraints             |
|-------------|-----------------|-------------------------|
| id          | INT (Primary)   | Auto Increment, Unique  |
| name        | VARCHAR(255)    | Not Null                |
| email       | VARCHAR(255)    | Unique, Not Null        |
| password    | VARCHAR(255)    | Not Null                |
| created_at  | TIMESTAMP       | Default: Current Time   |
| updated_at  | TIMESTAMP       | On Update: Current Time |

---

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the project root and add the following:
   ```env
   DB_HOST=your_mysql_host
   DB_USER=your_mysql_user
   DB_PASSWORD=your_mysql_password
   DB_NAME=your_database_name
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. **Set Up Database**:
   - Create the database and tables using a MySQL client.
   - Example SQL for table creation:
     ```sql
     CREATE TABLE users (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL,
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
     );
     ```

5. **Run the Application**:
   ```bash
   npm start
   ```

6. **Test the API**:
   Use a tool like Postman or cURL to interact with the endpoints.

---

## API Endpoints

### Authentication Routes

#### Register User
- **POST** `/api/auth/register`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User registered successfully",
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
  }
  ```

#### Login User
- **POST** `/api/auth/login`
- **Request Body**:
  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "jwt_token"
  }
  ```

### Protected Routes
- Add the `Authorization: Bearer <token>` header to access protected endpoints.

---

## Error Handling

All errors are handled centrally using the `errorHandler` middleware. Errors are returned in the following format:

```json
{
  "error": "Error message"
}
```

---

## Validation

User input is validated using a validation library before processing the request. Examples:
- **Registration**: Ensures email is valid, password meets security criteria, and required fields are present.
- **Login**: Ensures email and password are provided.

---

## Deployment

Deploy the fully functional application to a free cloud platform like AWS Lightsail or Heroku.

### **Steps for Deployment**:
1. **Choose a Cloud Platform**:
   - [AWS Lightsail](https://aws.amazon.com/lightsail/) or [Heroku](https://www.heroku.com/).

2. **Prepare the Application**:
   - Ensure all dependencies are installed and the application is tested locally.
   - Add a `Procfile` if deploying to Heroku.

3. **Deploy**:
   - For Heroku:
     ```bash
     heroku login
     heroku create
     git push heroku main
     ```
   - For AWS Lightsail:
     - Create an instance and configure it for your application.
     - Upload files and start the server.

4. **Access Your Application**:
   - Use the provided URL from the cloud platform to interact with the deployed application.

---

## Future Improvements

- Add email verification during registration.
- Implement password reset functionality.
- Enhance validation rules for stronger password policies.

