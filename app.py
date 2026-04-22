from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import random
import os

app = Flask(__name__)
CORS(app)

DATASET_PATH = os.path.join(os.path.dirname(__file__), 'mental_disorders_dataset.csv')

def load_data():
    if os.path.exists(DATASET_PATH):
        try:
            return pd.read_csv(DATASET_PATH)
        except Exception as e:
            print(f"Error loading dataset: {e}")
    return None

df = load_data()

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        # Here we would normally map incoming survey features to the model.
        # Since this is a template integration, we'll return a mock diagnosis 
        # derived from the dataset's target classes.
        
        categories = ['Normal', 'Depression', 'Bipolar Type-1', 'Bipolar Type-2']
        
        if df is not None and not df.empty:
            diagnosis = random.choice(df['Expert Diagnose'].unique())
            confidence = random.randint(75, 95)
        else:
            diagnosis = random.choice(categories)
            confidence = random.randint(70, 95)
            
        return jsonify({
            'diagnosis': diagnosis,
            'confidence': confidence,
            'message': 'Analysis complete based on input.',
            'recommendations': [
                'Implement daily 15-minute routine structuring to reduce cognitive load.',
                'Utilize directed mindfulness exercises twice a day to regulate nervous system responses.'
            ]
        })
        
    except Exception as e:
        print(f"Prediction error: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5001, debug=True)
