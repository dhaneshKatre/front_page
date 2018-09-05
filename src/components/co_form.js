import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfied';


class CoForm extends Component {

    onTotalCoChanged(event) {
        this.props.totalCoChanged(event.target.value);
        this.props.updateCoArray([]);
        this.props.updateMarksArray([]);
        this.props.updateCoNoArray([]);
    }

    onCoNoChanged(event) {
        let tmp = this.props.coNoArray;
        tmp[event.target.id] = event.target.value;
        this.props.updateCoNoArray(tmp);
    }

    onIndividualMarkTextChanged(event) {
        let tmp = this.props.marksArray;
        tmp[event.target.id] = event.target.value;
        this.props.updateMarksArray(tmp);
    }

    onIndividualCoTextChanged(event) {
        let tmp = this.props.coArray;
        tmp[event.target.id] = event.target.value;
        this.props.updateCoArray(tmp);
    }

    renderTextsForCos() {
        let newcos = []
        for(let i=0;i<this.props.totalCos;i++)
            newcos.push(
                <div className="w3-row" key={Math.random() * Math.random() * Math.random()}>
                    <div className="w3-col s4 w3-center">
                        <TextField
                            margin="normal"
                            style={{width: 145}}
                            id={i.toString()}
                            value={this.props.coNoArray[i]}
                            onChange={this.onCoNoChanged.bind(this)}
                            label={`CO number`}
                        />
                    </div>
                    <div className="w3-col s4 w3-center">
                        <TextField
                            margin="normal"
                            style={{width: 135}}
                            id={i.toString()}
                            value={this.props.coArray[i]}
                            onChange={this.onIndividualCoTextChanged.bind(this)}
                            label={`CO${i+1} questions`}
                        />
                    </div>
                    <div className="w3-col s4 w3-center">
                        <TextField
                            margin="normal"
                            style={{width: 135}}
                            id={i.toString()}
                            value={this.props.marksArray[i]}
                            onChange={this.onIndividualMarkTextChanged.bind(this)}
                            label={`CO${i+1} marks`}
                        />
                    </div>
                </div>
            );
        return newcos;
    }

    render() {
        return (
            <div className="w3-container w3-center">
                <div className="w3-container">
                    <TextField 
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SentimentVerySatisfied />
                              </InputAdornment>
                            )
                        }}
                        id="co-no"
                        label="Enter total COs"
                        margin="normal"
                        type="number"
                        value={this.props.totalCos}
                        onChange={this.onTotalCoChanged.bind(this)}
                    />
                </div><br />
                <div className="w3-center coDiv">
                    {this.renderTextsForCos()}
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        totalCos: state.form.totalCos,
        coArray: state.form.coArray,
        marksArray: state.form.marksArray,
        coNoArray: state.form.coNoArray
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoForm);
