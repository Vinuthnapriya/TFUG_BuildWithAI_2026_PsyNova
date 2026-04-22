# TFUG_BuildWithAI_2026_PsyNova
PsyNova is an AI-powered mental wellness platform that uses interactive, scenario-based assessments to analyze user responses and identify patterns related to stress, anxiety, and overall well-being. It provides personalized, non-clinical guidance while promoting awareness, self-improvement, and encouraging professional help when needed.

PsyNova Full-Stack Architecture Walkthrough
We have successfully migrated the PsyNova HTML prototypes into a modern, uncoupled, full-stack web application.

1. What was Accomplished
🎨 React Frontend (/psynova/client)
We integrated the "Luminous Sanctuary" design system seamlessly into a React Vite application.

Components Migrated:
LandingPage: Hero copy, interactive widgets, neon stylistic borders.
LoginSignup: Form authentication UI elements.
Dashboard: Overview metrics module and journaling tools.
Assessment: Selectable mock questionnaire layout.
AiInsights: End-of-state overview rendering mock model outputs.
Navigation Setup: Basic routing mapping via react-router-dom within App.jsx.
Aesthetics Fixed: React specific DOM rules such as className conversions and self-closing tags applied.
⚙️ Node.js API Server (/psynova/server)
A foundational middleware layer built to securely bridge the React frontend with the data science tooling.

Express Entry point: Scaffolded index.js featuring functional routes (/api/health, /api/analyze).
CORS: Ready out of the box for handling cross-origin requests coming from Vite's localhost:5173.
🧠 Python AI Service (/psynova/ai_service)
An endpoint to digest psychological profiles and classify predictive metrics.

Dataset integrated: Migrated mental_disorders_dataset.csv natively adjacent to the app for consumption.
Flask Endpoint: Established a /predict endpoint that processes POST requests and resolves them with insights corresponding to our CSV's Expert Diagnose column.
2. Running Application Locally
To see PsyNova in its complete functional behavior, you'll want to boot all three microservices in independent terminal tabs.

Terminal 1: React Application
bash
cd psynova/client
npm run dev
The React app should spin up at http://localhost:5173/.

Terminal 2: Node.js Orchestration API
bash
cd psynova/server
npm i
node index.js
The Node.js proxy should confirm it is listening on port 5000.

Terminal 3: AI Inference Engine
bash
cd psynova/ai_service
python -m venv venv
venv\Scripts\activate # (on Windows)
pip install -r requirements.txt
python app.py
The Flask server will boot on port 5001, waiting for inference calls from the Node API.
