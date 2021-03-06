import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import NameInfoText from '../components/name_info_texts';
import TableGenerator from '../components/table_generator';

class MainPaper extends Component {
    getYearConfig() {
        var d = new Date();
        var month = d.getMonth();
        var semType = (month <= 4)?"EVEN":"ODD";
        var n = d.getFullYear();
        n = (semType === 'EVEN')?n-1:n;
        var m = (n+1).toString().substr(-2);
        return `${n}-${m} (${semType})`;
    }

    getDeptName() {
        return (this.props.department !== 'Information Technology')?`${this.props.department} Engineering`:`${this.props.department}`;
    }

    render() {
        return (
            <div className="w3-container w3-col mainDiv">
                <Paper className="paper" id="paper">
                    <div className="w3-container">
                        <div className="w3-row">
                            <div className="w3-col s4">
                                <img src={require('../assets/logo.png')} alt="main logo" className="w3-image logoImg" />
                            </div>
                            <div className="w3-rest w3-container w3-center">
                                <h3><b>Department of {this.getDeptName()}</b></h3><br />
                                <h3><b>Academic Year: {this.getYearConfig()}</b></h3>
                            </div>
                        </div><br />
                        <div className="w3-container w3-center">
                            <h3><b>Assignment No. {this.props.assignNo}</b></h3>
                        </div><br />
                        <div className="w3-row w3-center">
                            <div className="w3-col s6"><h3><b>Subject: {this.props.subject}</b></h3></div>
                            <div className="w3-rest"><h3><b>Semester: {this.props.sem}</b></h3></div>
                        </div>
                    </div>
                    <TableGenerator />
                    <NameInfoText />
                </Paper>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        department: state.form.department,
        subject: state.form.subject,
        semester: state.form.semester,
        assignNo: state.form.assignNo,
        sem: state.form.sem
    }
}

export default connect(mapStateToProps)(MainPaper);
