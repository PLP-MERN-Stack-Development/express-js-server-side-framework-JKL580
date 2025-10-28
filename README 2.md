🚀 Express.js RESTful API Assignment – Week 2

This project is part of the PLP MERN Stack Development Program.
It demonstrates how to build a RESTful API using Express.js with proper routing, middleware, validation, authentication, and error handling.

📘 Overview

You will:

Set up an Express.js server

Create RESTful CRUD API routes for a products resource

Implement middleware for logging, authentication, and validation

Handle errors gracefully using custom error classes

Add filtering, pagination, and search functionality

🛠️ Technologies Used

Node.js v18+

Express.js

body-parser

uuid

dotenv

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/PLP-MERN-Stack-Development/express-js-server-side-framework-JKL580.git
cd "Express week 2 assignment"

2️⃣ Install Dependencies
npm install

3️⃣ Create .env File

Create a .env file in the project root directory and add:

PORT=3000
API_KEY=mysecretapikey

4️⃣ Run the Server
npm start

Your API should now be running on:
👉 http://localhost:3000

📡 API Endpoints
Base URL
http://localhost:3000/api/products

🟢 GET /api/products

Retrieve all products.

Optional Query Parameters:

Parameter Description Example
category Filter by category ?category=electronics
search Search by name ?search=phone
page Page number ?page=1
limit Results per page ?limit=5

Example Request:

GET /api/products?category=electronics&page=1&limit=2

🔍 GET /api/products/:id

Retrieve a single product by ID.

Example Request:

GET /api/products/1

➕ POST /api/products

Add a new product (requires API key).

Headers:

Content-Type: application/json
x-api-key: mysecretapikey

Request Body:

{
"name": "Blender",
"description": "High-speed blender for smoothies",
"price": 120,
"category": "kitchen",
"inStock": true
}

✏️ PUT /api/products/:id

Update an existing product (requires API key).

Headers:

Content-Type: application/json
x-api-key: mysecretapikey

Request Body:

{
"name": "Smartphone",
"description": "Updated model with 256GB storage",
"price": 950,
"category": "electronics",
"inStock": true
}

❌ DELETE /api/products/:id

Delete a product by ID (requires API key).

Headers:

x-api-key: mysecretapikey

Example Request:

DELETE /api/products/3

📊 GET /api/products/stats/count

Get a summary count of products by category.

Example Response:

{
"electronics": 2,
"kitchen": 1
}

🧩 Middleware Implemented
Middleware Purpose
logger.js Logs HTTP requests with method, URL, and timestamp
auth.js Authenticates requests using an API key
validateProduct.js Validates request body for POST/PUT
NotFoundError.js Handles 404 “Not Found” errors
ValidationError.js Handles invalid input errors
🚨 Error Handling
Error Type HTTP Code Description
ValidationError 400 Invalid or missing fields
NotFoundError 404 Resource not found
ServerError 500 Internal server error
🧪 Testing

Use Postman, Insomnia, or curl to test your API.

Example:

curl -H "x-api-key: mysecretapikey" http://localhost:3000/api/products

✅ Submission Checklist

All CRUD endpoints working

Middleware for logging, validation, and auth implemented

Error handling completed

Filtering, pagination, and search added

.env.example file included

README with setup instructions and API documentation

Author: Joachim Kiplimo
Course: PLP MERN Stack Development – Week 2 (Express.js Server-Side Framework)
