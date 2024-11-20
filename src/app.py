from flask import Flask, request, jsonify
import pandas as pd
from sklearn.externals import joblib  # Adjust for how your model is saved

app = Flask(__name__)

# Load your trained model
model = joblib.load('path_to_your_model.pkl')

@app.route('/recommend', methods=['POST'])
def recommend():
    try:
        # Extract input from the request
        data = request.json
        user_profile = data.get('profile')  # Make sure to send the right data
        
        # Use your ML model to get recommendations
        recommendations = model.predict(user_profile)
        
        # Return the recommendations
        return jsonify(recommendations)
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
