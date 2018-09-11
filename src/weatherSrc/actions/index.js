import axios from 'axios';
const API_KEY = 'c0a5a1103112026083bf266d88eec21f';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'fetch_weather';

const weatherFetchedSuccess = (dispatch, data) => {
    dispatch({
        type: FETCH_WEATHER,
        payload: data
    });
};

export const fetchWeather = (city) => async dispatch => {
    try {
        const url = `${ROOT_URL}&q=${city},in`;
        let res = await axios.get(url);
        weatherFetchedSuccess(dispatch, res);
    } catch(e) {
        if(e.response.status === 404) {
            alert("Invalid city name!");
            return;
        }
    }
}
