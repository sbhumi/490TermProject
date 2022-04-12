# Flask Server

from flask import Flask
from flask import jsonify
import tensorflow.keras as keras

app = Flask(__name__)

@app.route('/cnn-model')
def get_model_evaluation():

    return jsonify(prediction="Likely to have Alzheimer's")
