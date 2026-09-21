// Backend & APIs Track Data (Noob to Pro Level)
window.backendTopicsData = [
  // ==========================================
  // 1. BEGINNER / NOOB (BACKEND BASICS & HTTP)
  // ==========================================
  {
    title: "Client-Server Architecture: How the Web Works",
    category: "fundamentals",
    level: "beginner",
    hinglish: "Client (User ka browser/phone) internet ke zariye Server (remote computer) ko HTTP Request bhejta hai, aur Server database se data nikal kar Response (HTML/JSON) wapas bhejta hai.",
    english: "The core architectural pattern of the web where client devices request resources and specialized servers process and respond with data or assets.",
    code: `/* Request - Response Flow */
[Browser (Client)] 
       │ 
       ▼ HTTP Request (GET /api/products)
[Web Server (Node/Express)]
       │
       ▼ Query Database (SQL/MongoDB)
[Database]
       │
       ▲ Returns Raw Records
[Web Server]
       │
       ▲ HTTP Response: 200 OK + JSON Payload
[Browser]`,
    preview: `<div style="font-size:0.8rem;">
      <span style="color:#38bdf8;">Client (Browser)</span> &rarr; Request &rarr; <span style="color:#10b981;">Server (Node/API)</span> &rarr; <span style="color:#f59e0b;">Database</span>
    </div>`,
    tip: "Frontend sirf UI dikhata hai; actual business logic aur secure transactions backend server par hote hain.",
    tipType: "good"
  },
  {
    title: "HTTP Methods: GET, POST, PUT, DELETE",
    category: "http",
    level: "beginner",
    hinglish: "Server ko batane ke tarike ki kya action lena hai: `GET` (data mangwana), `POST` (naya data create karna), `PUT/PATCH` (purana data update karna), aur `DELETE` (data hatana). CRUD (Create, Read, Update, Delete) operations isi se bante hain.",
    english: "Standard request methods indicating the desired action to be performed: GET (Read), POST (Create), PUT/PATCH (Update), DELETE (Remove).",
    code: `// CRUD Mapping:
GET    /api/users      // Sabhi users ki list mangwao
GET    /api/users/42   // ID 42 wale user ka data mangwao
POST   /api/users      // Naya user create karo (Body me data bhejo)
PUT    /api/users/42   // User 42 ka profile update karo
DELETE /api/users/42   // User 42 ko delete karo`,
    preview: `<div style="display:flex; gap:6px; flex-wrap:wrap; font-size:0.75rem; font-weight:bold;">
      <span style="background:rgba(16,185,129,0.2); color:#34d399; padding:2px 6px; border-radius:3px;">GET</span>
      <span style="background:rgba(56,189,248,0.2); color:#38bdf8; padding:2px 6px; border-radius:3px;">POST</span>
      <span style="background:rgba(245,158,11,0.2); color:#fbbf24; padding:2px 6px; border-radius:3px;">PUT</span>
      <span style="background:rgba(239,68,68,0.2); color:#fca5a5; padding:2px 6px; border-radius:3px;">DELETE</span>
    </div>`,
    tip: "Passwords ya sensitive data kabhi `GET` request me query parameter me na bhejein; hamesha `POST` request body me bhejein.",
    tipType: "warning"
  },
  {
    title: "HTTP Status Codes Cheat-Sheet",
    category: "http",
    level: "beginner",
    hinglish: "Server ka response status 3-digit number me hota hai: 2xx (Success), 3xx (Redirection), 4xx (Client ki taraf se galti jaise 404 Not Found), aur 5xx (Server ki taraf se fault jaise 500 Crash).",
    english: "Standard response status codes issued by a server in response to a client's request made to the server.",
    code: `200 OK           // Kaam safal hua!
201 Created      // Naya record create ho gaya (POST success)
400 Bad Request  // Client ne galat data format bheja
401 Unauthorized // Login nahi hai / Token missing
403 Forbidden    // Permission nahi hai (Admin only)
404 Not Found    // URL ya item exist nahi karta
500 Server Error // Server code me exception crash ho gaya`,
    preview: `<div style="font-size:0.75rem; display:flex; flex-direction:column; gap:2px;">
      <div><span style="color:#10b981; font-weight:bold;">200 OK</span> &bull; All good!</div>
      <div><span style="color:#ef4444; font-weight:bold;">404 Not Found</span> &bull; Resource doesn't exist</div>
      <div><span style="color:#f59e0b; font-weight:bold;">500 Internal Error</span> &bull; Server crashed</div>
    </div>`,
    tip: "Frontend developer ko status code dekhkar hi pata chalta hai ki error client ki hai ya server crash hua hai.",
    tipType: "good"
  },
  {
    title: "JSON: JavaScript Object Notation",
    category: "http",
    level: "beginner",
    hinglish: "Frontend aur Backend ke bich data bhejne aur mangwane ka universal lightweight format. Keys aur strings double-quotes `\"key\": \"value\"` me honi zaroori hain.",
    english: "Lightweight, language-independent data-interchange format easily readable by both humans and machines.",
    code: `{
  "id": 101,
  "name": "Aman Sharma",
  "isPremium": true,
  "roles": ["developer", "admin"],
  "stats": {
    "projects": 12,
    "rating": 4.9
  }
}`,
    preview: `<div style="font-size:0.8rem; color:#38bdf8;">
      Universal REST API payload format: <code>{"status": "success", "data": [...]}</code>
    </div>`,
    tip: "JSON me functions, undefined ya single quotes ('') allowed nahi hote.",
    tipType: "warning"
  },

  // ==========================================
  // 2. INTERMEDIATE (NODE.JS, EXPRESS & REST API)
  // ==========================================
  {
    title: "Node.js & Express.js Setup",
    category: "node-express",
    level: "intermediate",
    hinglish: "Node.js JavaScript ko browser ke bahar computer/server par run karta hai. Express.js Node ka sabse popular lightweight framework hai jisse kuch hi lines me web server ban jata hai.",
    english: "Node.js is a cross-platform JavaScript runtime. Express is the minimal and flexible web application framework for building APIs.",
    code: `// Terminal command
npm init -y
npm install express cors dotenv

// server.js
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json()); // JSON body parse karne ke liye

app.get('/', (req, res) => {
  res.send('Server chal raha hai!');
});

app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});`,
    preview: `<div style="font-size:0.75rem; background:#000; padding:6px; border-radius:4px; font-family:monospace; color:#10b981;">
      [Express] Server running on http://localhost:5000 &bull; Ready for requests
    </div>`,
    tip: "Auto-restart ke liye development me `nodemon` (`npx nodemon server.js`) use karein.",
    tipType: "pro"
  },
  {
    title: "Building a Complete REST API (CRUD)",
    category: "node-express",
    level: "intermediate",
    hinglish: "Express me complete REST API banana. `req.body` se naya data milta hai, `req.params.id` se specific URL ID milti hai, aur `res.status().json()` se response bhejte hain.",
    english: "Building standard CRUD endpoints handling req.params, req.body, and returning proper JSON responses.",
    code: `const express = require('express');
const app = express();
app.use(express.json());

let todos = [{ id: 1, title: "Learn HTML/CSS", done: true }];

// 1. GET All
app.get('/api/todos', (req, res) => res.json(todos));

// 2. POST (Create)
app.post('/api/todos', (req, res) => {
  const newTodo = { id: Date.now(), title: req.body.title, done: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// 3. DELETE
app.delete('/api/todos/:id', (req, res) => {
  todos = todos.filter(t => t.id !== parseInt(req.params.id));
  res.json({ message: "Deleted successfully" });
});`,
    preview: `<div style="font-size:0.8rem; color:#a78bfa;">
      REST API Endpoints: [GET /api/todos] [POST /api/todos] [DELETE /api/todos/:id]
    </div>`,
    tip: "Har API endpoint ka status code sahi return karein (e.g. POST ke liye 201, GET ke liye 200).",
    tipType: "good"
  },
  {
    title: "Express Middleware & CORS",
    category: "node-express",
    level: "intermediate",
    hinglish: "Middleware wo functions hote hain jo request aane aur response bhejne ke beech me chalte hain (jaise authentication check, logging, body parsing). CORS alag domain se request accept karne ki permission deta hai.",
    english: "Functions executed during the lifecycle of a request to Express. CORS allows secure cross-origin resource sharing from frontend to backend.",
    code: `const cors = require('cors');

// Frontend domain ko allow karein (Cross-Origin Resource Sharing)
app.use(cors({ origin: "http://localhost:5173" }));

// Custom Auth Logger Middleware
app.use((req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next(); // Agle handler par bhejo!
});`,
    preview: `<div style="font-size:0.75rem; color:#38bdf8;">
      Request &rarr; [CORS Middleware] &rarr; [Auth Check] &rarr; [Route Handler] &rarr; Response
    </div>`,
    tip: "Agar middleware me `next()` call karna bhool gaye to request wahi freeze ho jayegi aur browser ghumta rahega!",
    tipType: "warning"
  },

  // ==========================================
  // 3. PRO / ADVANCED (DATABASES, JWT AUTH & SECURITY)
  // ==========================================
  {
    title: "Databases: SQL (PostgreSQL) vs NoSQL (MongoDB)",
    category: "databases",
    level: "pro",
    hinglish: "SQL databases (PostgreSQL, MySQL) structured tables aur relational data ke liye use hote hain (strict schemas, foreign keys). NoSQL (MongoDB) flexible JSON-like documents me data store karta hai.",
    english: "Relational SQL databases (structured tables, ACID transactions, strict schema) vs NoSQL document stores (flexible JSON-like schema, horizontal scaling).",
    code: `/* SQL Table (Structured) */
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

/* NoSQL Document (MongoDB / BSON) */
{
  "_id": "64f8a123...",
  "email": "user@example.com",
  "tags": ["developer", "pro"],
  "createdAt": "2026-09-02T12:00:00Z"
}`,
    preview: `<div style="font-size:0.8rem;">
      <div>&#128196; <strong>SQL:</strong> PostgreSQL, MySQL (Strict tables &amp; Relations)</div>
      <div>&#128203; <strong>NoSQL:</strong> MongoDB (Flexible JSON documents)</div>
    </div>`,
    tip: "Modern developers SQL ke liye `Prisma ORM` aur MongoDB ke liye `Mongoose` use karte hain.",
    tipType: "pro"
  },
  {
    title: "Authentication: JWT (JSON Web Tokens) & Bcrypt",
    category: "security",
    level: "pro",
    hinglish: "Users ke password ko kabhi plain text me save nahi karte; `bcrypt` se hash kiya jata hai. Login ke baad server ek cryptographically signed `JWT token` deta hai jise user har subsequent request me header me bhejta hai.",
    english: "Secure authentication using salted password hashing (Bcrypt) and stateless signed JSON Web Tokens (JWT).",
    code: `const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// 1. Password Hashing on Signup
const hashedPassword = await bcrypt.hash("MySecretPassword123", 10);

// 2. Generating Token on Login
const token = jwt.sign(
  { userId: user.id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '7d' }
);

// 3. Frontend Header:
// Authorization: Bearer <token>`,
    preview: `<div style="font-size:0.75rem; color:#10b981;">
      &#128272; Bcrypt Hash ($2a$10$...) &bull; Signed Stateless JWT Token (Header.Payload.Signature)
    </div>`,
    tip: "JWT tokens ko secure HTTP-only cookies me store karna localStorage se zyada secure mana jata hai XSS attacks se bachne ke liye.",
    tipType: "pro"
  },
  {
    title: "WebSockets vs REST: Real-time Live Communication",
    category: "advanced",
    level: "pro",
    hinglish: "REST API one-way request-response hoti hai (har baar naya connection). WebSockets (Socket.io) ek bar connection banakar 2-way bi-directional live pipe khol deta hai (Live Chat, Multiplayer Games, Live Stock Prices ke liye).",
    english: "Full-duplex bidirectional persistent connection over a single TCP socket, enabling instant live updates without polling.",
    code: `// Server (Socket.io)
const io = require('socket.io')(server, { cors: { origin: "*" } });

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Message aate hi sabhi ko broadcast karo
  socket.on('chatMessage', (msg) => {
    io.emit('messageReceived', msg);
  });
});`,
    preview: `<div style="font-size:0.8rem; color:#38bdf8;">
      &#128225; WebSocket: Bi-directional persistent pipe (Instant live messaging)
    </div>`,
    tip: "Live chats aur collaborative apps (jaise Google Docs, Figma) WebSockets par hi bante hain.",
    tipType: "pro"
  }
];
