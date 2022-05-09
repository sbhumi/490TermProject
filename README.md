CS 490 Python Deep Learning Term Project:

By:
Swetha Bhumireddy
James Ta
Bryan Richlinski
Christian Chapman

This is the final project for CS 490 Python Deep Learning, in which we implement a deep learning network for detecting signs of Alzheimers in MRI brain scans. 

In this project our team trained a classifyer on a Kaggle dataset, we then applied transfer learning to this dataset using a novel dataset extracted from nifti scans provided by OASIS3. 

We provide a website using React and node.js which accepts a nifti file, processes the nifti files into individual immages and using an average of the model's classificaton predicts the presence of Alzheimers in the scan. 

Original Model and weights can be downloaded at: 
https://drive.google.com/file/d/13Hn97t4Lb08mVEMY9DhzOEp90JdEQ1xX/view?usp=sharing

Final Model and weights can be downloaded at:
https://drive.google.com/file/d/1--trPnVgEJoYr7JjICE7vH4XUCAyqlIP/view?usp=sharing

Files are as follows:
  
  Transfer_Learning_Kaggle_to_OASIS3.ipynb: The python code used to create the newest model.
  
  createDataset.ipynb: The python code used to preprocess the OASIS3 data for use in our model.
  
  notebook.ipynb (depreciated): Defines the preprocessing steps for original keras model and uses       original 
  model to inference an image from the original Kaggle Dataset.
  
  package-lock.json: tracks the packages that Node.js uses.
  
  package.json: tracks the dependencies for Node.js
  
  Acknowledgements: First model created using dataset provided by Kaggle user VISHAKAN SUBRAMANIAN at https://www.kaggle.com/code/vishakansubramanian/alzheimer-s-disease-classification-notebook/data.
  
  Second model created using dataset modified from OASIS3 https://central.xnat.org/app/template/Index.vm?login=true. 
