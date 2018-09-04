import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import MainForm from './container/main_form';
import MainPaper from './container/main_paper';

class App extends React.Component {
    render() {
        return (
            <div className="w3-row-padding">
                <div className="w3-col s5 l5 m5 w3-container">
                    <MainForm />
                </div>
                <div className="w3-rest w3-container">
                    <MainPaper />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.querySelector('#root'));
