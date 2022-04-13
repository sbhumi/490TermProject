# Flask Server
import flask
import pandas as pd
import tensorflow as tf
import keras
from keras.models import load_model
from flask import request
from jinja2.utils import markupsafe
import numpy as np
from PIL import Image
import matplotlib.pyplot as plt
from scipy import ndimage
import os

# instantiate flask 
app = flask.Flask(__name__)

def universal_preprocess(img):
    
    if len(img.shape) != 3:
        return resize_img_incorrect(img).reshape(1,128,128,1)
    
    elif(img.shape[2] != 1):
        img = rgb2gray(img)
        return resize_img_incorrect(img).reshape(1,128, 128, 1)
    
    else:
        return resize_img_correct(img).reshape(1,128,128,1)

def resize_img_incorrect(img):

    desired_width = 128
    desired_height = 128
    # Get current depth
    
    current_width = img.shape[0]
    current_height = img.shape[1]
    # Compute depth factor

    width = current_width / desired_width
    height = current_height / desired_height
    width_factor = 1 / width
    height_factor = 1 / height

    img = ndimage.zoom(img, (width_factor, height_factor), order=1)
    return img


def resize_img_correct(img):

    desired_width = 128
    desired_height = 128
    # Get current depth
    
    current_width = img.shape[0]
    current_height = img.shape[1]
    # Compute depth factor

    width = current_width / desired_width
    height = current_height / desired_height
    width_factor = 1 / width
    height_factor = 1 / height

    img = ndimage.zoom(img, (width_factor, height_factor, 1), order=1)
    return img



def rgb2gray(rgb):

    r, g, b = rgb[:,:,0], rgb[:,:,1], rgb[:,:,2]
    gray = 0.2989 * r + 0.5870 * g + 0.1140 * b

    return gray.reshape(gray.shape[0], gray.shape[1])

def full_stack(img):
    model = keras.models.load_model("C://Users//cchap//source//repos//CS 490 Alzheimers Project//490TermProject//model files//model files//new_model.h5")
    img = np.array(Image.open(img))
    img = universal_preprocess(img)
    if(model.predict(img) > 0.5):
        return "Signs of Dementia"
    else:
        return "No Signs of Dementia"

    
    
@app.route('/predict', methods=['GET','POST'])
def upload():
    data = request.files['image']
    results = full_stack(data)
    print(results)
    return results


# start the flask app, allow remote connections 
app.run(host='0.0.0.0')
