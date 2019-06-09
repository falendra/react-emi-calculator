import React, { Component } from 'react';
import SliderAmount from './SliderAmount';
import SliderDuration from './SliderDuration';
import RightSide from './RightSide';
import { Container ,Row, Col, Form} from 'react-bootstrap';
import PropTypes from 'prop-types'; 
import '../css/App.css';


class EmiCalculator extends Component {

  constructor(props) {
    super(props);

    // save props values in to the state
    this.state = {

        valueAmount: this.props.valueA,
        stepAmount: this.props.stepA,
        maxAmount: this.props.maxA,
        minAmount: this.props.minA,

        valueDuration: this.props.valueD,
        stepDuration: this.props.stepD,
        maxDuration: this.props.maxD,
        minDuration: this.props.minD,

        interestRate: this.props.interestRate,
        monthlyInst : this.props.monthlyInst,
        

    };
   
}
render()
    {
        console.log('inside render')
        return(
            <Container className="show-grid mainContainer">
                <Row>
                    <Col className="leftSide" xs={12} md={6}>
                        <Form horizontal>
                            <SliderAmount
                                value={this.state.valueAmount}
                                min={this.state.minAmount}
                                max={this.state.maxAmount}
                                //onChange={this.update.bind(this)}
                                step={this.state.stepAmount}
                                currancy={this.props.currancy}
                            />
                            <SliderDuration
                                value={this.state.valueDuration}
                                min={this.state.minDuration}
                                max={this.state.maxDuration}
                                //onChange={this.update.bind(this)}
                                step={this.state.stepDuration}
                            />
                        </Form>
                        
                    </Col>
                    <RightSide
                    currancy={this.props.currancy}
                    amount={this.state.amountToRepay}
                    monthly={this.state.monthlyInst}
                    APR={this.state.interestRate}
                    
                />
                    
               </Row>
            </Container>
        );
    }
}



EmiCalculator.propTypes= {

    valueD: PropTypes.number,
    stepD: PropTypes.number,
    maxD: PropTypes.number,
    minD: PropTypes.number,

    valueA: PropTypes.number,
    stepA:PropTypes.number,
    maxA: PropTypes.number,
    minA: PropTypes.number,
    interestRate: PropTypes.number,
    currancy: PropTypes.string,
    monthlyInst :PropTypes.number,
};



EmiCalculator.defaultProps = {
    valueD: 6,
    stepD: 1,
    maxD: 24,
    minD: 6,

    valueA : 500,
    stepA : 100,
    maxA : 5000,
    minA : 500,

    interestRate: 0.25,
    monthlyInst :93 ,

    currancy: '$',
};



export default EmiCalculator;