import React, { useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import axios from 'axios';
import citiesJson from './cities.json';
import categoriesJson from './categories.json';
import WeatherPage from './pages/WeatherPage';
import NewsPage from './pages/NewsPage';
import TodoPage from './pages/TodoPage';
import './App.css';
// import { newsApi } from './newsApi';

function App() {
  // Weather Forecasts
  const titleWeather = 'Weather Forecast';
  const [city, setCity] = useState('016010');
  const [results, setResults] = useState({
    // 今日
    date_dayOne: '',
    dateLabel_dayOne: '',
    telop_dayOne: '',
    weather_dayOne: '',
    wind_dayOne: '',
    wave_dayOne: '',
    minCelsius_dayOne: '',
    maxCelsius_dayOne: '',
    T00_06_dayOne: '',
    T06_12_dayOne: '',
    T12_18_dayOne: '',
    T18_24_dayOne: '',
    title_dayOne: '',
    url_dayOne: '',
    width_dayOne: '',
    height_dayOne: '',
    // 明日
    date_dayTwo: '',
    dateLabel_dayTwo: '',
    telop_dayTwo: '',
    weather_dayTwo: '',
    wind_dayTwo: '',
    wave_dayTwo: '',
    minCelsius_dayTwo: '',
    maxCelsius_dayTwo: '',
    T00_06_dayTwo: '',
    T06_12_dayTwo: '',
    T12_18_dayTwo: '',
    T18_24_dayTwo: '',
    title_dayTwo: '',
    url_dayTwo: '',
    width_dayTwo: '',
    height_dayTwo: '',
    // 明後日
    date_dayThree: '',
    dateLabel_dayThree: '',
    telop_dayThree: '',
    weather_dayThree: '',
    wind_dayThree: '',
    wave_dayThree: '',
    minCelsius_dayThree: '',
    maxCelsius_dayThree: '',
    T00_06_dayThree: '',
    T06_12_dayThree: '',
    T12_18_dayThree: '',
    T18_24_dayThree: '',
    title_dayThree: '',
    url_dayThree: '',
    width_dayThree: '',
    height_dayThree: ''
  });

  const getWeather = (e) => {
    e.preventDefault();
    axios
      .get(`https://weather.tsukumijima.net/api/forecast/city/${city}`)
      .then(res => {
        setResults({
          // 今日
          date_dayOne: res.data.forecasts[0].date,
          dateLabel_dayOne: res.data.forecasts[0].dateLabel,
          telop_dayOne: res.data.forecasts[0].telop,
          weather_dayOne: res.data.forecasts[0].detail.weather,
          wind_dayOne: res.data.forecasts[0].detail.wind,
          wave_dayOne: res.data.forecasts[0].detail.wave,
          minCelsius_dayOne: res.data.forecasts[0].temperature.min.celsius,
          maxCelsius_dayOne: res.data.forecasts[0].temperature.max.celsius,
          T00_06_dayOne: res.data.forecasts[0].chanceOfRain.T00_06,
          T06_12_dayOne: res.data.forecasts[0].chanceOfRain.T06_12,
          T12_18_dayOne: res.data.forecasts[0].chanceOfRain.T12_18,
          T18_24_dayOne: res.data.forecasts[0].chanceOfRain.T18_24,
          title_dayOne: res.data.forecasts[0].image.title,
          url_dayOne: res.data.forecasts[0].image.url,
          width_dayOne: res.data.forecasts[0].image.width,
          height_dayOne: res.data.forecasts[0].image.height,
          // 明日
          date_dayTwo: res.data.forecasts[1].date,
          dateLabel_dayTwo: res.data.forecasts[1].dateLabel,
          telop_dayTwo: res.data.forecasts[1].telop,
          weather_dayTwo: res.data.forecasts[1].detail.weather,
          wind_dayTwo: res.data.forecasts[1].detail.wind,
          wave_dayTwo: res.data.forecasts[1].detail.wave,
          minCelsius_dayTwo: res.data.forecasts[1].temperature.min.celsius,
          maxCelsius_dayTwo: res.data.forecasts[1].temperature.max.celsius,
          T00_06_dayTwo: res.data.forecasts[1].chanceOfRain.T00_06,
          T06_12_dayTwo: res.data.forecasts[1].chanceOfRain.T06_12,
          T12_18_dayTwo: res.data.forecasts[1].chanceOfRain.T12_18,
          T18_24_dayTwo: res.data.forecasts[1].chanceOfRain.T18_24,
          title_dayTwo: res.data.forecasts[1].image.title,
          url_dayTwo: res.data.forecasts[1].image.url,
          width_dayTwo: res.data.forecasts[1].image.width,
          height_dayTwo: res.data.forecasts[1].image.height,
          // 明後日
          date_dayThree: res.data.forecasts[2].date,
          dateLabel_dayThree: res.data.forecasts[2].dateLabel,
          telop_dayThree: res.data.forecasts[2].telop,
          weather_dayThree: res.data.forecasts[2].detail.weather,
          wind_dayThree: res.data.forecasts[2].detail.wind,
          wave_dayThree: res.data.forecasts[2].detail.wave,
          minCelsius_dayThree: res.data.forecasts[2].temperature.min.celsius,
          maxCelsius_dayThree: res.data.forecasts[2].temperature.max.celsius,
          T00_06_dayThree: res.data.forecasts[2].chanceOfRain.T00_06,
          T06_12_dayThree: res.data.forecasts[2].chanceOfRain.T06_12,
          T12_18_dayThree: res.data.forecasts[2].chanceOfRain.T12_18,
          T18_24_dayThree: res.data.forecasts[2].chanceOfRain.T18_24,
          title_dayThree: res.data.forecasts[2].image.title,
          url_dayThree: res.data.forecasts[2].image.url,
          width_dayThree: res.data.forecasts[2].image.width,
          height_dayThree: res.data.forecasts[2].image.height
        });
      })
      .catch(err => {
        alert(err.message);
      });
  };
  
  // Latest News
  const titleNews = 'Latest News';
  const [category, setCategory] = useState('general');
  const [response, setResponse] = useState([]);
  const API_KEY = 'e76af48d19044e4e99a0a6ed768c4d0b';
  const getNews = (e) => {
    e.preventDefault();
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=jp&category=${category}&apiKey=${API_KEY}`)
      .then(res => setResponse(res.data.articles))
      .catch(err => {
        console.log(err.message);
      });
  };

  // Todo List
  const titleTop = 'Todo List by React/Firestore';



    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path={'/weather'}>
              <WeatherPage titleWeather={titleWeather} citiesJson={citiesJson} city={city} setCity={setCity} results={results} getWeather={getWeather} />
            </Route>
            <Route exact path={'/news'}>
              <NewsPage titleNews={titleNews} categoriesJson={categoriesJson} response={response} setResponse={setResponse} category={category} setCategory={setCategory} getNews={getNews} />
            </Route>
            <Route exact path={'/'}>
              <TodoPage titleTop={titleTop} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
}

export default App;
