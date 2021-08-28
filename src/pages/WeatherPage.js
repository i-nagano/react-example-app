import React from 'react';
import Title from '../components/Title';
import SelectorCity from '../components/SelectorCity';
import ResultsWeather from '../components/ResultsWeather';
import Header from '../components/Header';

const WeatherPage = (props) => {
    return (
        <div>
            <Header />
            <Title titleWeather={props.titleWeather} />
            <SelectorCity citiesJson={props.citiesJson} city={props.city} setCity={props.setCity} getWeather={props.getWeather} />
            <ResultsWeather results={props.results} />
        </div>
    )
}

export default WeatherPage;
