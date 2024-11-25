from flask import Flask, request, jsonify
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
import firebase_admin
from firebase_admin import credentials, auth, firestore
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from . import config

# Firebase initialization
cred = credentials.Certificate("accKey.json") # <-- Need to add file with serviec account key
firebase_admin.initialize_app(cred)
db = firestore.client()

# Flask app setup
app = Flask(__name__)
app.config['SECRET_KEY'] = config.SECRET_KEY
CORS(app)  # Allow cross-origin requests for communication with React Native

# Login Manager Setup
login_manager = LoginManager()
login_manager.init_app(app)

# User object
class User(UserMixin):
    def __init__(self, user_id, email, name):
        self.id = user_id
        self.email = email
        self.name = name

# Load current user
@login_manager.user_loader
def load_user(user_id):
    user_ref = db.collection('users').document(user_id)
    user_data = user_ref.get()
    if user_data.exists:
        user_info = user_data.to_dict()
        return User(user_id=user_id, email=user_info['email'], name=user_info['name'])
    return None


# ----------------AUTH ROUTES----------------
@app.route('/auth/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    
    # Get first user with matching email from Firestore
    users_ref = db.collection('users').where('email', '==', email).stream()
    user = next((u.to_dict() for u in users_ref), None)
    
    if user and check_password_hash(user['password'], password):
        user_obj = User(user_id=user['id'], email=user['email'], name=user['name'])
        login_user(user_obj)
        return jsonify({'success': True, 'message': 'Login successful', 'user': {'id': user_obj.id, 'name': user_obj.name, 'email': user_obj.email}})
    
    return jsonify({'success': False, 'message': 'Invalid email or password'}), 401

@app.route('/auth/signup', methods=['POST'])
def signup():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = generate_password_hash(data.get('password'))
    
    # Check if user exists already (by email)
    users_ref = db.collection('users').where('email', '==', email).stream()
    user = next((u.to_dict() for u in users_ref), None)
    if user:
        return jsonify({'success': False, 'message': 'An account with this email already exists'})

    # Add user to Firestore
    users_ref = db.collection('users').document()
    users_ref.set({
        'name': name,
        'email': email,
        'password': password
    })
    return jsonify({'success': True, 'message': 'Account created successfully'})


# ----------------MAIN ROUTES----------------
@app.route('/main/home', methods=['GET'])
@login_required
def dashboard():
    return jsonify({'success': True, 'message': 'Welcome to the dashboard', 'user': {'id': current_user.id, 'name': current_user.name, 'email': current_user.email}})

@app.route('/api/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return jsonify({'success': True, 'message': 'Logged out successfully'})

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
