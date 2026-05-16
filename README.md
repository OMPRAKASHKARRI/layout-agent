# README.md

# AI Layout Agent

An AI-powered layout editing system that transforms structured design JSON using natural language instructions.

Users can interact with the layout through conversational prompts such as:

* Convert this layout to 9:16
* Move headline to top
* Make headline smaller
* Move offer badge higher

The system uses:

* React + Vite frontend
* Express.js backend
* Groq API with Llama 3.1 Instant model
* JSON-based layout transformation engine

---

# Features

* Conversational layout editing
* AI-powered instruction parsing
* Real-time layout updates
* Wireframe preview rendering
* JSON visualization
* Layout transformation utilities
* Responsive artboard resizing
* Semantic node targeting

---

# Project Structure

```bash
layout-agent/
├── client/
├── server/
├── README.md
├── APPROACH.md
└── .gitignore
```

---

# Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* Axios

## Backend

* Node.js
* Express.js
* Groq SDK
* dotenv

## AI Model

* llama-3.1-8b-instant

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone <repo-url>
cd layout-agent
```

---

# Backend Setup

```bash
cd server
npm install
```

Create `.env`

```env
PORT=3001
GROQ_API_KEY=your_groq_api_key
```

Run backend:

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# Demo Prompts

```txt
Convert this design to 9:16
```

```txt
Move headline to top
```

```txt
Move offer badge higher
```

```txt
Make headline smaller
```

```txt
Keep the product large
```

---

# API Endpoint

## POST

```txt
/api/chat
```

Request Body:

```json
{
  "message": "Convert this design to 9:16",
  "layout": {},
  "history": []
}
```

---

# Future Improvements

* Real visual rendering
* Undo/redo support
* Drag-and-drop editing
* Multi-node transformations
* Persistent conversations
* Advanced design intelligence

---



