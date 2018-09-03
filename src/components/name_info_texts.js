import React, { Component } from 'react';
import { connect } from 'react-redux';

class NameInfoText extends Component {
    render() {
        return (
            <div className="w3-container w3-large w3-left-align nameInfoHolder">
                <h5><b>Name: {this.props.name}</b></h5>
                <h5><b>Batch: {this.props.batch}</b></h5>
                <h5><b>Roll Number: {this.props.roll}</b></h5>
                <h5><b>Signature of Faculty:</b></h5>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        name: state.form.name,
        batch: state.form.batch,
        roll: state.form.roll,
    }
}

export default connect(mapStateToProps)(NameInfoText);
