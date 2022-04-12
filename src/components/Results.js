import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../styleSheets/Results.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as tf from '@tensorflow/tfjs';

class Results extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }

    async imagePredict(image) {
        const model = await tf.loadLayersModel('.././model files/model.json');

        const prediction = model.predict(image);

        return prediction;
    }

    render() { 
        
        return ( <Container></Container> );
    }
}
 
export default Results;
