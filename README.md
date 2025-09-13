# Library Management System (Node.js + Express + MongoDB)

A simple RESTful API for managing books in a library.
This backend system allows you to perform CRUD operations on books (Create, Read, Update, Delete) using Express.js and MongoDB.

---

## Features

* Get all books – Retrieve all stored books
* Add a book – Insert a new book record
* Update a book – Modify book details by bookId
* Delete a book – Remove a book by bookId
* REST API – JSON-based endpoints, easy to integrate with frontend

---

## Tech Stack

* Backend: Node.js, Express.js
* Database: MongoDB with Mongoose
* Tools: Git, Postman for testing API

---

## Project Structure

* db.js → Handles MongoDB connection
* librarySchema.js → Mongoose schema/model
* server.js → Express app (main server file)
* package.json → Dependencies and scripts
* README.md → Project documentation

---

## Installation & Setup

1. Clone the repository
2. Install dependencies using npm install
3. Set up MongoDB connection inside db.js with your MongoDB URI
4. Start the server using node server.js
5. Server will run at [http://localhost:3000](http://localhost:3000)

---

## API Endpoints

* GET /books → Fetch all books
* POST /books → Add a new book
* PUT /books/\:id → Update a book by bookId
* DELETE /books/\:id → Delete a book by bookId

---

## Contributing

1. Fork the repository
2. Create a new branch for your feature or fix
3. Commit and push your changes
4. Submit a Pull Request

---

## License

This project is licensed under the MIT License.

---

Would you like me to also include a **short section describing the expected book fields** (like bookId, title, author, year) in this text-only README?
