# Bitasmbl-Real-time-Polling-App

Build a web application where users can create polls, vote in real-time, and view live results with dynamic charts. The project emphasizes an interactive UI, real-time data updates, and social engagement through likes and comments.

## Tech Stack
- React (Front-End)
- Socket.IO (WebSocket)

## Requirements
- Allow users to create, edit, and delete polls
- Enable real-time voting updates for all users
- Display poll results in dynamic charts
- Support user interactions such as liking or commenting on polls

## Installation
1. Clone the repository:
   sh
   git clone https://github.com/your-username/Bitasmbl-Real-time-Polling-App.git
   
2. Install server dependencies:
   sh
   npm install
   
3. Install client dependencies:
   sh
   cd client
   npm install
   
4. Create a `.env` file in the project root with the following:
   env
   PORT=4000
   REACT_APP_SOCKET_SERVER_URL=http://localhost:4000
   

## Usage
1. Start the Socket.IO server:
   sh
   npm run start:server
   
2. Start the React development server:
   sh
   cd client
   npm start
   
3. Open your browser at `http://localhost:3000` to interact with the app.

## Implementation Steps
1. Initialize a Node.js server with Express and integrate Socket.IO for real-time communication.
2. Define Socket.IO events and namespaces to handle `pollCreated`, `vote`, `pollUpdated`, `pollDeleted`, `like`, and `comment` actions.
3. Scaffold the React application using Create React App.
4. Build React components for creating, editing, and deleting polls; emit corresponding Socket.IO events on user actions.
5. Set up state management in React to listen for live updates and re-render poll lists and results.
6. Integrate a charting library (e.g., Chart.js or Recharts) to visualize poll results dynamically.
7. Implement like and comment features in the UI, emitting and listening for Socket.IO events to sync interactions.
8. Apply responsive and interactive styling to enhance the user experience.
9. Test the application across multiple browser windows to verify real-time synchronization.
10. Configure build scripts and environment variables for production deployment.

## API Endpoints
- GET /api/polls — Retrieve all polls
- POST /api/polls — Create a new poll
- PUT /api/polls/:id — Update an existing poll
- DELETE /api/polls/:id — Delete a poll