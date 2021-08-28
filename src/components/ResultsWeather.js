import React from 'react';

const ResultsWeather = (props) => {
    return (
        <div className="results__weather">
            <br />
            <div className="card__weather">
            <div className="card__weather-body">
            <div className="card__weather__title">
            {props.results.date_dayOne && <span>{props.results.date_dayOne}</span>}
            {props.results.dateLabel_dayOne && <span>（{props.results.dateLabel_dayOne}）</span>}
            </div>
            <br />
            {<img className="card__weather__image" src={props.results.url_dayOne} width={props.results.width_dayOne} height={props.results.height_dayOne} alt={props.results.title_dayOne} />}
            <br />
            <div className="card__weather__title">
            {props.results.telop_dayOne && <span>{props.results.telop_dayOne}</span>}
            {props.results.weather_dayOne && <span>：　{props.results.weather_dayOne}。</span>}
            </div>
            <br />
            <div className="card__weather__excerpt">
            {props.results.wind_dayOne && <span>{props.results.wind_dayOne}</span>}
            {props.results.wave_dayOne && <span>：　{props.results.wave_dayOne}。</span>}
            {props.results.minCelsius_dayOne && <div><br />最低気温：　{props.results.minCelsius_dayOne}</div>}
            {props.results.maxCelsius_dayOne && <div>最高気温：　{props.results.maxCelsius_dayOne}</div>}
            {props.results.T00_06_dayOne && <div><br />降水確率</div>}
            {props.results.T00_06_dayOne && <div>00時〜06時：　{props.results.T00_06_dayOne}</div>}
            {props.results.T06_12_dayOne && <div>06時〜12時：　{props.results.T06_12_dayOne}</div>}
            {props.results.T12_18_dayOne && <div>12時〜18時：　{props.results.T12_18_dayOne}</div>}
            {props.results.T18_24_dayOne && <div>18時〜24時：　{props.results.T18_24_dayOne}</div>}
            </div>
            </div>
            </div>
            <br />
            <br />
            <div className="card__weather">
            <div className="card__weather-body">
            <div className="card__weather__title">
            {props.results.date_dayTwo && <span>{props.results.date_dayTwo}</span>}
            {props.results.dateLabel_dayTwo && <span>（{props.results.dateLabel_dayTwo}）</span>}
            </div>
            <br />
            {<img className="card__weather__image" src={props.results.url_dayTwo} width={props.results.width_dayTwo} height={props.results.height_dayTwo} alt={props.results.title_dayTwo} />}
            <br />
            <div className = "card__weather__title">
            {props.results.telop_dayTwo && <span>{props.results.telop_dayTwo}</span>}
            {props.results.weather_dayTwo && <span>：　{props.results.weather_dayTwo}。</span>}
            </div>
            <br />
            <div className = "card__weather__excerpt" >
            {props.results.wind_dayTwo && <span>{props.results.wind_dayTwo}</span>}
            {props.results.wave_dayTwo && <span>：　{props.results.wave_dayTwo}。</span>}
            {props.results.minCelsius_dayTwo && <div><br />最低気温：　{props.results.minCelsius_dayTwo}</div>}
            {props.results.maxCelsius_dayTwo && <div>最高気温：　{props.results.maxCelsius_dayTwo}</div>}
            {props.results.T00_06_dayTwo && <div><br />降水確率</div>}
            {props.results.T00_06_dayTwo && <div>00時〜06時：　{props.results.T00_06_dayTwo}</div>}
            {props.results.T06_12_dayTwo && <div>06時〜12時：　{props.results.T06_12_dayTwo}</div>}
            {props.results.T12_18_dayTwo && <div>12時〜18時：　{props.results.T12_18_dayTwo}</div>}
            {props.results.T18_24_dayTwo && <div>18時〜24時：　{props.results.T18_24_dayTwo}</div>}
            </div>
            </div>
            </div>
            <br />
            <br />
            <div className="card__weather">
            <div className="card__weather-body">
            <div className="card__weather__title">
            {props.results.date_dayThree && <span>{props.results.date_dayThree}</span>}
            {props.results.dateLabel_dayThree && <span>（{props.results.dateLabel_dayThree}）</span>}
            </div>
            <br />
            {<img className="card__weather__image" src={props.results.url_dayThree} width={props.results.width_dayThree} height={props.results.height_dayThree} alt={props.results.title_dayThree} />}
            <br />
            <div className="card__weather__title">
            {props.results.telop_dayThree && <span>{props.results.telop_dayThree}</span>}
            {props.results.weather_dayThree && <span>：　{props.results.weather_dayThree}。</span>}
            </div>
            <br />
            <div div className="card__weather__excerpt">
            {props.results.wind_dayThree && <span>{props.results.wind_dayThree}</span>}
            {props.results.wave_dayThree && <span>：　{props.results.wave_dayThree}。</span>}
            {props.results.minCelsius_dayThree && <div><br />最低気温：　{props.results.minCelsius_dayThree}</div>}
            {props.results.maxCelsius_dayThree && <div>最高気温：　{props.results.maxCelsius_dayThree}</div>}
            {props.results.T00_06_dayThree && <div><br />降水確率</div>}
            {props.results.T00_06_dayThree && <div>00時〜06時：　{props.results.T00_06_dayThree}</div>}
            {props.results.T06_12_dayThree && <div>06時〜12時：　{props.results.T06_12_dayThree}</div>}
            {props.results.T12_18_dayThree && <div>12時〜18時：　{props.results.T12_18_dayThree}</div>}
            {props.results.T18_24_dayThree && <div>18時〜24時：　{props.results.T18_24_dayThree}</div>}
            </div>
            </div>
            </div>
        </div>
    )
}

export default ResultsWeather;
