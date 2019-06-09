import React, { Component } from 'react';
import {Col} from 'react-bootstrap';


class RightSide extends Component {
    render() {
        return (
            <Col className="rightSide" xs={12} md={6}>
              
                <h4>Monthly instaltment</h4>
                <span className="monthlyInstDisplay">{this.props.currancy}{this.props.monthly}</span>

                <h4>Interest rate</h4>
                <span className="aprDisplay">{this.props.APR}%</span>

                

            </Col>

        )
    }
}

export default RightSide;
gfdfhdfhdf