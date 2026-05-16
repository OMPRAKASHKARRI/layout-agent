
## Objective

Build an AI-powered layout editing system capable of transforming structured design JSON using conversational instructions.

---

# Architecture

The system is divided into two parts:

## Frontend

The frontend provides:

* Chat interface
* Layout preview
* JSON viewer
* Real-time updates

React + Vite were used for fast development and component-based architecture.

---

## Backend

The backend handles:

* Prompt orchestration
* LLM communication
* Layout transformations
* JSON processing

Express.js was used for API routing.

---

# AI Integration

Groq API with Llama 3.1 Instant model is used to:

* Understand natural language instructions
* Generate structured layout actions
* Maintain conversational editing flow

The LLM returns structured JSON actions such as:

```json
{
  "action": "move_node",
  "target": "headline",
  "position": "top"
}
```

---

# Transformation Engine

Custom layout transformation utilities were implemented for:

* resizeArtboard()
* moveNode()
* resizeNode()

These utilities directly manipulate layout JSON while preserving normalized positioning.

---

# Design Decisions

* JSON-first architecture for flexibility
* Semantic node targeting
* Separation of AI reasoning and layout manipulation
* Modular frontend and backend structure

---

# Challenges

* Handling large layout JSON efficiently
* Mapping conversational instructions to layout actions
* Maintaining aspect ratios during transformations
* Rendering normalized coordinate systems visually

---

# Result

The final system successfully demonstrates:

* Conversational AI editing
* Live layout transformation
* Real-time preview updates
* Structured JSON manipulation

---