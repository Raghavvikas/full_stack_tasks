# Resizable Layout with React and Express API

## Frontend (React)

- The frontend layout consists of resizable components.
- Users can resize the components by dragging them from any side.
- The neighboring components expand or shrink based on resizing operations.
- Implemented using React and a custom ResizableComponent.

### Installation and Usage

1. Clone this repository.
2. Navigate to the `frontend` directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start both fronend and backend concurrently the development server.
5. Access the application at `http://localhost:3000`.

## Backend (Express API)

- The backend provides APIs for adding and updating data in the components.
- It also includes an API to fetch the count of add and update operations.
- Implemented using Node.js, Express.js, and PostgreSQL.

### Installation and Usage

1. Navigate to the `backend` directory.
2. Run `npm install` to install dependencies.
3. Set up your PostgreSQL database and configure the environment variables in a `.env` file.
4. Run `npm start` to start the Express server.
5. The server will be running at `http://localhost:8000`.

## Database

- The database used is PostgreSQL.
- You can find the database schema and setup instructions in the `database` directory.

## Execution Time

- The execution time for each API request varies based on the complexity of the operations and the server's performance.

## Deployment

- Deploy both the frontend and backend applications to your preferred hosting platform.
- Update the necessary configurations for production deployment.

## Credits

- This project was created by Vikas Raghav.
