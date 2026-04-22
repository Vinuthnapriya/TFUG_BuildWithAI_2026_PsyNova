# TFUG_BuildWithAI_2026_PsyNova
PsyNova is an AI-powered mental wellness platform that uses interactive, scenario-based assessments to analyze user responses and identify patterns related to stress, anxiety, and overall well-being. It provides personalized, non-clinical guidance while promoting awareness, self-improvement, and encouraging professional help when needed.

# PsyNova - AI Mental Wellness Platform

PsyNova is a full-stack web application designed for interactive mental wellness assessments, utilizing a modern tech stack centered on a gorgeous neon visual aesthetic, Node.js API mediation, and Python-driven intelligence.

## 🌟 Tech Stack

- **Frontend**: React + Vite, styled using Tailwind CSS and the custom *Luminous Sanctuary* design system.
- **Backend**: Node.js + Express.js gateway.
- **AI Service**: Python + Flask inference engine parsing `.csv` data pipelines using Pandas.

## 📂 Project Structure

- `/client` - The Vite + React frontend implementation containing all views, components, and router configuration.
- `/server` - Express server acting as the gateway for frontend submissions and relaying inference to the AI service.
- `/ai_service` - The Python Flask server that consumes the `mental_disorders_dataset.csv` to map inputs to psychological insights.

## 🚀 Getting Started

The platform utilizes a microservice architecture. To view the complete loop, you must start the three independent services.

### 1. Start the React Frontend

Open a new terminal and navigate to the client directory:

```bash
cd psynova/client
npm install
npm run dev
```
*The app will launch on `http://localhost:5173/`*

### 2. Start the Node.js API

Open a second terminal and navigate to the server directory:

```bash
cd psynova/server
npm install
node index.js
```
*The backend API will run on `http://localhost:5000/`*

### 3. Start the Python AI Engine

Open a third terminal, navigate to the AI service, setup the python environment, and start the inference API:

```bash
cd psynova/ai_service
python -m venv venv

# On Windows:
.\venv\Scripts\activate
# On Mac/Linux:
# source venv/bin/activate

pip install -r requirements.txt
python app.py
```
*The Flask inference API will run on `http://localhost:5001/`*

