import React from 'react';

const Selector = (props) => {
    return (
        <div className="selector-container">
            <select onChange={(e) => props.setCity(e.target.value)} >
                <option>地域を選択</option>
                {props.citiesJson.map((city, index) => 
                    <option key={index} name={city.cityName} value={city.cityId}>{city.cityName}</option>
                )}
            </select>
            <button onClick={props.getWeather}>Get Weather</button>
        </div>
    )
}

export default Selector;
