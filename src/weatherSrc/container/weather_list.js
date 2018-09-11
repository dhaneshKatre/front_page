import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
//import GoogleMap from '../components/google_map';
//import UberMap from '../components/uber_map';
import MapTile from '../components/leaflet_map';

class WeatherList extends React.Component {
    renderWeather(city) {
        const name = city.city.name;
        const temps = city.list.map(weather => weather.main.temp - 273.15);
        const pressure = city.list.map(weather => weather.main.pressure);
        const humidity = city.list.map(weather => weather.main.humidity);
        const { lon, lat } = city.city.coord;
        return ( 
            <tr key={name}>
                <td><MapTile lat={lat} lon={lon} /></td>
                <td><Chart data={temps} color="red" units="&#176;C" /></td>
                <td><Chart data={pressure} color="blue" units="hPa" /></td>
                <td><Chart data={humidity} color="orange" units="%"/></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (&#176;C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
