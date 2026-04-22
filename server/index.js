const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// API route to accept assessment submissions and forward to Python AI service
app.post('/api/analyze', async (req, res) => {
    try {
        const payload = req.body;
        
        // Use dynamic import for fetch since node might not have it natively depending on version, 
        // but Node 18+ has native fetch. Assuming native fetch is available.
        const response = await fetch('http://localhost:5001/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
            throw new Error(`Python service failed with status: ${response.status}`);
        }
        
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Analysis error:", error);
        res.status(500).json({ error: "Failed to process analysis. Please ensure Python AI service is running." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
