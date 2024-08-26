# Food-delivery-app
Tomato 🍅

Tomato is a modern food delivery service application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a seamless user experience for ordering food online with secure payment processing through Stripe.


Features:
 1. User Authentication: Sign up and log in using JWT-based authentication.
 2. Restaurant & Menu Management: Browse restaurants and their menus.
 3. Order Placement: Add items to the cart and place orders.
 4. Payment Integration: Secure payments powered by Stripe.
 5. Order Tracking: Track the status of your orders in real-time.
 6. Admin Panel: Manage restaurants, menus, and orders.

Tech Stack:
 1. Frontend: React.js, Redux, CSS
 2. Backend: Node.js, Express.js
 3. Database: MongoDB
 4. Payment Gateway: Stripe


Installation:
  Clone the repository:
  
    git clone https://github.com/your-username/tomato.git
    cd tomato

Install dependencies:

    cd backend
    npm install

Frontend:

    cd frontend
    npm install

Set up environment variables:
  Create a .env file in the backend directory and add the following:
  
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret
      STRIPE_SECRET_KEY=your_stripe_secret_key

  Create a .env file in the frontend directory and add the following:

    REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key

Run the application:
  Backend:
  
    cd backend
    npm run server

  Frontend:
  
    cd frontend
    npm run dev



Usage:
  1. Register/Login: Create a new account or log in with an existing one.
  2. Browse Restaurants: Explore available restaurants and their menus.
  3. Place an Order: Add items to your cart and place your order.
  4. Make a Payment: Complete your order using Stripe.
  5. Track Orders: Follow the status of your order in real-time.
