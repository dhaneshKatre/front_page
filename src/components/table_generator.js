import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableGenerator extends Component {

    constructor(props) {
        super(props);
        setInterval(() => this.forceUpdate(), 2000);
    }

    renderCos() {
        let cos = []
        try {
            if(this.props.coArray.length === 0)
                for(let i=0;i<this.props.totalCos;i++)
                    cos.push(<td key={i}>CO{i+1}</td>);
            else for(let i=0;i<this.props.totalCos;i++)
                if (!this.props.coArray[i]) continue;
            else cos.push(<td colSpan={this.props.coArray[i].split(";").length} key={i}>CO{i+1}</td>);
        } catch(e) {
            console.log(e);
        }
        return cos;
    }

    renderMarks() {
        let tds = []
        try {
            tds = this.props.marksArray.map(item => {
                return item.split(";").map(mks => {
                    return <td>{mks}</td>
                });
            });
        } catch(e) {}
        return tds;
    }

    renderTD() {
        let ret = []
        try {
            ret = this.props.coArray.map(item => {
                return item.split(";").map(it => {
                    return <td></td>
                });
            });
        } catch(e) {}
        return ret;
    }

    renderQuestions() {
        let tds = []
        tds = this.props.coArray.map(item => {
            return item.split(";").map(ques => {
                return <td>{ques}</td>
            });
        });
        return tds;
    }

    render() {
        return (
            <div className="w3-container w3-center tableHolder">   
                <table className="w3-table" border="1">
                    <tbody>
                        <tr>
                            <td>Course Outcome</td>
                            {this.renderCos()}
                            <td></td>
                        </tr>
                        <tr>
                            <td>Question No.</td>
                            {this.renderQuestions()}
                            <td>Total</td>
                        </tr>
                        <tr>
                            <td>Marks Allotted</td>
                            {this.renderMarks()}
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Marks Obtained</td>
                            {this.renderTD()}
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        totalCos: state.form.totalCos,
        coArray: state.form.coArray,
        marksArray: state.form.marksArray
    }
}

export default connect(mapStateToProps)(TableGenerator);
