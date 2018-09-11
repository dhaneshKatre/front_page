import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';

import SearchBar from './container/search_bar';
import WeatherList from './container/weather_list';

class App extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <WeatherList />
            </div>
        );
    }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#root'));

