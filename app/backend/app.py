from flask import Flask, request, jsonify
from flask_cors import CORS  # Enable CORS for mobile requests

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

# Sample endpoint returning JSON data
# @app.route('/api/items', methods=['GET'])
# def get_items():


@app.route('/store-reponse', methods=['POST'])
def store_response():
    try:
        data = request.json
        freq = data.get('frequency')
        response = data.get('response')
        return jsonify({"status" : True, "message" : "Response successfully recieved!"})
    except Exception as e:
        return jsonify({"status" : False, "message" : str(e)}), 500




if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)  # Accessible to other devices on the same network
