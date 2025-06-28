🎓 SkillSwap – A Full Stack Peer Skill Matching & Chat Platform
SkillSwap is a full-stack web application that allows users to exchange skills with one another.
Users can register, list the skills they have and the ones they want, get matched with compatible peers, and initiate WhatsApp-style real-time chat with matched partners.

🧠 Key Features

🔐 User authentication (JWT-based)

🧾 Register with name, email, password, and skills

🔍 Automatically matched with users based on complementary skills

🤝 Send skill swap requests to matched users

💬 Real-time chat between users (auto-refresh, WhatsApp-style)

💅 Clean UI with Tailwind CSS and smooth transitions

📱 Fully responsive and mobile-ready

⚙️ MySQL backend (runs locally)

💻 Technologies Used
Frontend:
React
React Router
Tailwind CSS
Axios

Backend:
Node.js
Express
Sequelize ORM
JWT (Authentication)
CORS

Database:
MySQL (Local instance)

📁 Project Directory Structure

pgsql
Copy
Edit
SkillSwap/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.js
│   │   ├── index.css
│   │   └── main.jsx
│   ├── tailwind.config.js
│   └── package.json
│
└── README.md
⚙️ How to Run Locally

SkillSwap runs entirely on localhost using a local MySQL database. No live server or deployment required.

Prerequisites:

Node.js (v16+)

MySQL installed and running

Git (optional but recommended)

Step 1: Clone the Repository

bash
Copy
Edit
git clone https://github.com/yourusername/SkillSwap.git
cd SkillSwap
Or download as a ZIP and extract it manually.

Step 2: Set Up MySQL Database

Open MySQL and run:

sql
Copy
Edit
CREATE DATABASE skillswap_db;
Sequelize will auto-generate Users, Requests, and Chats tables.

Step 3: Configure Backend

bash
Copy
Edit
cd backend
npm install
Create a .env file with the following:

ini
Copy
Edit
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=skillswap_db
JWT_SECRET=your_jwt_secret
Start the backend:

bash
Copy
Edit
npm run dev
# or
npm start
Backend will run at http://localhost:5000

Step 4: Configure Frontend

bash
Copy
Edit
cd ../frontend
npm install
npm start
Frontend will open at http://localhost:3000

🚀 Application Workflow

Register with your name, email, password, and skills

Get matched automatically on the Dashboard

Send swap requests

Start chatting in a WhatsApp-style chat room

🖼 UI Highlights

🌈 Animated HomePage with gradient

💼 Dashboard with glassmorphism and match cards

💬 Chat UI with real-time messaging

📱 Fully responsive for mobile & desktop

Built with ❤️ using modern frontend design principles.

🧪 Optional API Testing with Postman

User Auth:

POST /api/users/register

POST /api/users/login

GET /api/users/profile

Matching & Requests:

GET /api/users/match

POST /api/requests/send

Chat:

POST /api/chats/send

GET /api/chats/:partnerId

📦 Future Enhancements

✅ Voice messages

✅ File sharing in chat

🔔 Notifications

📁 Profile image uploads

🤝 Contribution

This is a beginner-friendly, open-ended project.
Feel free to fork or extend it for your learning or portfolio!

📜 License

This project is open source and available for educational use.
