# SkillSwap – A Full-Stack Peer Skill Matching & Chat Platform

SkillSwap is a comprehensive full-stack web application designed to facilitate skill exchange among users. It provides a seamless experience for individuals to list their skills, discover compatible peers, and engage in real-time communication to foster skill-sharing opportunities.

-----

## Key Features

  * **User Authentication:** Secure JWT (JSON Web Token) based authentication system.
  * **User Profiles:** Users can register with their name, email, password, and a comprehensive list of skills they possess and skills they wish to acquire.
  * **Automated Matching:** Intelligent algorithm automatically matches users based on complementary skills, displayed prominently on the dashboard.
  * **Skill Swap Requests:** Users can send and receive skill swap requests to and from their matched partners.
  * **Real-Time Chat:** Integrated WhatsApp-style real-time chat functionality for seamless communication between matched users with auto-refresh capabilities.
  * **Modern UI/UX:** Clean, intuitive user interface built with Tailwind CSS, featuring smooth transitions and modern design principles.
  * **Fully Responsive:** Optimized for a consistent experience across all devices, from mobile to desktop.
  * **Local MySQL Backend:** Robust data management powered by a local MySQL database instance.

-----

## Technologies Used

**Frontend:**

  * **React:** A declarative, component-based JavaScript library for building user interfaces.
  * **React Router:** For declarative routing within the application.
  * **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
  * **Axios:** A promise-based HTTP client for making API requests.

**Backend:**

  * **Node.js:** A JavaScript runtime for building scalable server-side applications.
  * **Express:** A fast, unopinionated, minimalist web framework for Node.js.
  * **Sequelize ORM:** An Object-Relational Mapper for Node.js, simplifying interaction with relational databases.
  * **JWT (Authentication):** JSON Web Tokens for secure user authentication.
  * **CORS:** Middleware to enable Cross-Origin Resource Sharing.

**Database:**

  * **MySQL:** A widely used open-source relational database management system (local instance).

-----

## Project Directory Structure

```
SkillSwap/
├── backend/
│   ├── config/             # Database configuration
│   ├── controllers/        # Business logic for API endpoints
│   ├── models/             # Sequelize models for database tables
│   ├── routes/             # API route definitions
│   ├── server.js           # Backend entry point
│   └── package.json        # Backend dependencies
├── frontend/
│   ├── public/             # Public assets
│   ├── src/                # Frontend source code
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # React components for different views/pages
│   │   ├── utils/          # Utility functions
│   │   ├── App.js          # Main React application component
│   │   ├── index.css       # Global CSS
│   │   └── main.jsx        # Frontend entry point
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   └── package.json        # Frontend dependencies
└── README.md
```

-----

## How to Run Locally

SkillSwap is designed to run entirely on your local machine using a local MySQL database instance. No live server or external deployment is required.

### Prerequisites:

  * **Node.js** (v16+)
  * **MySQL** installed and running
  * **Git** (optional but recommended for cloning the repository)

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/SkillSwap.git
cd SkillSwap
```

Alternatively, you can download the project as a ZIP file and extract it manually.

### Step 2: Set Up MySQL Database

Open your MySQL client (e.g., MySQL Workbench, command line) and execute the following command to create the database:

```sql
CREATE DATABASE skillswap_db;
```

Sequelize will automatically generate the `Users`, `Requests`, and `Chats` tables when the backend starts.

### Step 3: Configure Backend

Navigate to the `backend` directory and install the necessary dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following environment variables. Replace the placeholder values with your actual MySQL credentials and a strong JWT secret.

```ini
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=skillswap_db
JWT_SECRET=your_jwt_secret_key_here
```

Start the backend server:

```bash
npm run dev
# or
npm start
```

The backend server will typically run at `http://localhost:5000`.

### Step 4: Configure Frontend

Navigate to the `frontend` directory and install the necessary dependencies:

```bash
cd ../frontend
npm install
```

Start the frontend development server:

```bash
npm start
```

The frontend application will open in your web browser, typically at `http://localhost:3000`.

-----

## Application Workflow

1.  **Register:** Create a new account by providing your name, email, password, and listing your skills (both those you have and those you want to learn).
2.  **Dashboard:** Upon registration or login, you'll be automatically matched with other users based on complementary skills.
3.  **Send Requests:** Browse matched profiles and send skill swap requests to users you'd like to connect with.
4.  **Chat:** Once a request is accepted, initiate real-time conversations in a WhatsApp-style chat room to coordinate your skill exchange.

-----

## UI Highlights

  * **Animated Homepage:** Engaging homepage featuring a dynamic gradient background.
  * **Dashboard:** Modern dashboard with glassmorphism effects and intuitively designed match cards for easy navigation.
  * **Chat UI:** Clean and functional chat interface supporting real-time messaging.
  * **Fully Responsive:** Seamless user experience across diverse screen sizes, from mobile phones to desktop monitors.

Built using modern frontend design principles.

-----

## Optional API Testing with Postman

You can test the API endpoints using Postman or a similar tool:

### User Authentication:

  * `POST /api/users/register`: Register a new user.
  * `POST /api/users/login`: Authenticate an existing user.
  * `GET /api/users/profile`: Retrieve the authenticated user's profile information.

### Matching & Requests:

  * `GET /api/users/match`: Get a list of matched users based on skills.
  * `POST /api/requests/send`: Send a skill swap request to another user.

### Chat:

  * `POST /api/chats/send`: Send a new message in a chat.
  * `GET /api/chats/:partnerId`: Retrieve chat messages with a specific partner.

-----

## Future Enhancements

The following features are planned for future development to enhance the platform's capabilities:

  * Voice messages
  * File sharing in chat
  * Notifications
  * Profile image uploads

-----

## Contribution

SkillSwap is an open-ended project, perfect for beginners looking to contribute to a full-stack application. Feel free to fork the repository, explore the codebase, and extend its functionalities for your learning or portfolio.

-----

## License

This project is open-source and available for educational use. Please refer to the `LICENSE` file (if present) for specific licensing details.
