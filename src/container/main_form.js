//React Dependency
import React from 'react';

//Redux Dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

//Functional Dependencies
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Joyride from 'react-joyride';
import { EVENTS } from 'react-joyride/es/constants';

//UI Dependencies
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

//UI Icons Dependencies
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormatListNumbered from '@material-ui/icons/FormatListNumbered';
import Help from '@material-ui/icons/Help';
import School from '@material-ui/icons/School';
import PictureAsPdf from '@material-ui/icons/PictureAsPdf';
import Photo from '@material-ui/icons/Photo';
import Subject from '@material-ui/icons/Subject';
import Spellcheck from '@material-ui/icons/Spellcheck';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';

//Custom Functional Dependencies
import CoForm from '../components/co_form';

//Main Class MainForm
class MainForm extends React.Component {
    constructor(props) {
        super(props);
        //Steps for JoyRide
        this.state = {
            formToRender: 0,
            run: false,
            stepIndex: 0,
            steps: [
                {
                    target: '#form1',
                    content: 'Enter your academic details and assignment details here.',
                    placement: 'right',
                    showSkipButton: true,
                    showProgress: true,
                    hideBackButton: true,
                    disableBeacon: true
                },
                {
                    target: '#form3',
                    content: 'Enter your personal details here. You can leave this blank for generating templates.',
                    placement: 'right',
                    showSkipButton: true,
                    showProgress: true,
                    hideBackButton: true,
                    disableBeacon: true
                },
                {
                    target: '#almightyPdfButton',
                    content: 'The PDF button! Will generate PDF of following paper and auto-download it. Currently not suitable for phones.',
                    placement: 'top',
                    showSkipButton: true,
                    showProgress: true,
                    hideBackButton: true,
                    disableBeacon: true
                },
                {
                    target: '#almightyPngButton',
                    content: 'The PNG button! Will generate PNG of following paper and auto-download it. Made for phones.',
                    placement: 'top',
                    showSkipButton: true,
                    showProgress: true,
                    hideBackButton: true,
                    disableBeacon: true
                },
                {
                    target: '#paper',
                    content: 'The WYSIWYG paper. Content of this paper is gonna render on your PDF.',
                    placement: 'auto',
                    showSkipButton: true,
                    showProgress: true,
                    hideBackButton: true,
                    disableBeacon: true
                },
                {
                    target: '#form2',
                    content: 'The most important part of this app, table generator! Enter number of total CO\'s here and then subsequently enter question numbers and their marks as per the assignment. Separate questions and marks with a ; (like 1a;1b;2a 03;05). Remember, how you specify, is how it\'ll generate XD',
                    placement: 'right',
                    showSkipButton: true,
                    disableBeacon: true,
                    showProgress: true,
                    hideBackButtob: true,
                    continuous: false
                },
                {
                    target: '#demo',
                    content: 'To review demo, click me! Thank you.',
                    placement: 'right',
                    showProgress: true,
                    hideBackButton: true,
                    disableBeacon: true
                }
            ]
        };
    }

    //TextFields change helpers
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


    showButtonsData() {
        if(this.state.formToRender === 0) {
            return (
                <div className="w3-row navButtonsHolder">
                    <div className="w3-right">
                        <Button
                            title="Next"
                            id="btn_fwd"
                            className="w3-grey"
                            size="small"
                            variant="fab"
                            onClick={() => {
                                this.setState({formToRender: this.state.formToRender + 1});
                                window.scrollTo(0, 500);
                            }}
                        ><ArrowForward style={{margin: 5}}/></Button>
                    </div>
                </div>
            );
        }
        else if(this.state.formToRender === 2) {
            return (
                <div className="w3-row navButtonsHolder">
                    <div className="w3-left">
                        <Button
                            title="Prev"
                            id="btn_prev"
                            className="w3-grey"
                            size="small"
                            variant="fab"
                            onClick={() => {
                                this.setState({formToRender: this.state.formToRender - 1});
                                this.props.updateCoArray([]);
                                this.props.updateMarksArray([]);
                                this.props.totalCoChanged(0);
                            }}
                        ><ArrowBack style={{margin: 5}}/></Button>
                    </div>
                </div>
            );
        }
        else return (
            <div className="w3-row navButtonsHolder">
                <div className="w3-left">
                    <Button
                        title="Previous"
                        id="btn_back"
                        className="w3-grey"
                        size="small"
                        variant="fab"
                        onClick={() => {
                            this.setState({formToRender: this.state.formToRender - 1});
                            window.scrollTo(0, 0);
                        }}
                    ><ArrowBack style={{margin: 5}}/></Button>
                </div>
                <div className="w3-right">
                    <Button
                        title="Next"
                        id="btn_fwd"
                        className="w3-grey"
                        size="small"
                        variant="fab"
                        onClick={() => {
                            this.setState({formToRender: this.state.formToRender + 1});
                            window.scrollTo(0, 500);
                        }}
                    ><ArrowForward style={{margin: 5}}/></Button>
                </div>
            </div>
        );
    }

    getFormToRender() {
        switch(this.state.formToRender) {
            case 0:
                return(
                    <div className="w3-col w3-container w3-center">
                        <Card className="formCont" id="form1">
                            <CardContent>
                                <h3>Step {this.state.formToRender + 1} - Assignment Details</h3>
                                <form>
                                    <FormControl>
                                        <InputLabel htmlFor="dept-select">Department</InputLabel>
                                        <Select
                                            style={{width: 250}}
                                            value={this.props.department}
                                            onChange={this.onDepartmentChanged.bind(this)}
                                            inputProps={{name: 'Department', id: "dept-select"}}>
                                                <MenuItem value="Computer">Computer</MenuItem>
                                                <MenuItem value="Electronics">Electronics</MenuItem>
                                                <MenuItem value="Electronics &amp; Telecommunications">EXTC</MenuItem>
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
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                <Spellcheck />
                                                </InputAdornment>
                                            )
                                        }}
                                        style={{width: 250}}
                                        id="subject-name"
                                        label="Enter subject name"
                                        margin="normal"
                                        value={this.props.subject}
                                        onChange={this.onSubjectChanged.bind(this)}
                                    /><br />
                                    <TextField
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                <Subject />
                                                </InputAdornment>
                                            )
                                        }}
                                        style={{width: 250}}
                                        id="assign-no"
                                        label="Enter assignment number"
                                        margin="normal"
                                        type="number"
                                        value={this.props.assignNo}
                                        onChange={this.onAssignNoChanged.bind(this)}
                                    /><br />
                                </form>
                                {this.showButtonsData()}   
                            </CardContent>
                        </Card>
                    </div>
                );
            case 1:
                return(
                    <div className="w3-col w3-container w3-center">
                        <Card className="formCont" id="form3">
                            <CardContent>
                                <h3>Step {this.state.formToRender + 1} - Personal Details</h3>
                                <form>
                                    <TextField
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle />
                                                </InputAdornment>
                                            )
                                        }}
                                        id="name"
                                        label="Enter Name"
                                        margin="normal"
                                        value={this.props.name}
                                        onChange={this.onNameChanged.bind(this)}
                                    /><br />
                                    <TextField 
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                <FormatListNumbered />
                                                </InputAdornment>
                                            )
                                        }}
                                        id="roll"
                                        label="Enter Roll Number"
                                        margin="normal"
                                        value={this.props.roll}
                                        onChange={this.onRollChanged.bind(this)}
                                    /><br />
                                    <TextField 
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                <School />
                                                </InputAdornment>
                                            )
                                        }}
                                        id="batch"
                                        label="Enter Batch"
                                        margin="normal"
                                        value={this.props.batch}
                                        onChange={this.onBatchChanged.bind(this)}
                                    /><br />
                                </form>
                                {this.showButtonsData()}
                            </CardContent>
                        </Card>
                    </div>
                );
            case 2:
                return(
                    <div className="w3-col w3-container w3-center">
                        <Card id="form2">
                            <CardContent>
                                    <h3>Step {this.state.formToRender + 1} - CO Details</h3>
                                <CoForm />
                                {this.showButtonsData()} 
                            </CardContent>
                        </Card>
                    </div>
                );
            default:
        }
    }

    //JoyRide callback
    callback = (tour) => {
        const { type } = tour;
        let demo = document.getElementById("demo");
        if(type === EVENTS.TOUR_END || type === EVENTS.CLOSE) {
            this.setState({run: false, stepIndex: 0, formToRender: 0});
        }
        else if(type === EVENTS.STEP_AFTER) {
            if(this.state.stepIndex + 1 === 1){
                this.setState({stepIndex: this.state.stepIndex + 1, formToRender: 1});
                setTimeout(() => {
                    demo.click();
                },100);
            }
            else if(this.state.stepIndex + 1 === 5){
                this.setState({stepIndex: this.state.stepIndex + 1, formToRender: 2});
                setTimeout(() => {
                    demo.click();
                },100);
            }
            else this.setState({stepIndex: this.state.stepIndex + 1});
        }
    }

    render() {
        const { steps, run, stepIndex } = this.state;
        return (
            <div>
                <div>
                    <Joyride
                        locale={{back: 'Back', close: 'Close', last: 'Last', next: 'Next', skip: 'Skip the tour'}}
                        steps={steps}
                        continuous={true}
                        run={run}
                        stepIndex={stepIndex}
                        callback={this.callback}
                    />
                </div>
                <div className="w3-container swipeContainer" style={{overflowY: 'auto'}}>
                    {this.getFormToRender()}
                    <div className="w3-container">
                        <div className="w3-container" style={{display: 'flex', justifyContent: 'center', marginTop: 10}}>
                            <Button
                                id="demo"
                                className="w3-amber"
                                style={{height: 60, width: 175, margin: 5}}
                                variant="contained"
                                onClick={() => {
                                    if(this.state.formToRender !== 0)
                                        this.setState({formToRender: 0});
                                    setTimeout(() => {
                                        this.setState({run: true});
                                    }, 100);
                                }}
                            ><Help style={{margin: 5}}/>How to use ?</Button>
                        </div>
                        <div className="w3-row">
                            <div className="w3-half w3-container">
                                <Button
                                    size="small"
                                    id="almightyPdfButton"
                                    className="w3-green almightyPdfButton"
                                    style={{height: 60, width: 150, margin: 5}}
                                    variant="contained"
                                    onClick={() => {
                                        let paper = document.querySelector("#paper");
                                        html2canvas(paper).then(paperImg => {
                                            const pdf = new jsPDF('p','pt','a4');
                                            let w = (window.innerWidth > 1030)?0:paper.offsetWidth;
                                            pdf.addImage(paperImg, 'JPEG', 0, 0, w, 0);
                                            pdf.save(`${this.props.subject}_${this.props.assignNo}_frontPage.pdf`);
                                        });
                                    }}
                                ><PictureAsPdf style={{margin: 5}}/>PDF</Button>
                            </div>
                            <div className="w3-half w3-container">
                                <Button
                                    id="almightyPngButton"
                                    className="w3-deep-purple almightyPngButton"
                                    style={{height: 60, width: 150, margin: 5}}
                                    size="small"
                                    variant="contained"
                                    onClick={() => {
                                        let paper = document.querySelector("#paper");
                                        html2canvas(paper).then(canvas => {
                                            let duri = canvas.toDataURL();
                                            let link = document.createElement("a");
                                            link.download = `${this.props.subject}_${this.props.assignNo}_frontPage.png`;
                                            link.href = duri;
                                            link.click(); 
                                        });
                                    }}
                                ><Photo style={{margin: 5}}/>PNG (Phones)</Button>
                            </div>
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
        totalCos: state.form.totalCos,
        sem: state.form.sem,
        name: state.form.name,
        roll: state.form.roll,
        batch: state.form.batch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);
