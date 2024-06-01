# TODO App Client - MERN Stack

Welcome to the TODO App Client repository! This project is developed as part of a Skill Safari curriculum to demonstrate a comprehensive understanding of the MERN (MongoDB, Express, React, Node.js) stack. The app showcases CRUD (Create, Read, Update, Delete) operations, utilizing Postman for API testing, and MongoDB for database management.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Live Demo](#live-demo)
- [Server Repository](#server-repository)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

## Live Demo

Check out the live demo of the TODO app [here](https://main--mern-todo-crud-app.netlify.app/).

## Server Repository

You can view the server/backtend repository [here](https://github.com/aruntutter/mern-todo-app-server).

## Features

- **Create**: Add new tasks to your TODO list.
- **Read**: View all your tasks in one place.
- **Update**: Edit task details, including task descriptions.
- **Delete**: Remove tasks that are no longer needed.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-username/todo-app-mern.git
   cd todo-app-mern
   ```

2. **Install server dependencies**:

   ```sh
   cd server
   npm install
   ```

3. **Install client dependencies**:

   ```sh
   cd ../client
   npm install
   ```

4. **Set up the environment variables**:

   - Create a `.env` file in the `server` directory and add the following:

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   ```

5. **Run the server**:

   ```sh
   cd ../server
   npm start
   ```

6. **Run the client**:
   ```sh
   cd ../client
   npm start
   ```

## Usage

Once the server and client are running, you can access the TODO app in your web browser at `http://localhost:3000`.

### Using Postman for API Testing

To test the API endpoints, you can use Postman or any other API testing tool. Below are the available endpoints:

#### Base URL

http://localhost:5000

### API Endpoints

- **GET /todos**: Retrieve all tasks.
- **POST /save**: Create a new task.
  - Request body: `{ "text": "Task description" }`
- **POST /update**: Update an existing task.
  - Request body: `{ "_id": "task_id", "text": "Updated task description" }`
- **DELETE /delete/:id**: Delete a task by ID.

## Technologies Used

- **MongoDB**: Database for storing tasks.
- **Express**: Web framework for building the API.
- **React**: Frontend library for building the user interface.
- **Node.js**: JavaScript runtime for the server.
- **Postman**: Tool for API testing.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Acknowledgments

This project is developed as part of the Skill Safari curriculum. Special thanks to Skill Safari for providing the learning resources and guidance.

Happy coding!
