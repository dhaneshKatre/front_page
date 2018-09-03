import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Card, CardContent, TextField, Select, MenuItem, InputLabel, FormControl, FormHelperText, Button } from '@material-ui/core';
import * as actions from '../actions';
import CoForm from '../components/co_form';

class MainForm extends React.Component {

    onSubjectChanged(event) {
        this.props.subjectChanged(event.target.value);
    }

    onDepartmentChanged(event) {
        this.props.departmentChanged(event.target.value);
    }

    onAssignNoChanged(event) {
        this.props.assignmentNoChanged(event.target.value);
    }

    onSemesterChanged(event) {
        this.props.semChanged(event.target.value);
    }

    onNameChanged(event) {
        this.props.nameChanged(event.target.value);
    }

    onRollChanged(event) {
        this.props.rollChanged(event.target.value);
    }

    onBatchChanged(event) {
        this.props.batchChanged(event.target.value);
    }

    render() {
        return (
            <div>
                <div className="w3-row">
                    <div className="w3-col s4 w3-container w3-center">
                        <Card className="formCont">
                            <CardContent>
                                <form>
                                    <FormControl>
                                        <InputLabel htmlFor="dept-select">Department</InputLabel>
                                        <Select
                                            style={{width: 250}}
                                            value={this.props.department}
                                            onChange={this.onDepartmentChanged.bind(this)}
                                            inputProps={{name: 'Department', id: "dept-select"}} >
                                                <MenuItem value="Computer">Computer</MenuItem>
                                                <MenuItem value="Electronics">Electronics</MenuItem>
                                                <MenuItem value="EXTC">EXTC</MenuItem>
                                                <MenuItem value="Information Technology">Information Technology</MenuItem>
                                                <MenuItem value="Instrumentation">Instrumentation</MenuItem>
                                        </Select>
                                        <FormHelperText>Choose your Department</FormHelperText>
                                    </FormControl><br />
                                    <FormControl>
                                        <InputLabel htmlFor="sem-select">Semester</InputLabel>
                                        <Select
                                            style={{width: 250}}
                                            value={this.props.sem}
                                            onChange={this.onSemesterChanged.bind(this)}
                                            inputProps={{name: 'Semester', id: "sem-select"}} >
                                                <MenuItem value="I">I</MenuItem>
                                                <MenuItem value="II">II</MenuItem>
                                                <MenuItem value="III">III</MenuItem>
                                                <MenuItem value="IV">IV</MenuItem>
                                                <MenuItem value="V">V</MenuItem>
                                                <MenuItem value="VI">VI</MenuItem>
                                                <MenuItem value="VII">VII</MenuItem>
                                                <MenuItem value="VIII">VIII</MenuItem>
                                        </Select>
                                        <FormHelperText>Choose your Semester</FormHelperText>
                                    </FormControl><br />
                                    <TextField
                                        style={{width: 250}}
                                        id="subject-name"
                                        label="Enter subject name"
                                        margin="normal"
                                        value={this.props.subject}
                                        onChange={this.onSubjectChanged.bind(this)}
                                    /><br />
                                    <TextField
                                        style={{width: 250}}
                                        id="assign-no"
                                        label="Enter assignment number"
                                        margin="normal"
                                        type="number"
                                        value={this.props.assignNo}
                                        onChange={this.onAssignNoChanged.bind(this)}
                                    /><br />
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="w3-col s4 w3-container w3-center">
                        <Card>
                            <CardContent>
                                <CoForm />
                            </CardContent>
                        </Card>
                    </div>
                    <div className="w3-col s4 w3-container w3-center">
                        <Card className="formCont">
                            <CardContent>
                                <form>
                                    <TextField 
                                        id="name"
                                        label="Enter Name"
                                        margin="normal"
                                        value={this.props.name}
                                        onChange={this.onNameChanged.bind(this)}
                                    /><br />
                                    <TextField 
                                        id="roll"
                                        label="Enter Roll Number"
                                        margin="normal"
                                        value={this.props.roll}
                                        onChange={this.onRollChanged.bind(this)}
                                    /><br />
                                    <TextField 
                                        id="batch"
                                        label="Enter Batch"
                                        margin="normal"
                                        value={this.props.batch}
                                        onChange={this.onBatchChanged.bind(this)}
                                    /><br />
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="w3-container w3-margin">
                    <div className="w3-display-container pdfButton">
                        <div className="w3-container w3-display-middle">
                            <Button
                                className="w3-green"
                                style={{height: 60, width: 150}}
                                variant="contained" 
                                size="large"
                                color="primary" 
                                onClick={() => {
                                    html2canvas(document.querySelector("#paper")).then(canvas => {
                                        const paperImg = canvas.toDataURL('image/png');
                                        const pdf = new jsPDF();
                                        pdf.viewerPreferences({
                                            'FitWindow': true,
                                            'CenterWindow': true
                                        }, true);
                                        pdf.addImage(paperImg, 'JPEG', 2, 0);
                                        pdf.save('mainPage.pdf');
                                    });
                                }}
                            >PDF</Button>
                        </div>
                    </div>
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
        department: state.form.department,
        subject: state.form.subject,
        assignNo: state.form.assignNo,
        sem: state.form.sem,
        name: state.form.name,
        roll: state.form.roll,
        batch: state.form.batch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);
