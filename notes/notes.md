# Backend & Node.js Basics

---

# 1. What Is Backend?

## Definition

The **backend** is the part of an application that works behind the scenes. Users cannot see it directly.

It handles:
- User authentication (Login/Signup)
- Database operations
- Business logic
- APIs
- Security
- Sending responses to the frontend

### Example

When you log in to Instagram:

1. You enter your email and password.
2. The frontend sends the data to the backend.
3. The backend checks the database.
4. If the details are correct, it sends a success response.
5. The frontend opens your account.

---

# Frontend vs Backend

| Frontend | Backend |
|----------|----------|
| Visible to users | Runs on the server |
| HTML, CSS, JavaScript, React | Node.js, Express, Java, Python, PHP |
| Creates UI | Handles data and logic |
| Sends requests | Sends responses |

---

# 2. Client-Server Architecture

## Definition

Most modern applications follow the **Client-Server Architecture**.

### Client

The client is the application used by users.

Examples:
- Browser
- Mobile App
- Desktop App

### Server

The server receives requests from clients, processes them, and sends back responses.

---

## Flow

```
Client
   │
   │ Request
   ▼
Server
   │
Process Request
Database
   │
Response
   ▼
Client
```

### Example

Opening YouTube:

1. Browser sends request.
2. Server receives request.
3. Server gets video information from database.
4. Server sends data.
5. Browser displays videos.

---

## Request and Response

### Request

Data sent from client to server.

Example:

```
GET /users
```

### Response

Data sent back from server.

Example:

```json
{
  "name": "Vikash",
  "age": 22
}
```

---

# 3. CLI vs GUI

## CLI (Command Line Interface)

Users interact using commands.

Examples:
- Terminal
- Command Prompt
- PowerShell
- Bash

Example:

```bash
node app.js
```

### Advantages

- Faster
- Powerful
- Uses less memory
- Great for developers

### Disadvantages

- Need to remember commands
- Hard for beginners

---

## GUI (Graphical User Interface)

Users interact using buttons, windows, and icons.

Examples:
- Windows
- macOS
- Ubuntu Desktop
- VS Code

### Advantages

- Easy to use
- Beginner-friendly

### Disadvantages

- Slightly slower
- Uses more system resources

---

## CLI vs GUI

| CLI | GUI |
|------|-----|
| Uses commands | Uses graphics |
| Faster | Easier |
| Less memory | More memory |
| Best for developers | Best for normal users |

---

# 4. What Is Node.js?

## Definition

**Node.js is a JavaScript runtime environment.**

It allows JavaScript to run **outside the browser**.

Before Node.js, JavaScript only worked inside browsers.

After Node.js, JavaScript can also run on servers.

---

## Why Is It Called Runtime?

A runtime provides everything needed to execute code.

Node.js includes:
- JavaScript Engine (V8)
- File System
- Networking
- Operating System APIs

---

## What Can We Build Using Node.js?

- REST APIs
- Backend Servers
- Chat Applications
- Real-time Apps
- Streaming Applications
- Authentication Systems
- CLI Tools
- Automation Scripts

Examples:
- Netflix
- PayPal
- LinkedIn
- Uber

---

# 5. Installing Node.js

## Steps

1. Download Node.js from the official website.
2. Install it.
3. Open Terminal.

Check installation:

```bash
node -v
```

Example:

```
v22.23.1
```

Check npm:

```bash
npm -v
```

Example:

```
10.9.2
```

---

# 6. Running Our First Node.js Code

Create a file:

```
app.js
```

Write:

```javascript
console.log("Hello World");
```

Run:

```bash
node app.js
```

Output:

```
Hello World
```

---

# 7. Why Do We Need Node.js?

Without Node.js:

JavaScript only worked inside browsers.

It could:
- Change HTML
- Change CSS
- Handle button clicks

It could NOT:
- Create servers
- Read files
- Access operating system
- Connect to databases

---

With Node.js:

JavaScript can:

- Create web servers
- Read and write files
- Connect to databases
- Build APIs
- Handle authentication
- Build backend applications

---

# Browser JavaScript vs Node.js

| Browser JavaScript | Node.js |
|-------------------|----------|
| Runs inside browser | Runs outside browser |
| Has DOM | No DOM |
| Has window object | No window object |
| Has document object | No document object |
| Cannot access local files directly | Can access files |
| Cannot create servers | Can create servers |

---

## Browser Example

```javascript
document.getElementById("title").innerHTML = "Hello";
```

Works only in browsers.

---

## Node.js Example

```javascript
console.log("Hello from Node");
```

Works in Node.js.

---

# 8. A Brief History of Node.js

- JavaScript was created in **1995** by **Brendan Eich**.
- It was designed to run only in web browsers.
- In **2008**, Google released the **V8 JavaScript Engine**, making JavaScript much faster.
- In **2009**, **Ryan Dahl** created **Node.js** using the V8 engine.
- Node.js allowed JavaScript to run outside the browser.
- Today, Node.js is one of the most popular technologies for backend development.

---

# Important Points

- ✅ Backend handles business logic and data.
- ✅ Client sends requests.
- ✅ Server processes requests and sends responses.
- ✅ Node.js is **not a programming language**.
- ✅ Node.js is a **JavaScript runtime environment**.
- ✅ JavaScript is the language.
- ✅ Node.js lets JavaScript run outside the browser.
- ✅ CLI uses commands.
- ✅ GUI uses graphical elements.
- ✅ Node.js uses Google's V8 JavaScript engine.

---

# Quick Revision

- Backend works behind the scenes.
- Client sends requests; server sends responses.
- CLI = Command Line Interface.
- GUI = Graphical User Interface.
- Node.js is a JavaScript runtime.
- Node.js uses the V8 engine.
- JavaScript in browsers cannot create servers.
- Node.js allows JavaScript to build backend applications.
- Install Node.js and run files using `node filename.js`.