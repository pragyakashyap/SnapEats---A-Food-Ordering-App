# Snap Eats

**Snap Eats** is a full-stack food ordering application built using the MERN stack (MongoDB, Express.js, React, Node.js). This application provides a seamless and secure platform for users to browse, order food, and manage their profiles and payment details.

**Deployed Link**: [Snap Eats](https://snapeats-food-ordering-app-1.netlify.app/)

## Features

### User Authentication and Authorization
- Secure login and signup functionality using **JWT (JSON Web Tokens)** and **Bcrypt** for password hashing.

### User Features
- **Address Management**: Add, update, and delete addresses.
- **Payment Details**: Save and manage payment information.
- **Cart Management**: Add multiple items to the cart, update quantities, or remove items.
- **Profile Management**: Edit personal details within the application.

### Backend
- **RESTful APIs** developed using **Express.js** to handle CRUD operations.
- Integrated **MongoDB** for data storage and retrieval.

## Tech Stack

### Frontend
- **React.js**: For building the user interface.

### Backend
- **Node.js**: Backend runtime environment.
- **Express.js**: Framework for building the RESTful API.

### Database
- **MongoDB**: NoSQL database for storing application data.

### Authentication
- **JWT**: For secure token-based user authentication.
- **Bcrypt**: For hashing user passwords.

## Setup and Installation

### Prerequisites
- **Node.js**: Install the latest version from [Node.js official website](https://nodejs.org/).
- **MongoDB**: Set up a MongoDB instance locally or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Steps to Run Locally

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/snap-eats.git
    cd snap-eats
    ```

2. **Install Dependencies**:
    Navigate to the root folder (Frontend and Backend) and run:
    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:
    Create a `.env` file in the root directory and add:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. **Start the Application**:
    - Start the backend server:
      ```bash
      npm start
      ```
    - Start the React frontend move to Frontend\Food-Ordering-App:
      ```bash
      npm run dev
      ```

5. **Access the Application**:
    Open your browser and navigate to `http://localhost:5173`.

##Screenshots



##Future Enhancements

- **Add real-time order tracking.**

- **Integrate third-party payment gateways.**

- **Add an admin panel for managing orders and inventory.**
