import React from 'react';
import TitleWeather from '../components/TitleWeather';
import SelectorCity from '../components/SelectorCity';
import ResultsWeather from '../components/ResultsWeather';
import Header from '../components/Header';

const WeatherPage = (props) => {
    return (
        <div>
            <Header />
            <TitleWeather />
            <SelectorCity citiesJson={props.citiesJson} city={props.city} setCity={props.setCity} getWeather={props.getWeather} />
            <ResultsWeather results={props.results} />
        </div>
    )
}

export default WeatherPage;
