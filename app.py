# Installing nibabel
!pip install nibabel

# Importing
import nibabel as nib
import flask
import pandas as pd
import tensorflow as tf
import keras
from keras.models import load_model
from flask import request
import numpy as np
from PIL import Image
import matplotlib.pyplot as plt
from scipy import ndimage
import os
from io import BytesIO
from nibabel import FileHolder, Nifti1Image

# instantiate flask 
app = flask.Flask(__name__)

### Reshape Vertically
def resize_img(img):

    # Desired sizes
    desired_depth = 256

    # Get current sizes
    current_depth = img.shape[2]

    # Resize factors
    depth = current_depth / desired_depth
    depth_factor = 1 / depth

    # Resizing
    img = ndimage.zoom(img, (1, 1, depth_factor), order=1)
    return img

### Reshape 2d
def resize_img2D(img):

    # Desired sizes
    desired_width = 128
    desired_height = 128

    # Get current sizes
    current_width = img.shape[0]
    current_height = img.shape[1]

    # Resize factors
    width = current_width / desired_width
    height = current_height / desired_height

    width_factor = 1 / width
    height_factor = 1 / height


    # Resizing
    img = ndimage.zoom(img, (width_factor, height_factor), order=1)
    return img


### Find likely range, Create list
def process_img(img):
    slices = []
    for i in range(140,160):
        slices.append(crop_img(img[:,:,i]))
        
    return slices


### Crop/Pad list
def crop_img(img):
  for side in range(4):
    for location in range(128): # Iterate through 128: l/w of image
      if (img[location,:].max() > img[:,:].mean()): # if the array at given slice
      
        img = img[location:,:]
        zero = np.zeros((25, img.shape[1]))
        img = np.concatenate([zero, img], axis = 0)
        img = np.rot90(img)
        break

  img = resize_img2D(img)
  return img.reshape(128,128,1)



def full_stack(img):
    model = keras.models.load_model('T5000.h5')
    
    # Load nifti
    img = np.array(nib.load(img).dataobj)
    
    # Expand image
    img = resize_img(img)
    
    # Grab slices of image
    img = process_img(img)

    # Array
    img = np.array(img)
                   
    if(model.predict(img).mean() > 0.5):
        return "Signs of Dementia"
    else:
        return "No Signs of Dementia"
    
    
@app.route('/predict', methods=['GET','POST'])
def upload():
    data = request.files['nifti']
    data.save(r'file.nii')
    results = full_stack(r'file.nii')
    return results


# start the flask app, allow remote connections 
app.run(host='0.0.0.0')
